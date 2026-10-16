import { Link } from 'react-router-dom';
import { guides } from '@/data/guides';
export default function GuideLinks() {
 return <section className="bg-muted">
<div className="container py-12">
<h2 className="font-display text-3xl">Before You Decide on Roof Work</h2>
<p className="mt-4 max-w-3xl">Prepare for an inspection, understand repair options and compare the work in a written estimate.</p>
<ul className="grid gap-4 mt-6 md:grid-cols-2">{guides.map(g=>
<li key={g.slug}>
<Link className="block rounded-md border border-border bg-card p-4 underline underline-offset-4" to={`/guides/${g.slug}`}>{g.title}</Link>
</li>)}</ul>
<Link className="inline-block underline mt-6 py-2" to="/guides">All homeowner guides</Link>
</div>
</section>;
}
