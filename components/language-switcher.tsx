"use client";

import { useEffect, useRef, useState } from "react";
import { Link, type Locale, usePathname } from "@/i18n/routing";

const languages: Array<{ code: Locale; label: string; short: string }> = [
  { code: "en", label: "English", short: "EN" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "es", label: "Español", short: "ES" },
  { code: "de", label: "Deutsch", short: "DE" }
];

type LanguageSwitcherProps = {
  label: string;
  locale: Locale;
  variant?: "desktop" | "mobile";
};

export function LanguageSwitcher({
  label,
  locale,
  variant = "desktop"
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeLanguage = languages.find((language) => language.code === locale);

  function rememberLocale(nextLocale: Locale) {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    setIsOpen(false);
  }

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (variant === "mobile") {
    return (
      <div className="mobile-language-switcher" aria-label={label}>
        <p className="mobile-language-title">{label}</p>
        <div className="mobile-language-list">
          {languages.map((language) => (
            <Link
              className="mobile-language-item"
              href={pathname}
              key={language.code}
              locale={language.code}
              onClick={() => rememberLocale(language.code)}
            >
              <span>{language.label}</span>
              {language.code === locale ? (
                <span aria-hidden="true" className="language-check">
                  ✓
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="language-selector" ref={menuRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={label}
        className="language-trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true" className="language-globe">
          ○
        </span>
        <span>{activeLanguage?.short || "EN"}</span>
        <span aria-hidden="true" className="language-chevron">
          ▾
        </span>
      </button>
      {isOpen ? (
        <div className="language-menu" role="menu">
          {languages.map((language) => (
            <Link
              className="language-menu-item"
              href={pathname}
              key={language.code}
              locale={language.code}
              onClick={() => rememberLocale(language.code)}
              role="menuitem"
            >
              <span>{language.label}</span>
              {language.code === locale ? (
                <span aria-hidden="true" className="language-check">
                  ✓
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
