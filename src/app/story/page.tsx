import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet Grace and learn the story behind You Too Me Too Styling Boutique in Flushing, Queens.",
};

export default function StoryPage() {
  return (
    <>
      <PageIntro eyebrow="Our story · 关于我们" title="Starting over, with style intact." copy="You Too Me Too is Grace’s women-owned, Asian-owned styling boutique in the heart of Flushing. It is a story about resilience, community support, and the confidence a great outfit can unlock." />
      <section className="story-grid" data-reveal>
        <figure><Image src="/images/grace.jpg" alt="Grace smiling inside You Too Me Too Styling Boutique" fill priority sizes="(max-width: 800px) 100vw, 42vw" /><figcaption>Grace, owner and stylist</figcaption></figure>
        <div>
          <p className="eyebrow">Grace’s next chapter</p>
          <h2>A new storefront after a devastating fire.</h2>
          <p>After a fire in her previous storefront, Grace had to begin again in a new location. She rebuilt You Too Me Too around what she knows best: connecting with people through fashion and helping customers find outfits that bring out their confidence.</p>
          <p>In 2025, the Asian American Federation shared her story after its bilingual economic empowerment team helped the boutique strengthen its Google Maps presence with a clearer description, targeted keywords, and new photography.</p>
          <a className="text-action" href={site.facebookStoryHref} target="_blank" rel="noreferrer">Watch the AAF feature <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="story-values" data-reveal>
        <article><span>1</span><h3>Personal</h3><p>A boutique visit guided by the person, not an algorithm.</p></article>
        <article><span>2</span><h3>Eclectic</h3><p>Occasion looks, everyday pieces, shoes, bags, hats, jewelry, and beauty in one place.</p></article>
        <article><span>3</span><h3>Resilient</h3><p>A local Flushing business rebuilt with care and supported by its community.</p></article>
      </section>
      <section className="story-sign" data-reveal>
        <Image src="/images/signage.jpg" alt="The pink You Too Me Too storefront sign on Main Street" fill sizes="100vw" />
        <div><p className="eyebrow">Look up on Main Street</p><h2>The pink sign marks the spot.</h2></div>
      </section>
    </>
  );
}
