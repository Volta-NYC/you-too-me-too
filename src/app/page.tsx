import Image from "next/image";
import Link from "next/link";
import { collections, reviews, site } from "@/lib/site";
import { LocaleText } from "@/components/LocaleText";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><LocaleText en="Flushing, Queens · Women-owned · Asian-owned" zh="纽约法拉盛 · 女性经营 · 亚裔经营" /></p>
          <h1><LocaleText en="Your look." zh="你的风格。" /><br /><em><LocaleText en="Your moment." zh="你的时刻。" /></em></h1>
          <p className="hero-deck"><LocaleText en="A two-floor styling boutique for women’s clothing, occasion dresses, bridal, shoes, bags, jewelry, and the finishing details that make it yours." zh="一间两层楼的造型精品店，提供女装、礼服、婚纱、鞋履、包袋、珠宝与成就你完整风格的最后细节。" /></p>
          <div className="actions">
            <Link className="button button-dark" href="/collections"><LocaleText en="Explore the boutique" zh="探索精品店" /></Link>
            <a className="text-action" href={site.mapsHref} target="_blank" rel="noreferrer"><LocaleText en="Get directions" zh="获取路线" /> <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note">
            <span className="star" aria-hidden="true">★</span>
            <span><strong><LocaleText en="5.0 on Google" zh="Google 评分 5.0" /></strong><small><LocaleText en="Across 8 current reviews" zh="基于 8 条当前评价" /></small></span>
          </div>
        </div>
        <div className="hero-collage" aria-label="Inside You Too Me Too Styling Boutique">
          <figure className="hero-image hero-image-main">
            <Image src="/images/mannequins.jpg" alt="Styled mannequins in dresses, hats, shoes, and bags" fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 45vw" />
          </figure>
          <figure className="hero-image hero-image-detail">
            <Image src="/images/jewelry.jpg" alt="Layered jewelry selected at You Too Me Too" fill loading="eager" sizes="(max-width: 900px) 40vw, 18vw" />
          </figure>
          <p className="hero-stamp">日韩礼服<br />造型馆</p>
        </div>
      </section>

      <section className="marquee" aria-label="Boutique specialties">
        <div>
          <span>Wedding & occasion</span><i>✦</i><span>Everyday style</span><i>✦</i><span>Shoes & bags</span><i>✦</i><span>Jewelry & accessories</span><i>✦</i>
          <span aria-hidden="true">Wedding & occasion</span><i aria-hidden="true">✦</i><span aria-hidden="true">Everyday style</span><i aria-hidden="true">✦</i><span aria-hidden="true">Shoes & bags</span><i aria-hidden="true">✦</i><span aria-hidden="true">Jewelry & accessories</span><i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="home-intro" data-reveal>
        <div>
          <p className="eyebrow"><LocaleText en="Styled, not just stocked" zh="不只是陈列，更是造型" /></p>
          <h2><LocaleText en="Come for a dress. Leave with a whole point of view." zh="为一条裙子而来，带着完整风格离开。" /></h2>
        </div>
        <div>
          <p><LocaleText en="Grace built You Too Me Too around the part of fashion that happens person to person: noticing what makes someone light up, offering a fresh combination, and finding pieces that feel good beyond the fitting room." zh="Grace 围绕时尚中人与人之间的连接创立了 You Too Me Too：发现让人眼前一亮的细节，尝试新鲜搭配，找到走出试衣间后依然感觉很好的单品。" /></p>
          <Link className="text-action" href="/styling"><LocaleText en="How styling works" zh="了解造型服务" /> <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="collection-preview" data-reveal>
        <div className="section-heading">
          <p className="eyebrow"><LocaleText en="Across two floors" zh="上下两层" /></p>
          <h2><LocaleText en="One stop, many moods." zh="一站到店，多样风格。" /></h2>
          <Link className="text-action" href="/collections"><LocaleText en="View all collections" zh="查看全部系列" /> <span aria-hidden="true">→</span></Link>
        </div>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <article className={`collection-card card-${index + 1}`} key={collection.title}>
              <Link href="/collections" aria-label={`Explore ${collection.title}`}>
                <Image src={collection.image} alt={collection.alt} fill loading={index === 1 ? "eager" : "lazy"} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <div className="card-scrim" />
              <div className="card-copy"><span>{collection.chinese}</span><h3><LocaleText en={collection.title} zh={collection.titleChinese} /></h3></div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="styling-rail" data-reveal>
        <div className="rail-copy">
          <p className="eyebrow"><LocaleText en="The styling rail" zh="造型精选" /></p>
          <h2><LocaleText en="Build the look from every angle." zh="从每个角度完成你的造型。" /></h2>
          <p><LocaleText en="Clothes, shoes, hats, bags, jewelry, and beauty pieces live together here, so the final detail is never an afterthought." zh="服装、鞋履、帽子、包袋、珠宝与美妆单品汇聚于此，让最后的细节不再是事后补充。" /></p>
        </div>
        <div className="rail-images">
          <figure><Image src="/images/boutique-display.jpg" alt="The full boutique selection" fill sizes="(max-width: 800px) 100vw, 55vw" /></figure>
          <figure><Image src="/images/bridal.jpg" alt="Bridal dress and veil" fill sizes="(max-width: 800px) 50vw, 22vw" /></figure>
        </div>
      </section>

      <section className="review-section" data-reveal>
        <div className="review-heading">
          <p className="eyebrow"><LocaleText en="What customers notice" zh="顾客的感受" /></p>
          <h2><LocaleText en="Taste, care, and pieces worth keeping." zh="品味、用心，以及值得珍藏的单品。" /></h2>
        </div>
        <div className="review-list">
          {reviews.map((review) => (
            <blockquote key={review.name}>
              <span aria-hidden="true">★★★★★</span>
              <p>“{review.quote}”</p>
              <cite>{review.name} · Google review</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="visit-banner" data-reveal>
        <div className="visit-image"><Image src="/images/stairway.jpg" alt="Pink staircase leading upstairs to You Too Me Too" fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        <div className="visit-copy">
          <p className="eyebrow"><LocaleText en="Find us upstairs" zh="楼上见" /></p>
          <h2><LocaleText en="A fashion find on Main Street." zh="缅街上的时尚宝藏。" /></h2>
          <p><LocaleText en="Look for the bright pink You Too Me Too sign at 41-22 Main Street on 41st Road, then follow the pink stairs to the second-floor boutique." zh="在 41 路 41-22 Main Street 寻找亮粉色的 You Too Me Too 招牌，然后沿粉色楼梯前往二楼精品店。" /></p>
          <div className="actions">
            <a className="button button-light" href={site.mapsHref} target="_blank" rel="noreferrer"><LocaleText en="Get directions" zh="获取路线" /></a>
            <a className="text-action light-link" href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
