import { LocaleText } from "@/components/LocaleText";

export function PageIntro({ eyebrow, eyebrowZh, title, titleZh, copy, copyZh }: { eyebrow: string; eyebrowZh: string; title: string; titleZh: string; copy: string; copyZh: string }) {
  return (
    <section className="page-intro">
      <p className="eyebrow"><LocaleText en={eyebrow} zh={eyebrowZh} /></p>
      <h1><LocaleText en={title} zh={titleZh} /></h1>
      <p><LocaleText en={copy} zh={copyZh} /></p>
    </section>
  );
}
