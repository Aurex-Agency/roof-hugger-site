import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ContactPage from '@/pages/ContactPage';
import GuidePage from '@/pages/GuidePage';
import { Routes, Route } from 'react-router-dom';
import { octoberGuides } from '@/data/october-guides';
vi.mock('@/components/site/Navigation',()=>({default:()=>null}));
vi.mock('@/components/site/Footer',()=>({default:()=>null}));
vi.mock('@/components/site/MobileCallBar',()=>({default:()=>null}));
vi.mock('@/lib/referral',()=>({getReferralCode:()=>null}));
afterEach(cleanup);
it('publishes four complete distinct guides with useful service destinations',()=>{
 expect(octoberGuides).toHaveLength(4);
 expect(new Set(octoberGuides.map(g=>g.slug)).size).toBe(4);
 for (const guide of octoberGuides) {
  expect((guide.intro+' '+guide.sections.flatMap(s=>s.paragraphs).join(' ')).split(/\s+/).length).toBeGreaterThan(400);
  expect(guide.links.some(l=>l.to.startsWith('/services/'))).toBe(true);
  expect(guide.links.some(l=>l.to.startsWith('/contact?service='))).toBe(true);
  expect(guide.sources.length).toBeGreaterThan(0);
 }
});
for(const [key,label] of [['replacement','Roof Replacement'],['repair','Roof Repair'],['commercial','Commercial Roofing']] as const) {
 it('selects '+label+' from a known service link',()=>{
  render(<HelmetProvider><MemoryRouter initialEntries={['/contact?service='+key]}><ContactPage/></MemoryRouter></HelmetProvider>);
  expect(screen.getByLabelText(label,{selector:'input'})).toBeChecked();
 });
}
it('ignores an unknown query selection',()=>{
 render(<HelmetProvider><MemoryRouter initialEntries={['/contact?service=constructor']}><ContactPage/></MemoryRouter></HelmetProvider>);
 expect(screen.getAllByRole('radio').every(r=>!(r as HTMLInputElement).checked)).toBe(true);
});
it('labels the commercial article for building managers and exposes its contact path',()=>{
 render(<HelmetProvider><MemoryRouter initialEntries={['/guides/commercial-roof-leak-response-checklist']}><Routes><Route path='/guides/:slug' element={<GuidePage/>}/></Routes></MemoryRouter></HelmetProvider>);
 expect(screen.getByText('Building manager guide')).toBeInTheDocument();
 expect(screen.getByRole('link',{name:'Request a commercial assessment'})).toHaveAttribute('href','/contact?service=commercial');
 expect(screen.getByText('October 27, 2026')).toBeInTheDocument();
});
