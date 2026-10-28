import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/site/Navigation';
import Footer from '@/components/site/Footer';
import MobileCallBar from '@/components/site/MobileCallBar';
import PageHero from '@/components/site/PageHero';
import { guides } from '@/data/guides';
const existingGuides = [
  { slug: 'roof-replacement-cost-mississippi', title: 'Roof replacement cost in Mississippi', description: 'Understand the scope and conditions that shape a written roof estimate.' },
  { slug: 'hail-damage-roof-insurance-claim-mississippi', title: 'Hail damage and roof insurance questions', description: 'Keep the roofing assessment and your insurance coverage conversation clear.' },
  { slug: 'roof-dormers', title: 'Roof dormers explained', description: 'Explore dormer forms and the roofing details around them.' },
];
export default function GuidesPage() {
 return <div className="pb-16 md:pb-0">
<SEO title="Roofing Guides for North Mississippi Properties" description="Prepare for roof inspections, compare replacement estimates and understand repair options with Shurden’s Roofing homeowner guides." path="/guides" />
<Navigation />
<main>
<PageHero eyebrow="Roofing resources" title="Make Your Next Roof Decision Clearer" subtitle="Practical questions, preparation checklists and explanations for North Mississippi homeowners and building managers." />
<section className="container py-14 grid gap-6 md:grid-cols-2">{[...guides,...existingGuides].map(g=>
<article key={g.slug} className="rounded-lg border border-border p-6 bg-card">
<h2 className="font-display text-2xl">
<Link className="underline decoration-primary underline-offset-4" to={`/guides/${g.slug}`}>{g.title}</Link>
</h2>
<p className="mt-4 leading-relaxed">{g.description}</p>
</article>)}</section>
</main>
<Footer />
<MobileCallBar />
</div>;
}
