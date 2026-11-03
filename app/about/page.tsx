import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Compass } from "lucide-react";

export default function AboutPage() {
  return <main className="inner-page">
    <section className="page-hero page-wrap"><div className="section-kicker"><span>01</span> WHY THIS EXISTS</div><h1>A small place<br /><em>for a big chapter.</em></h1><p>This yearbook celebrates the people and moments that shaped our time at Seeta High School — before we take our next steps into university and beyond.</p></section>
    <section className="about-cards page-wrap">
      <article><BookOpen /><span>OUR STORY</span><h2>More than a school year.</h2><p>It’s the friendships, the lessons, the jokes that never got old, and the ordinary days that became special without us noticing.</p></article>
      <article><Heart /><span>OUR PEOPLE</span><h2>Everyone belongs in the story.</h2><p>Each student has a different journey. This yearbook is a chance to celebrate those differences and the community we built together.</p></article>
      <article><Compass /><span>WHAT COMES NEXT</span><h2>The story keeps going.</h2><p>As we move into university and new adventures, we can return here to remember where this chapter began.</p></article>
    </section>
    <section className="about-signoff page-wrap"><p className="eyebrow">WITH LOVE, FROM SEETA</p><h2>Wherever we go,<br /><em>we’ll always have this.</em></h2><Link className="button button-dark" href="/people">Meet the class <ArrowRight size={16}/></Link></section>
  </main>;
}
