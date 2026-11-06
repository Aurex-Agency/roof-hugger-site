import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MeetPage from '@/pages/MeetPage';
import { teamIntros } from '@/data/team-intros';
vi.mock('@/components/site/Navigation',()=>({default:()=>null}));
vi.mock('@/components/site/Footer',()=>({default:()=>null}));
vi.mock('@/components/site/MobileCallBar',()=>({default:()=>null}));
afterEach(cleanup);
const renderAt=(path:string)=>render(<HelmetProvider><MemoryRouter initialEntries={[path]}><Routes><Route path='/meet/:slug' element={<MeetPage/>}/></Routes></MemoryRouter></HelmetProvider>);
for (const intro of teamIntros) {
 it('shows '+intro.firstName+"'s intro video with a call link",()=>{
  const { container } = renderAt('/meet/'+intro.slug);
  expect(screen.getByRole('heading',{level:1})).toHaveTextContent('Meet '+intro.name);
  const video=container.querySelector('video')!;
  expect(video).toHaveAttribute('src',intro.video);
  expect(video).toHaveAttribute('poster',intro.poster);
  expect(video.hasAttribute('playsinline')).toBe(true);
  expect(screen.getByRole('link',{name:/Call 662-498-6629/})).toHaveAttribute('href','tel:6624986629');
 });
}
it('uses MP4 files on https so iPhone and Android both play them',()=>{
 for (const intro of teamIntros) { expect(intro.video).toMatch(/^https:\/\/.+\.mp4$/); expect(intro.poster).toMatch(/^https:\/\/.+\.jpg$/); }
});
it('falls back to the 404 page for an unknown person',()=>{
 renderAt('/meet/someone-else');
 expect(screen.getByText('Oops! Page not found')).toBeInTheDocument();
});
