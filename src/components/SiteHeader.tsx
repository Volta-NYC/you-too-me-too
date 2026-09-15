"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageToggle, LocaleText } from "@/components/LocaleText";
import { site } from "@/lib/site";

const links = [
  ["Collections", "精选系列", "/collections"],
  ["Styling", "造型搭配", "/styling"],
  ["Our story", "关于我们", "/story"],
  ["Visit", "到店", "/visit"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <Link className="brand" href="/" aria-label="You Too Me Too home" onClick={() => setOpen(false)}>
        <span>YOU TOO</span>
        <span>ME TOO</span>
      </Link>
      <nav id="primary-navigation" aria-label="Primary navigation">
        {links.map(([label, chineseLabel, href]) => (
          <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}><LocaleText en={label} zh={chineseLabel} /></Link>
        ))}
      </nav>
      <div className="header-actions"><LanguageToggle /><a className="nav-call" href={site.phoneHref}><LocaleText en="Call the boutique" zh="致电店铺" /></a></div>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
