import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, Noto_Sans_SC } from "next/font/google";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { LocaleProvider } from "@/components/LocaleText";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const cjk = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-cjk", display: "swap" });

export const metadata: Metadata = {
  title: { default: "You Too Me Too | Styling Boutique in Flushing", template: "%s | You Too Me Too" },
  description: "Women’s clothing, occasion looks, bridal, shoes, bags, jewelry, and personal styling at You Too Me Too on 41st Road, second floor, in Flushing, Queens.",
  keywords: ["Flushing boutique", "women's clothing Flushing", "bridal boutique Queens", "Korean fashion Flushing", "Japanese fashion Flushing"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "You Too Me Too Styling Boutique",
    description: "Find the look that feels like you in Flushing, Queens.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${sans.variable} ${cjk.variable}`}>
        <LocaleProvider>
          <ScrollRevealInit />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
