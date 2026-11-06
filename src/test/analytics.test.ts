import { trackAcceptedRequest, trackPhoneIntent, trackGiveawayEntry } from '@/lib/analytics';
afterEach(()=>vi.unstubAllGlobals());
it('sends only fixed lead fields after acceptance and never includes submitted text',()=>{
 const gtag=vi.fn();vi.stubGlobal('window',{location:{hostname:'shurdensroofing.com'},gtag});
 trackAcceptedRequest('contact','Private message must not be transmitted');
 expect(gtag).toHaveBeenCalledExactlyOnceWith('event','generate_lead',{form_id:'contact',lead_type:'roofing_inquiry',delivery_status:'webhook_accepted',page_location:'https://shurdensroofing.com/contact'});
});
it('keeps phone intent separate from accepted leads and disables preview analytics',()=>{
 const gtag=vi.fn();vi.stubGlobal('window',{location:{hostname:'preview.example'},gtag});
 trackPhoneIntent();trackAcceptedRequest('home','Inspection');expect(gtag).not.toHaveBeenCalled();
 vi.stubGlobal('window',{location:{hostname:'shurdensroofing.com'},gtag});trackPhoneIntent();expect(gtag).toHaveBeenCalledWith('event','click_to_call',{interaction_type:'phone_intent'});
});
it('tracks giveaway entries as their own event with only the entry type, and never on previews',()=>{
 const gtag=vi.fn();vi.stubGlobal('window',{location:{hostname:'preview.example'},gtag});
 trackGiveawayEntry('self');expect(gtag).not.toHaveBeenCalled();
 vi.stubGlobal('window',{location:{hostname:'shurdensroofing.com'},gtag});trackGiveawayEntry('nomination');
 expect(gtag).toHaveBeenCalledExactlyOnceWith('event','giveaway_entry',{entry_type:'nomination',delivery_status:'webhook_accepted'});
});
