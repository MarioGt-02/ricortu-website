import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/app", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-graphite/10 bg-paper px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-[0.16em]">
            RICORTU
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-graphite/65">
            A private atlas for the cities, countries, and memories that became
            part of your life.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-graphite/65">
          {footerLinks.map((item) => (
            <Link className="hover:text-graphite" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="hover:text-graphite" href={`mailto:${siteConfig.email}`}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
