import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Seeta High School — The Yearbook",
  description: "One chapter together. A lifetime of memories. Seeta High School's graduating class yearbook.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
