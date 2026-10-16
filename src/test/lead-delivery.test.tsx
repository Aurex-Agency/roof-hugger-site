import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Contact from '@/components/site/Contact';
import ContactPage from '@/pages/ContactPage';
import { trackAcceptedRequest } from '@/lib/analytics';
import { toast } from '@/hooks/use-toast';
vi.mock('@/lib/analytics',()=>({trackAcceptedRequest:vi.fn()}));
vi.mock('@/hooks/use-toast',()=>({toast:vi.fn()}));
vi.mock('@/lib/referral',()=>({getReferralCode:()=>null}));
vi.mock('@/components/site/Navigation',()=>({default:()=>null}));
vi.mock('@/components/site/Footer',()=>({default:()=>null}));
vi.mock('@/components/site/MobileCallBar',()=>({default:()=>null}));
function fill() {
 fireEvent.change(screen.getByLabelText('Full Name'),{target:{value:'Test Person'}});
 fireEvent.change(screen.getByLabelText('Phone Number'),{target:{value:'6625550123'}});
 fireEvent.click(screen.getByLabelText('Inspection',{selector:'input'}));
 fireEvent.change(screen.getByLabelText("What's going on with your roof?"),{target:{value:'Isolated automated test'}});
 fireEvent.click(screen.getByRole('checkbox'));
 return screen.getByRole('button',{name:/Request My Free Inspection/}).closest('form')!;
}
beforeEach(()=>{vi.clearAllMocks();vi.stubGlobal('fetch',vi.fn(()=>Promise.reject(new Error('Unstubbed network prohibited'))));});
afterEach(()=>{cleanup();vi.unstubAllGlobals();});
for (const [label,Component,requests] of [['home',Contact,1],['contact',ContactPage,2]] as const) {
 describe(label+' request confirmation',()=>{
  function mount(){render(<HelmetProvider><MemoryRouter><Component /></MemoryRouter></HelmetProvider>);}
  it('does not report a lead on rejected delivery and preserves the form',async()=>{
   vi.mocked(fetch).mockResolvedValue({ok:false,status:500} as Response);
   mount();fireEvent.submit(fill());
   await waitFor(()=>expect(toast).toHaveBeenCalledWith(expect.objectContaining({title:'Could not send request'})));
   expect(trackAcceptedRequest).not.toHaveBeenCalled();expect(screen.getByLabelText('Full Name')).toHaveValue('Test Person');
  });
  it('reports exactly one accepted request and blocks duplicate concurrent submissions',async()=>{
   let finish!: (response:Response)=>void;
   const pending=new Promise<Response>(resolve=>{finish=resolve;});
   vi.mocked(fetch).mockReturnValue(pending);
   mount();const form=fill();fireEvent.submit(form);fireEvent.submit(form);
   expect(fetch).toHaveBeenCalledTimes(requests);expect(trackAcceptedRequest).not.toHaveBeenCalled();
   finish({ok:true,status:200} as Response);
   await waitFor(()=>expect(trackAcceptedRequest).toHaveBeenCalledExactlyOnceWith(label,'Inspection'));
   expect(screen.getByLabelText('Full Name')).toHaveValue('');
  });
 });
}
it('blocks nonproduction preview delivery before any request',async()=>{
 vi.stubEnv('MODE','production');
 render(<Contact />);fireEvent.submit(fill());
 expect(fetch).not.toHaveBeenCalled();expect(trackAcceptedRequest).not.toHaveBeenCalled();
 expect(toast).toHaveBeenCalledWith(expect.objectContaining({title:'Preview only'}));
 vi.unstubAllEnvs();
});
