import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/about", label: "Our Story" },
  { href: "/people", label: "The Class" },
  { href: "/memories", label: "Memories" },
  { href: "/journey", label: "Our Journey" },
  { href: "/messages", label: "Messages" },
];

export function SiteHeader() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Cedar High School yearbook home">
      <span className="brand-mark">C</span>
      <span className="brand-name">CEDAR HIGH SCHOOL<small>THE YEARBOOK</small></span>
    </Link>
    <nav className="nav-links" aria-label="Main navigation">
      {links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}
      <Link href="/messages" className="nav-cta">Leave a note <ArrowUpRight size={13}/></Link>
    </nav>
    <span className="mobile-menu" aria-hidden="true">☰</span>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-copy"><strong>CEDAR HIGH SCHOOL · THE YEARBOOK</strong><br/>One chapter together. A lifetime of memories.</div>
    <nav className="footer-nav" aria-label="Footer navigation">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
    <span className="footer-end">MADE WITH MEMORIES ♡</span>
  </footer>;
}
