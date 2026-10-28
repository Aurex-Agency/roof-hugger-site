import { Link } from "react-router-dom";
const services = [
  { title: "Roof Repair", description: "Start with the leak source and a defined repair scope.", path: "/services/roof-repair" },
  { title: "Replacement", description: "Compare materials, preparation and written estimates.", path: "/services/roof-replacement" },
  { title: "Commercial", description: "Discuss your building, access and roofing needs.", path: "/services/commercial-roofing" },
  { title: "Local Service", description: "Explore our North Mississippi service area.", path: "/service-areas" },
];
export default function Stats() {
 return <section className="bg-secondary py-12 text-secondary-foreground sm:py-16 md:py-20" aria-label="Roofing services"><div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">{services.map(s=><div key={s.title}><h2 className="font-display text-3xl text-primary"><Link className="underline underline-offset-4" to={s.path}>{s.title}</Link></h2><p className="mt-4 font-body leading-relaxed">{s.description}</p></div>)}</div></section>;
}
