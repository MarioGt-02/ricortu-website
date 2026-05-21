import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { locales, routing, type Locale } from "@/i18n/routing";
import {
  createLocalizedMetadata,
  organizationJsonLd,
  siteConfig,
  softwareJsonLd,
  websiteJsonLd
} from "@/lib/site";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = hasLocale(routing.locales, locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const t = await getTranslations({ locale: safeLocale, namespace: "meta" });

  return {
    metadataBase: new URL(siteConfig.url),
    ...createLocalizedMetadata({
      description: t("homeDescription"),
      locale: safeLocale,
      title: t("homeTitle")
    })
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;
  setRequestLocale(safeLocale);

  const messages = await getMessages();
  const nav = await getTranslations({ locale: safeLocale, namespace: "nav" });
  const footer = await getTranslations({
    locale: safeLocale,
    namespace: "footer"
  });

  return (
    <html lang={safeLocale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={[organizationJsonLd, websiteJsonLd, softwareJsonLd]} />
          <Header
            labels={{
              join: nav("join"),
              language: nav("language"),
              privacy: nav("privacy"),
              product: nav("product"),
              skip: nav("skip"),
              terms: nav("terms")
            }}
            locale={safeLocale}
          />
          <div id="main-content">{children}</div>
          <Footer
            labels={{
              contact: footer("contact"),
              privacy: footer("privacy"),
              terms: footer("terms"),
              text: footer("text")
            }}
            locale={safeLocale}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
