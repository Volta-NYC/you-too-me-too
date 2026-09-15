"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "zh";

const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({
  locale: "en",
  setLocale: () => undefined,
});

export function LocaleProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    if (window.localStorage.getItem("yttm-locale") !== "zh") return;
    const frame = window.requestAnimationFrame(() => setLocale("zh"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("yttm-locale", locale);
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function LocaleText({ en, zh }: { en: string; zh: string }) {
  const { locale } = useContext(LocaleContext);
  return <>{locale === "zh" ? zh : en}</>;
}

export function LanguageToggle() {
  const { locale, setLocale } = useContext(LocaleContext);
  const nextLocale = locale === "en" ? "zh" : "en";
  return (
    <button className="language-toggle" type="button" onClick={() => setLocale(nextLocale)} aria-label={locale === "en" ? "切换至中文" : "Switch to English"}>
      <span aria-hidden="true">{locale === "en" ? "中文" : "EN"}</span>
    </button>
  );
}
