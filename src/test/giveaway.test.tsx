import { render, fireEvent, screen, waitFor, cleanup, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RoofGiveawayPage from '@/pages/RoofGiveawayPage';
import { trackGiveawayEntry } from '@/lib/analytics';
import { toast } from '@/hooks/use-toast';
vi.mock('@/lib/analytics',()=>({trackGiveawayEntry:vi.fn()}));
vi.mock('@/hooks/use-toast',()=>({toast:vi.fn()}));
vi.mock('@/lib/referral',()=>({getReferralCode:()=>''}));
vi.mock('@/components/site/Navigation',()=>({default:()=>null}));
vi.mock('@/components/site/Footer',()=>({default:()=>null}));
vi.mock('@/components/site/MobileCallBar',()=>({default:()=>null}));

const mount=()=>render(<HelmetProvider><MemoryRouter><RoofGiveawayPage/></MemoryRouter></HelmetProvider>);
const answer=(question:string,choice:string)=>fireEvent.click(within(screen.getByRole('group',{name:question})).getByLabelText(choice));
function fillSelfEntry({rules=true,sms=false}={}) {
 fireEvent.change(screen.getByLabelText('Full Name'),{target:{value:'TEST Giveaway Entry'}});
 fireEvent.change(screen.getByLabelText('Phone Number'),{target:{value:'6625550123'}});
 fireEvent.change(screen.getByLabelText('Home Address'),{target:{value:'123 Test St, Tupelo, MS'}});
 answer('Do you own the home?','Yes');
 answer('Is it your primary residence? (not a rental or business)','Yes');
 answer('Is it a single-family house?','Yes');
 answer('Does the roof have active leaks?','Not sure');
 if (rules) fireEvent.click(screen.getByRole('checkbox',{name:/I agree to the giveaway rules/}));
 if (sms) fireEvent.click(screen.getByRole('checkbox',{name:/Text me giveaway and inspection updates/}));
 return screen.getByRole('button',{name:/Enter the Giveaway/}).closest('form')!;
}
const sentBody=()=>JSON.parse(vi.mocked(fetch).mock.calls[0][1]!.body as string);

beforeEach(()=>{
 vi.clearAllMocks();sessionStorage.clear();
 window.history.pushState({},'','/roof-giveaway?utm_source=facebook&utm_medium=social&utm_campaign=giveaway-2026');
 vi.stubGlobal('fetch',vi.fn(()=>Promise.resolve({ok:true,status:200} as Response)));
});
afterEach(()=>{cleanup();vi.unstubAllGlobals();vi.useRealTimers();});

it('posts to the dedicated giveaway webhook with split consent, channel data and no nulls',async()=>{
 mount();fireEvent.submit(fillSelfEntry());
 await waitFor(()=>expect(screen.getByText('Entry Received')).toBeInTheDocument());
 expect(vi.mocked(fetch).mock.calls[0][0]).toBe('https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/233dd6ae-ba27-45e5-8c21-4b17133ec16a');
 const body=sentBody();
 expect(body).toMatchObject({entry_type:'self',rules_accepted:true,sms_consent:false,utm_source:'facebook',utm_medium:'social',utm_campaign:'giveaway-2026',landing_page:'/roof-giveaway?utm_source=facebook&utm_medium=social&utm_campaign=giveaway-2026',form_version:'2026-11-giveaway-v2'});
 expect(body).not.toHaveProperty('opt_in');
 expect(Object.values(body).some(v=>v===null)).toBe(false);
 expect(trackGiveawayEntry).toHaveBeenCalledWith('self');
});

it('sends sms_consent true only when the optional text box is checked',async()=>{
 mount();fireEvent.submit(fillSelfEntry({sms:true}));
 await waitFor(()=>expect(fetch).toHaveBeenCalled());
 expect(sentBody().sms_consent).toBe(true);
});

it('requires the rules box but not the text box',()=>{
 mount();fireEvent.submit(fillSelfEntry({rules:false}));
 expect(fetch).not.toHaveBeenCalled();
 expect(toast).toHaveBeenCalledWith(expect.objectContaining({title:'Please accept the rules'}));
});

it('drops honeypot submissions without sending anything',async()=>{
 const { container }=mount();
 const form=fillSelfEntry();
 fireEvent.change(container.querySelector('input[name="company"]')!,{target:{value:'Acme SEO'}});
 fireEvent.submit(form);
 await waitFor(()=>expect(screen.getByText('Entry Received')).toBeInTheDocument());
 expect(fetch).not.toHaveBeenCalled();
 expect(trackGiveawayEntry).not.toHaveBeenCalled();
});

it('accepts entries at 11:59 PM Central on Nov 25',()=>{
 vi.useFakeTimers({toFake:['Date']});vi.setSystemTime(new Date('2026-11-26T05:59:30Z'));
 mount();
 expect(screen.getByRole('button',{name:/Enter the Giveaway/})).toBeInTheDocument();
});

it('shows the official-rules basics and no prize value until one is set',()=>{
 mount();
 const rules=document.getElementById('rules')!;
 expect(within(rules).getByText(/No purchase is necessary to enter or win/)).toBeInTheDocument();
 expect(within(rules).getByText(/Sponsored by Shurden's Roofing, LLC, Maben, MS 39750/)).toBeInTheDocument();
 expect(within(rules).getByText(/not sponsored, endorsed, or administered by, or associated with, Facebook or Meta/)).toBeInTheDocument();
 expect(within(rules).getByText(/located in the Shurden's Roofing service area/)).toBeInTheDocument();
 expect(within(rules).queryByText(/approximate retail value/i)).not.toBeInTheDocument();
});

it('closes the form at midnight Central and sends nothing',()=>{
 vi.useFakeTimers({toFake:['Date']});vi.setSystemTime(new Date('2026-11-26T06:00:00Z'));
 mount();
 expect(screen.getByText('The Giveaway Is Closed to New Entries')).toBeInTheDocument();
 expect(screen.queryByRole('button',{name:/Enter the Giveaway/})).not.toBeInTheDocument();
 expect(fetch).not.toHaveBeenCalled();
});
