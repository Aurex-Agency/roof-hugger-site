import { Link, useParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/site/Navigation';
import Footer from '@/components/site/Footer';
import MobileCallBar from '@/components/site/MobileCallBar';
import PageHero from '@/components/site/PageHero';
import { guides } from '@/data/guides';
import NotFound from './NotFound';
export default function GuidePage() {
 const { slug } = useParams();
 const guide = guides.find(g=>g.slug===slug);
 if (!guide) return <NotFound />;
 const path = `/guides/${guide.slug}`;
 const url = `https://shurdensroofing.com${path}`;
 return <div className="pb-16 md:pb-0">
<SEO title={`${guide.title} | Shurden's Roofing`} description={guide.description} path={path} ogType="article" jsonLd={[
 { '@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,mainEntityOfPage:url,author:{'@type':'Organization',name:"Shurden's Roofing",'@id':'https://shurdensroofing.com/#business'},publisher:{'@id':'https://shurdensroofing.com/#business'} },
 { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{ '@type':'ListItem',position:1,name:'Home',item:'https://shurdensroofing.com/' },{ '@type':'ListItem',position:2,name:'Roofing guides',item:'https://shurdensroofing.com/guides' },{ '@type':'ListItem',position:3,name:guide.title,item:url }] }
 ]} />
<Navigation />
<main>
<PageHero eyebrow="Homeowner guide" title={guide.title} subtitle={guide.description} />
<article className="container max-w-3xl py-12 font-body leading-relaxed">
<nav aria-label="Breadcrumb" className="text-sm mb-8 flex gap-2 flex-wrap">
<Link to="/">Home</Link>
<span aria-hidden="true">/</span>
<Link className="underline" to="/guides">Roofing guides</Link>
</nav>
<p className="text-sm text-muted-foreground">By Shurden’s Roofing</p>
<p className="mt-6 text-lg">{guide.intro}</p>
<nav aria-label="In this guide" className="my-8 border border-border rounded-lg p-6">
<p className="font-bold">In this guide</p>
<ol className="list-decimal ml-5 mt-3 space-y-2">{guide.sections.map((s,i)=>
<li key={s.title}>
<a className="underline" href={`#section-${i+1}`}>{s.title}</a>
</li>)}</ol>
</nav>{guide.sections.map((s,i)=>
<section id={`section-${i+1}`} key={s.title} className="my-10 scroll-mt-28">
<h2 className="font-display text-3xl mb-4">{s.title}</h2>{s.paragraphs.map(p=>
<p key={p.slice(0,60)} className="mt-4">{p}</p>)}</section>)}<aside className="rounded-lg border border-border bg-muted p-6">
<h2 className="font-display text-2xl">Related guides and next steps</h2>
<ul className="mt-4 list-disc ml-5 space-y-3">{guide.links.map(l=>
<li key={l.to}>
<Link className="underline" to={l.to}>{l.label}</Link>
</li>)}</ul>
<h2 className="font-display text-xl mt-8">Source notes</h2>
<ul className="mt-3 space-y-2">{guide.sources.map(s=>
<li key={s.url}>
<a className="underline break-words" href={s.url}>{s.label}</a>
</li>)}</ul>
<p className="text-sm mt-4">General homeowner education. Roof conditions, scheduling, written scope and policy coverage require individual confirmation.</p>
</aside>
</article>
</main>
<Footer />
<MobileCallBar />
</div>;
}
