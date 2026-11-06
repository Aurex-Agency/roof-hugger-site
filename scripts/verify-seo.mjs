import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';
import { validateUrls } from './indexnow.mjs';
const sitemap = fs.readFileSync('dist/sitemap.xml','utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const routes = new Set(urls.map(u=>new URL(u).pathname));
routes.add('/refer');routes.add('/referral-join');
const titles = new Set();
for (const u of urls) {
 const pathname = new URL(u).pathname;
 const doc = new JSDOM(fs.readFileSync(`dist${pathname==='/'?'/index':pathname}.html`,'utf8')).window.document;
 assert.equal(doc.querySelectorAll('h1').length,1,pathname+' H1');
 assert.equal(doc.querySelectorAll('link[rel=canonical]').length,1,pathname+' canonical count');
 assert.equal(doc.querySelector('link[rel=canonical]').href,u,pathname+' canonical');
 assert(doc.title && !titles.has(doc.title),pathname+' unique title');titles.add(doc.title);
 assert(doc.querySelector('meta[name=description]')?.content,pathname+' description');
 assert(!doc.querySelector('meta[name=robots]')?.content.includes('noindex'),pathname+' indexable');
 for(const script of doc.querySelectorAll('script[type="application/ld+json"]')) JSON.parse(script.textContent);
 for(const link of doc.querySelectorAll('a[href^="/"]')) {
  const target=link.getAttribute('href').split(/[?#]/)[0];
  assert(routes.has(target)||fs.existsSync('dist'+target),pathname+' broken link: '+target);
 }
}
assert(!sitemap.includes('<lastmod>'),'No fabricated build dates');
assert.equal(validateUrls([urls[0],urls[0]],sitemap).length,1);
for(const bad of ['https://evil.example/','https://shurdensroofing.com/?email=private','http://shurdensroofing.com/','https://shurdensroofing.com/refer']) assert.throws(()=>validateUrls([bad],sitemap));
const config=JSON.parse(fs.readFileSync('vercel.json','utf8'));
assert(!config.rewrites,'No catchall SPA rewrite');
const notfound=new JSDOM(fs.readFileSync('dist/404.html','utf8')).window.document;
assert(notfound.querySelector('meta[name=robots]').content.includes('noindex'));
// Booking-text intro pages: prerendered, noindex, out of the sitemap, playable inline, with a call link.
const meetPages=fs.readdirSync('dist/meet').filter(f=>f.endsWith('.html'));
assert(meetPages.length>=2,'meet pages prerendered');
for(const file of meetPages){
 const route='/meet/'+file.replace(/\.html$/,'');
 const doc=new JSDOM(fs.readFileSync('dist'+route+'.html','utf8')).window.document;
 assert(doc.querySelector('meta[name=robots]')?.content.includes('noindex'),route+' noindex');
 assert(!routes.has(route),route+' kept out of sitemap');
 assert.equal(doc.querySelectorAll('h1').length,1,route+' H1');
 const video=doc.querySelector('video');
 assert(video?.getAttribute('src')?.startsWith('https://')&&video.hasAttribute('playsinline')&&video.getAttribute('poster'),route+' inline video with poster');
 assert(doc.querySelector('a[href="tel:6624986629"]'),route+' tap-to-call');
}
console.log(`PASS: ${urls.length} sitemap pages: unique metadata, H1, canonical, schema and internal links; 404, sitemap freshness and IndexNow validation.`);
