import Link from "next/link";
import { site } from "@/lib/site";
import { LocaleText } from "@/components/LocaleText";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <p className="footer-mark">YOU TOO<br />ME TOO</p>
        <p><LocaleText en="Personal style, occasion dressing, and a little more confidence, found upstairs on Main Street in Flushing." zh="个人风格、礼服造型和更多自信，都在法拉盛缅街二楼等你发现。" /></p>
      </div>
      <nav aria-label="Footer navigation">
        <strong><LocaleText en="Explore" zh="探索" /></strong>
        <Link href="/collections"><LocaleText en="Collections" zh="精选系列" /></Link>
        <Link href="/styling"><LocaleText en="Styling" zh="造型搭配" /></Link>
        <Link href="/story"><LocaleText en="Our story" zh="关于我们" /></Link>
        <Link href="/visit"><LocaleText en="Visit" zh="到店" /></Link>
      </nav>
      <address>
        <strong><LocaleText en="Visit" zh="到店" /></strong>
        <a href={site.mapsHref} target="_blank" rel="noreferrer"><LocaleText en={site.address} zh={site.addressChinese} /></a>
        <a href={site.phoneHref}>{site.phone}</a>
        <a href={site.xiaohongshuHref} target="_blank" rel="noreferrer"><LocaleText en="Follow on Xiaohongshu" zh="关注小红书" /></a>
      </address>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} You Too Me Too Styling Boutique</span>
        <a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a>
      </div>
    </footer>
  );
}
