import Image from "next/image";
import Link from "next/link";
import { collections, reviews, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Flushing, Queens · Women-owned · Asian-owned</p>
          <h1>Your look.<br /><em>Your moment.</em></h1>
          <p className="hero-deck">A two-floor styling boutique for women’s clothing, occasion dresses, bridal, shoes, bags, jewelry, and the finishing details that make it yours.</p>
          <div className="actions">
            <Link className="button button-dark" href="/collections">Explore the boutique</Link>
            <a className="text-action" href={site.mapsHref} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note">
            <span className="star" aria-hidden="true">★</span>
            <span><strong>5.0 on Google</strong><small>Across 8 current reviews</small></span>
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
          <p className="eyebrow">Styled, not just stocked</p>
          <h2>Come for a dress. Leave with a whole point of view.</h2>
        </div>
        <div>
          <p>Grace built You Too Me Too around the part of fashion that happens person to person: noticing what makes someone light up, offering a fresh combination, and finding pieces that feel good beyond the fitting room.</p>
          <Link className="text-action" href="/styling">How styling works <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="collection-preview" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Across two floors</p>
          <h2>One stop, many moods.</h2>
          <Link className="text-action" href="/collections">View all collections <span aria-hidden="true">→</span></Link>
        </div>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <article className={`collection-card card-${index + 1}`} key={collection.title}>
              <Link href="/collections" aria-label={`Explore ${collection.title}`}>
                <Image src={collection.image} alt={collection.alt} fill loading={index === 1 ? "eager" : "lazy"} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <div className="card-scrim" />
                <div className="card-copy"><span>{collection.chinese}</span><h3>{collection.title}</h3></div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="styling-rail" data-reveal>
        <div className="rail-copy">
          <p className="eyebrow">The styling rail</p>
          <h2>Build the look from every angle.</h2>
          <p>Clothes, shoes, hats, bags, jewelry, and beauty pieces live together here, so the final detail is never an afterthought.</p>
        </div>
        <div className="rail-images">
          <figure><Image src="/images/boutique-display.jpg" alt="The full boutique selection" fill sizes="(max-width: 800px) 100vw, 55vw" /></figure>
          <figure><Image src="/images/bridal.jpg" alt="Bridal dress and veil" fill sizes="(max-width: 800px) 50vw, 22vw" /></figure>
        </div>
      </section>

      <section className="review-section" data-reveal>
        <div className="review-heading">
          <p className="eyebrow">What customers notice</p>
          <h2>Taste, care, and pieces worth keeping.</h2>
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
          <p className="eyebrow">Find us upstairs</p>
          <h2>A fashion find on Main Street.</h2>
          <p>Look for the bright pink You Too Me Too sign at 41-22 Main Street, then follow the pink stairs to the boutique.</p>
          <div className="actions">
            <a className="button button-light" href={site.mapsHref} target="_blank" rel="noreferrer">Get directions</a>
            <a className="text-action light-link" href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
