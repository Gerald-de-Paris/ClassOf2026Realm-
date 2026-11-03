import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, BookOpen, Camera, Heart, Sparkles } from "lucide-react";
import { people, memories } from "@/lib/yearbook-data";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content page-wrap">
          <p className="eyebrow light-eyebrow"><span /> CEDAR HIGH SCHOOL · GRADUATING CLASS</p>
          <h1>One chapter together.<br /><em>A lifetime of memories.</em></h1>
          <p className="hero-copy">Before the next adventure begins, let’s remember the people, the laughter and the little moments that made these years ours.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/people">Meet the class <ArrowRight size={16} /></Link>
            <Link className="button button-glass" href="/memories">Explore our memories</Link>
          </div>
          <div className="hero-note"><span className="note-line" /> A keepsake for everything we shared</div>
        </div>
        <div className="hero-bottom page-wrap">
          <span>OUR SCHOOL YEARS</span><span className="hero-bottom-center">FRIENDS TODAY. ALUMNI TOMORROW.</span><span>CEDAR FOREVER <ArrowDownRight size={14} /></span>
        </div>
      </section>

      <section className="intro-section section-pad page-wrap">
        <div className="section-kicker"><span>01</span> A NOTE TO OUR CLASS</div>
        <div className="intro-grid">
          <h2>We came as students.<br /><em>We leave as a story.</em></h2>
          <div className="intro-text">
            <p>These pages hold more than names and photographs. They hold friendships we didn’t expect, lessons we’ll carry, and moments that will make us smile long after the final bell.</p>
            <p>Wherever university and life take us, a little piece of Cedar goes with us.</p>
            <Link className="text-link" href="/about">The story behind this yearbook <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="stat-row">
          <div><strong>One</strong><span>unforgettable chapter</span></div>
          <div><strong>Many</strong><span>paths ahead</span></div>
          <div><strong>Always</strong><span>part of Cedar</span></div>
        </div>
      </section>

      <section className="people-preview section-pad">
        <div className="page-wrap">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02</span> THE PEOPLE</div><h2>The faces behind<br /><em>the memories.</em></h2></div>
            <Link className="text-link" href="/people">Meet everyone <ArrowRight size={16} /></Link>
          </div>
          <div className="people-grid">
            {people.slice(0, 3).map((person, index) => (
              <Link href={`/people#${person.id}`} className={`person-card person-card-${index + 1}`} key={person.id}>
                <div className="person-image">
                  <Image src={person.image} alt={person.name} fill sizes="(max-width: 700px) 90vw, 30vw" />
                  <span className="person-number">0{index + 1}</span>
                </div>
                <div className="person-caption"><div><h3>{person.name}</h3><p>{person.tagline}</p></div><ArrowDownRight size={20} /></div>
              </Link>
            ))}
          </div>
          <p className="small-note">Sample profiles are included to demonstrate the layout. Replace them with your classmates’ details and photos.</p>
        </div>
      </section>

      <section className="memories-section section-pad page-wrap">
        <div className="section-heading">
          <div><div className="section-kicker"><span>03</span> THE LITTLE THINGS</div><h2>Some moments<br /><em>stay with us.</em></h2></div>
          <Link className="text-link" href="/memories">Open the gallery <ArrowRight size={16} /></Link>
        </div>
        <div className="memory-grid">
          {memories.slice(0, 3).map((memory, i) => (
            <Link href="/memories" className={`memory-card memory-card-${i + 1}`} key={memory.title}>
              <div className="memory-image"><Image src={memory.image} alt={memory.title} fill sizes="(max-width: 700px) 90vw, 33vw" /></div>
              <div className="memory-meta"><span>{memory.category}</span><h3>{memory.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-mark">“</div>
        <p>We may be leaving the same place,<br />but we’re taking different dreams into the world.</p>
        <span>CEDAR HIGH SCHOOL · OUR GRADUATING CLASS</span>
      </section>

      <section className="next-chapter page-wrap section-pad">
        <div className="next-icon"><Sparkles size={22} /></div>
        <div><div className="section-kicker"><span>04</span> AND NOW, WHAT’S NEXT?</div><h2>The next chapter<br /><em>is waiting for us.</em></h2><p>New campuses, new challenges, new beginnings. Here’s to keeping in touch and cheering one another on.</p></div>
        <Link className="button button-dark" href="/messages">Leave a message <ArrowRight size={16} /></Link>
      </section>
    </main>
  );
}
