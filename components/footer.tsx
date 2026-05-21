import { Link, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  labels: {
    contact: string;
    privacy: string;
    terms: string;
    text: string;
  };
};

export function Footer({ labels }: FooterProps) {
  const footerLinks = [
    { href: "/privacy", label: labels.privacy },
    { href: "/terms", label: labels.terms }
  ];

  return (
    <footer className="border-t border-graphite/10 bg-paper px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-[0.16em]">
            RICORTU
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-graphite/65">
            {labels.text}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-graphite/65">
          {footerLinks.map((item) => (
            <Link className="hover:text-graphite" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="hover:text-graphite" href={`mailto:${siteConfig.email}`}>
            {labels.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
