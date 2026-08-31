import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { collections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore bridal, occasion dresses, women’s clothing, shoes, hats, bags, jewelry, and accessories in Flushing.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageIntro eyebrow="Collections · 精选系列" title="A whole wardrobe, under one pink sign." copy="The selection changes often. Visit the boutique to discover current clothing, occasion looks, bridal, shoes, hats, bags, jewelry, accessories, and beauty pieces." />
      <section className="collection-directory">
        {collections.map((collection, index) => (
          <article data-reveal key={collection.title} className={index % 2 ? "reverse" : ""}>
            <div className="directory-image"><Image src={collection.image} alt={collection.alt} fill loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="directory-copy">
              <span>{collection.chinese}</span>
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
              <a className="text-action" href={site.phoneHref}>Ask what is in store <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </section>
      <section className="note-band" data-reveal>
        <p className="eyebrow">Good to know</p>
        <h2>The website is a preview. The boutique is the collection.</h2>
        <p>Inventory, colors, and sizes change. Call before visiting if you are searching for a particular occasion or item.</p>
        <a className="button button-dark" href={site.phoneHref}>Call {site.phone}</a>
      </section>
    </>
  );
}
