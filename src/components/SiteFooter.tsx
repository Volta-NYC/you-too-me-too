import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <p className="footer-mark">YOU TOO<br />ME TOO</p>
        <p>Personal style, occasion dressing, and a little more confidence, found upstairs on Main Street in Flushing.</p>
      </div>
      <nav aria-label="Footer navigation">
        <strong>Explore</strong>
        <Link href="/collections">Collections</Link>
        <Link href="/styling">Styling</Link>
        <Link href="/story">Our story</Link>
        <Link href="/visit">Visit</Link>
      </nav>
      <address>
        <strong>Visit</strong>
        <a href={site.mapsHref} target="_blank" rel="noreferrer">{site.address}</a>
        <a href={site.phoneHref}>{site.phone}</a>
        <a href={site.xiaohongshuHref} target="_blank" rel="noreferrer">Follow on Xiaohongshu</a>
      </address>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} You Too Me Too Styling Boutique</span>
        <a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a>
      </div>
    </footer>
  );
}
