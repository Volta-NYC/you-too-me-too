"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["Collections", "/collections"],
  ["Styling", "/styling"],
  ["Our story", "/story"],
  ["Visit", "/visit"],
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
        {links.map(([label, href]) => (
          <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
      <a className="nav-call" href={site.phoneHref}>Call the boutique</a>
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
