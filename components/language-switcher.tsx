"use client";

import { Link, locales, type Locale, usePathname } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  es: "ES",
  fr: "FR",
  it: "IT"
};

type LanguageSwitcherProps = {
  label: string;
  locale: Locale;
};

export function LanguageSwitcher({ label, locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function rememberLocale(nextLocale: Locale) {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <div aria-label={label} className="flex items-center gap-2 text-xs">
      {locales.map((nextLocale) => (
        <Link
          aria-current={nextLocale === locale ? "true" : undefined}
          className={
            nextLocale === locale
              ? "font-semibold text-graphite"
              : "text-graphite/52 hover:text-graphite"
          }
          href={pathname}
          key={nextLocale}
          locale={nextLocale}
          onClick={() => rememberLocale(nextLocale)}
        >
          {labels[nextLocale]}
        </Link>
      ))}
    </div>
  );
}
