import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { collections, site } from "@/lib/site";
import { LocaleText } from "@/components/LocaleText";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore bridal, occasion dresses, women’s clothing, shoes, hats, bags, jewelry, and accessories in Flushing.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageIntro eyebrow="Collections" eyebrowZh="精选系列" title="A whole wardrobe, under one pink sign." titleZh="一块粉色招牌下，装下整个衣橱。" copy="The selection changes often. Visit the boutique to discover current clothing, occasion looks, bridal, shoes, hats, bags, jewelry, accessories, and beauty pieces." copyZh="店内选择经常更新。欢迎到店探索当季服装、礼服、婚纱、鞋履、帽子、包袋、珠宝、配饰与美妆单品。" />
      <section className="collection-directory">
        {collections.map((collection, index) => (
          <article data-reveal key={collection.title} className={index % 2 ? "reverse" : ""}>
            <div className="directory-image"><Image src={collection.image} alt={collection.alt} fill loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="directory-copy">
              <span>{collection.chinese}</span>
              <h2><LocaleText en={collection.title} zh={collection.titleChinese} /></h2>
              <p><LocaleText en={collection.description} zh={collection.descriptionChinese} /></p>
              <a className="text-action" href={site.phoneHref}><LocaleText en="Ask what is in store" zh="咨询店内现有商品" /> <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </section>
      <section className="note-band" data-reveal>
        <p className="eyebrow"><LocaleText en="Good to know" zh="温馨提示" /></p>
        <h2><LocaleText en="The website is a preview. The boutique is the collection." zh="网站只是预览，真正的精选都在店里。" /></h2>
        <p><LocaleText en="Inventory, colors, and sizes change. Call before visiting if you are searching for a particular occasion or item." zh="库存、颜色与尺码会有变化。如果正在寻找特定场合或单品，请在到店前致电咨询。" /></p>
        <a className="button button-dark" href={site.phoneHref}><LocaleText en={`Call ${site.phone}`} zh={`致电 ${site.phone}`} /></a>
      </section>
    </>
  );
}
