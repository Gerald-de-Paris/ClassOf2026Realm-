import Image from "next/image";
import { Search, ArrowUpRight } from "lucide-react";
import { people } from "@/lib/yearbook-data";

export default function PeoplePage() {
  return <main className="inner-page">
    <section className="page-hero page-wrap"><div className="section-kicker"><span>02</span> THE CLASS OF CEDAR</div><h1>Meet the<br /><em>people who made it.</em></h1><p>Every face holds a story. Browse the class and discover the people you’ve shared this chapter with.</p></section>
    <section className="page-wrap directory-section">
      <div className="directory-toolbar"><span>{people.length} FEATURED PROFILES</span><span className="search-note"><Search size={15}/> To add a search feature, see README</span></div>
      <div className="directory-grid">{people.map((person, i) => <article className="directory-card" id={person.id} key={person.id}>
        <div className="directory-photo"><Image src={person.image} alt={person.name} fill sizes="(max-width: 650px) 90vw, 30vw"/><span>0{i + 1}</span></div>
        <div className="directory-caption"><div><h2>{person.name}</h2><p>{person.tagline}</p></div><ArrowUpRight size={18}/></div>
        <p className="directory-bio">{person.bio}</p>
      </article>)}</div>
      <p className="small-note">These are demo entries. Edit <code>lib/yearbook-data.ts</code> to add the real class members.</p>
    </section>
  </main>;
}
