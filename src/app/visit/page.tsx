import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: "Visit You Too Me Too at 41-22 Main Street in Flushing, Queens. View current hours, phone, and directions.",
};

export default function VisitPage() {
  return (
    <>
      <PageIntro eyebrow="Visit · 到店" title="Your next favorite piece is upstairs." copy="Visit the boutique on Main Street in Flushing. Look for the bright pink sign above the salon storefront and take the pink stairs to the second floor." />
      <section className="visit-grid" data-reveal>
        <div className="visit-photo"><Image src="/images/storefront.jpg" alt="Storefront and pink You Too Me Too sign at 41-22 Main Street" fill priority sizes="(max-width: 850px) 100vw, 48vw" /></div>
        <div className="visit-details">
          <div><span>Address</span><a href={site.mapsHref} target="_blank" rel="noreferrer">{site.address}</a><small>Second floor, up the pink stairs</small></div>
          <div><span>Phone</span><a href={site.phoneHref}>{site.phone}</a><small>Call for current inventory or questions</small></div>
          <div><span>Follow</span><a href={site.xiaohongshuHref} target="_blank" rel="noreferrer">Xiaohongshu</a><small>See updates from the boutique</small></div>
          <a className="button button-dark" href={site.mapsHref} target="_blank" rel="noreferrer">Open Google Maps</a>
        </div>
      </section>
      <section className="hours-section" data-reveal>
        <div><p className="eyebrow">Current listed hours</p><h2>Seven days a week.</h2><p>Hours were verified against the current Google Maps listing for this draft. Holiday hours may vary.</p></div>
        <dl>{site.hours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl>
      </section>
      <section className="visit-faq" data-reveal>
        <p className="eyebrow">Before you visit</p>
        <h2>Quick answers.</h2>
        <details><summary>Do I need an appointment?</summary><p>The public listings do not state that an appointment is required. Call the boutique if you are planning a focused styling visit or shopping for a specific occasion.</p></details>
        <details><summary>What does the boutique carry?</summary><p>Women’s clothing, wedding and formal dresses, shoes, hats, bags, jewelry, accessories, beauty items, and more. The in-store selection changes.</p></details>
        <details><summary>Does the boutique offer custom services?</summary><p>The Google listing mentions custom services. Call Grace at {site.phone} to ask what is currently available and what lead time may be needed.</p></details>
      </section>
    </>
  );
}
