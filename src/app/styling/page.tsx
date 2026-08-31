import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personal Styling",
  description: "Visit Grace at You Too Me Too for personal styling across clothing, occasion looks, shoes, bags, and accessories.",
};

const steps = [
  ["Start with the moment", "Tell Grace what you are dressing for, how you want to feel, and which parts of your style already feel like you."],
  ["Try a new combination", "Explore silhouettes, colors, and layers across a broad in-store selection. Styling is personal, practical, and never one formula."],
  ["Finish the whole look", "Bring in shoes, a bag, a hat, jewelry, or another small detail until the outfit feels complete from every angle."],
] as const;

export default function StylingPage() {
  return (
    <>
      <PageIntro eyebrow="Personal styling · 造型搭配" title="A second opinion with excellent taste." copy="Customers consistently mention Grace’s knowledge, passion for fashion, and eye for a complete look. Come in with a plan or begin with a blank slate." />
      <section className="styling-feature" data-reveal>
        <div className="styling-photo"><Image src="/images/grace.jpg" alt="Grace, owner of You Too Me Too Styling Boutique" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="styling-feature-copy">
          <p className="eyebrow">Meet Grace</p>
          <h2>Fashion feels different when someone really sees you.</h2>
          <p>Grace takes pride in styling customers in outfits that bring out their confidence. Her strength is connecting the pieces in front of her with the person standing beside them.</p>
          <a className="button button-dark" href={site.phoneHref}>Call the boutique</a>
        </div>
      </section>
      <section className="process-section" data-reveal>
        <p className="eyebrow">Your visit</p>
        <h2>From occasion to outfit.</h2>
        <div className="process-grid">
          {steps.map(([title, copy], index) => (
            <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <section className="image-quote" data-reveal>
        <Image src="/images/boutique-wide.jpg" alt="Shoes, hats, jewelry, and clothes lining the boutique" fill sizes="100vw" />
        <div><p>“Cute store with a ton of different clothing styles and accessories available.”</p><span>Annie Yang · Google review</span></div>
      </section>
    </>
  );
}
