import { LanguageSwitcher } from "@/components/language-switcher";
import { WaitlistLink } from "@/components/waitlist-link";
import { Link, type Locale } from "@/i18n/routing";

type HeaderProps = {
  locale: Locale;
  labels: {
    join: string;
    language: string;
    privacy: string;
    product: string;
    skip: string;
    terms: string;
  };
};

export function Header({ labels, locale }: HeaderProps) {
  const navItems = [
    { href: "/", label: labels.product },
    { href: "/privacy", label: labels.privacy },
    { href: "/terms", label: labels.terms }
  ];

  return (
    <header className="border-b border-graphite/10 bg-ivory/90 backdrop-blur">
      <a className="skip-link" href="#main-content">
        {labels.skip}
      </a>
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          aria-label="RICORTU home"
          className="font-serif text-[1.72rem] font-semibold tracking-[0.19em] text-graphite"
          href="/"
        >
          RICORTU
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm text-graphite/70 md:flex"
        >
          {navItems.map((item) => (
            <Link
              className="transition hover:text-graphite focus:outline-none focus-visible:ring-2 focus-visible:ring-slate"
              href={item.href}
              key={item.href}
            >
            {item.label}
          </Link>
        ))}
        </nav>
        <div className="hidden md:block">
          <LanguageSwitcher label={labels.language} locale={locale} />
        </div>
        <WaitlistLink className="nav-waitlist-cta" href={`/${locale}#waitlist`}>
          {labels.join}
        </WaitlistLink>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 pb-4 text-sm text-graphite/70 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            className="shrink-0 transition hover:text-graphite focus:outline-none focus-visible:ring-2 focus-visible:ring-slate"
            href={item.href}
            key={item.href}
          >
          {item.label}
        </Link>
      ))}
        <LanguageSwitcher label={labels.language} locale={locale} />
      </nav>
    </header>
  );
}
