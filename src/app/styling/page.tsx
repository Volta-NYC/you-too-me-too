import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";
import { LocaleText } from "@/components/LocaleText";

export const metadata: Metadata = {
  title: "Personal Styling",
  description: "Visit Grace at You Too Me Too for personal styling across clothing, occasion looks, shoes, bags, and accessories.",
};

const steps = [
  ["Start with the moment", "Tell Grace what you are dressing for, how you want to feel, and which parts of your style already feel like you.", "从场合开始", "告诉 Grace 你要为哪种场合着装、想要怎样的感觉，以及哪些风格最像你自己。"],
  ["Try a new combination", "Explore silhouettes, colors, and layers across a broad in-store selection. Styling is personal, practical, and never one formula.", "尝试新搭配", "在丰富的店内选择中探索廓形、色彩与层次。造型贴合个人，也讲求实用，从来不只有一种公式。"],
  ["Finish the whole look", "Bring in shoes, a bag, a hat, jewelry, or another small detail until the outfit feels complete from every angle.", "完成整体造型", "搭配鞋履、包袋、帽子、珠宝或其他小细节，直到整套穿搭从每个角度都完整。"],
] as const;

export default function StylingPage() {
  return (
    <>
      <PageIntro eyebrow="Personal styling" eyebrowZh="造型搭配" title="A second opinion with excellent taste." titleZh="一位品味出众的造型搭档。" copy="Customers consistently mention Grace’s knowledge, passion for fashion, and eye for a complete look. Come in with a plan or begin with a blank slate." copyZh="顾客经常称赞 Grace 的专业、对时尚的热情，以及她对完整造型的独到眼光。带着想法来，或从零开始都可以。" />
      <section className="styling-feature" data-reveal>
        <div className="styling-photo"><Image src="/images/grace.jpg" alt="Grace, owner of You Too Me Too Styling Boutique" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="styling-feature-copy">
          <p className="eyebrow"><LocaleText en="Meet Grace" zh="认识 Grace" /></p>
          <h2><LocaleText en="Fashion feels different when someone really sees you." zh="当有人真正懂你，时尚的感觉就不一样。" /></h2>
          <p><LocaleText en="Grace takes pride in styling customers in outfits that bring out their confidence. Her strength is connecting the pieces in front of her with the person standing beside them." zh="Grace 擅长为顾客打造展现自信的穿搭。她的优势是把眼前的单品与身边这位独特的你连接起来。" /></p>
          <a className="button button-dark" href={site.phoneHref}><LocaleText en="Call the boutique" zh="致电店铺" /></a>
        </div>
      </section>
      <section className="process-section" data-reveal>
        <p className="eyebrow"><LocaleText en="Your visit" zh="你的到店体验" /></p>
        <h2><LocaleText en="From occasion to outfit." zh="从场合到完整穿搭。" /></h2>
        <div className="process-grid">
          {steps.map(([title, copy, titleZh, copyZh], index) => (
            <article key={title}><span>{index + 1}</span><h3><LocaleText en={title} zh={titleZh} /></h3><p><LocaleText en={copy} zh={copyZh} /></p></article>
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
