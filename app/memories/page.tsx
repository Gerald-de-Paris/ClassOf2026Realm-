import Image from "next/image";
import { memories } from "@/lib/yearbook-data";

export default function MemoriesPage() {
  return <main className="inner-page">
    <section className="page-hero page-wrap"><div className="section-kicker"><span>03</span> THE PHOTO ALBUM</div><h1>Life, as we<br /><em>remember it.</em></h1><p>Big days, quiet moments, classroom chaos and the photographs that bring it all back.</p></section>
    <section className="page-wrap gallery-section"><div className="gallery-topline"><span>MEMORIES FROM OUR CEDAR YEARS</span><span>PHOTOGRAPHS · FRIENDSHIPS · FIRSTS</span></div>
      <div className="gallery-grid">{memories.map((memory, i) => <figure className={`gallery-item gallery-item-${i + 1}`} key={memory.title}><div className="gallery-photo"><Image src={memory.image} alt={memory.title} fill sizes="(max-width: 650px) 90vw, 50vw"/></div><figcaption><span>{memory.category}</span><h2>{memory.title}</h2><p>{memory.caption}</p></figcaption></figure>)}</div>
      <div className="upload-note"><strong>Adding your own photographs</strong><p>Put each original photo in <code>public/images/</code>, then add its filename and caption to <code>lib/yearbook-data.ts</code>. Keep the original image files at full resolution; use appropriately sized copies only if page speed becomes an issue.</p></div>
    </section>
  </main>;
}
