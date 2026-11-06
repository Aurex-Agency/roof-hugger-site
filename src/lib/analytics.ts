// Fixed values only. Never send a name, phone, message, referral or query string.
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };
export function trackAcceptedRequest(form: 'home' | 'contact', service: string) {
  if (typeof window === 'undefined' || window.location.hostname !== 'shurdensroofing.com') return;
  const type = service === 'Inspection' ? 'inspection_request' : 'roofing_inquiry';
  try {
    (window as AnalyticsWindow).gtag?.('event', 'generate_lead', {
      form_id: form, lead_type: type, delivery_status: 'webhook_accepted',
      page_location: `https://shurdensroofing.com${form === 'home' ? '/' : '/contact'}`,
    });
  } catch { /* Analytics must never turn a delivered request into a form error. */ }
}

// Giveaway entries are tracked apart from generate_lead: an entry is not a sales
// request. Fixed values only, never a name, phone or address.
export function trackGiveawayEntry(entryType: 'self' | 'nomination') {
  if (typeof window === 'undefined' || window.location.hostname !== 'shurdensroofing.com') return;
  try {
    (window as AnalyticsWindow).gtag?.('event', 'giveaway_entry', { entry_type: entryType, delivery_status: 'webhook_accepted' });
  } catch { /* Analytics must never turn a delivered entry into a form error. */ }
}

// A phone click is intent, never a completed call or a confirmed lead.
export function trackPhoneIntent() {
  if (typeof window === 'undefined' || window.location.hostname !== 'shurdensroofing.com') return;
  try { (window as AnalyticsWindow).gtag?.('event', 'click_to_call', { interaction_type: 'phone_intent' }); } catch { /* Keep the link working. */ }
}
