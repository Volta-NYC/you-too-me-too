import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";
import { LocaleText } from "@/components/LocaleText";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet Grace and learn the story behind You Too Me Too Styling Boutique in Flushing, Queens.",
};

export default function StoryPage() {
  return (
    <>
      <PageIntro eyebrow="Our story" eyebrowZh="关于我们" title="Starting over, with style intact." titleZh="从新出发，风格依旧。" copy="You Too Me Too is Grace’s women-owned, Asian-owned styling boutique in the heart of Flushing. It is a story about resilience, community support, and the confidence a great outfit can unlock." copyZh="You Too Me Too 是 Grace 在法拉盛中心开设的女性经营、亚裔经营造型精品店。这里讲述的是韧性、社区支持，以及一套好衣服带来的自信。" />
      <section className="story-grid" data-reveal>
        <figure><Image src="/images/grace-client-photo.jpg" alt="Portrait of Grace, owner and stylist of You Too Me Too" fill priority sizes="(max-width: 800px) 100vw, 42vw" /><figcaption><LocaleText en="Grace, owner and stylist" zh="Grace，店主兼造型师" /></figcaption></figure>
        <div>
          <p className="eyebrow"><LocaleText en="Grace’s next chapter" zh="Grace 的新篇章" /></p>
          <h2><LocaleText en="A new storefront after a devastating fire." zh="经历大火后，重新开启一家新店。" /></h2>
          <p><LocaleText en="After a fire in her previous storefront, Grace had to begin again in a new location. She rebuilt You Too Me Too around what she knows best: connecting with people through fashion and helping customers find outfits that bring out their confidence." zh="此前店铺的一场火灾让 Grace 必须在新地点重新开始。她围绕自己最擅长的事重建了 You Too Me Too：用时尚连接人与人，帮助顾客找到令自己自信的穿搭。" /></p>
          <p><LocaleText en="In 2025, the Asian American Federation shared her story after its bilingual economic empowerment team helped the boutique strengthen its Google Maps presence with a clearer description, targeted keywords, and new photography." zh="2025 年，亚美联盟在其双语经济赋权团队帮助店铺完善 Google Maps 描述、关键词与摄影后，分享了 Grace 的故事。" /></p>
          <a className="text-action" href={site.facebookStoryHref} target="_blank" rel="noreferrer"><LocaleText en="Watch the AAF feature" zh="观看 AAF 专访" /> <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="story-values" data-reveal>
        <article><span>1</span><h3><LocaleText en="Personal" zh="贴心" /></h3><p><LocaleText en="A boutique visit guided by the person, not an algorithm." zh="以顾客本人为中心，而非由算法决定的精品店体验。" /></p></article>
        <article><span>2</span><h3><LocaleText en="Eclectic" zh="多元" /></h3><p><LocaleText en="Occasion looks, everyday pieces, shoes, bags, hats, jewelry, and beauty in one place." zh="礼服、日常服装、鞋履、包袋、帽子、珠宝与美妆，一站选购。" /></p></article>
        <article><span>3</span><h3><LocaleText en="Resilient" zh="坚韧" /></h3><p><LocaleText en="A local Flushing business rebuilt with care and supported by its community." zh="一家悉心重建、并获得社区支持的法拉盛本地企业。" /></p></article>
      </section>
      <section className="story-sign" data-reveal>
        <Image src="/images/storefront-client-photo.jpg" alt="You Too Me Too storefront on Main Street, including its bright pink sign" fill sizes="100vw" />
        <div><p className="eyebrow"><LocaleText en="Look up on Main Street" zh="缅街抬头可见" /></p><h2><LocaleText en="The pink sign marks the spot." zh="亮粉色招牌就是目的地。" /></h2></div>
      </section>
    </>
  );
}
