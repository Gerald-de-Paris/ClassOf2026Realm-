import { milestones } from "@/lib/yearbook-data";

export default function JourneyPage() {
  return <main className="inner-page">
    <section className="page-hero page-wrap"><div className="section-kicker"><span>04</span> THE ROAD SO FAR</div><h1>Every ending<br /><em>starts somewhere.</em></h1><p>A timeline of the milestones, lessons and little turning points that made our years at Cedar unforgettable.</p></section>
    <section className="timeline page-wrap">{milestones.map((item, i) => <article className="timeline-item" key={item.year + item.title}><div className="timeline-year">{item.year}</div><div className="timeline-dot"/><div className="timeline-copy"><span>CHAPTER {String(i + 1).padStart(2, "0")}</span><h2>{item.title}</h2><p>{item.description}</p></div></article>)}</section>
    <section className="timeline-end page-wrap"><p>THE NEXT CHAPTER</p><h2>University is calling.<br/><em>Let’s make it count.</em></h2></section>
  </main>;
}
