import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";
import { LocaleText } from "@/components/LocaleText";

export const metadata: Metadata = {
  title: "Visit",
  description: "Visit You Too Me Too at 41-22 Main Street, 41st Road, second floor, in Flushing, Queens. View current hours, phone, and directions.",
};

export default function VisitPage() {
  return (
    <>
      <PageIntro eyebrow="Visit" eyebrowZh="到店" title="Your next favorite piece is upstairs." titleZh="你下一件心头好，就在楼上。" copy="Visit the boutique on Main Street in Flushing. Look for the bright pink sign above the salon storefront and take the pink stairs to the second floor." copyZh="欢迎到访法拉盛缅街的精品店。找到美发店上方的亮粉色招牌，沿着粉色楼梯上到二楼。" />
      <section className="visit-grid" data-reveal>
        <div className="visit-photo"><Image src="/images/storefront-client-photo.jpg" alt="Storefront and pink You Too Me Too sign at 41-22 Main Street" fill priority sizes="(max-width: 850px) 100vw, 48vw" /></div>
        <div className="visit-details">
          <div><span><LocaleText en="Address" zh="地址" /></span><a href={site.mapsHref} target="_blank" rel="noreferrer"><LocaleText en={site.address} zh={site.addressChinese} /></a><small><LocaleText en="41st Road, second floor, up the pink stairs" zh="41 路二楼，沿粉色楼梯上楼" /></small></div>
          <div><span><LocaleText en="Phone" zh="电话" /></span><a href={site.phoneHref}>{site.phone}</a><small><LocaleText en="Call for current inventory or questions" zh="来电咨询当前商品或其他问题" /></small></div>
          <div><span><LocaleText en="Follow" zh="关注" /></span><a href={site.xiaohongshuHref} target="_blank" rel="noreferrer">Xiaohongshu</a><small><LocaleText en="See updates from the boutique" zh="查看店铺最新动态" /></small></div>
          <a className="button button-dark" href={site.mapsHref} target="_blank" rel="noreferrer"><LocaleText en="Open Google Maps" zh="打开 Google 地图" /></a>
        </div>
      </section>
      <section className="hours-section" data-reveal>
        <div><p className="eyebrow"><LocaleText en="Current listed hours" zh="当前营业时间" /></p><h2><LocaleText en="Seven days a week." zh="一周七天营业。" /></h2><p><LocaleText en="Hours were verified against the current Google Maps listing for this draft. Holiday hours may vary." zh="本草稿依据当前 Google Maps 信息核实营业时间。节假日时间可能有所不同。" /></p></div>
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
