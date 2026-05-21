import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { createLocalizedMetadata } from "@/lib/site";

type TermsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return createLocalizedMetadata({
    description: t("termsDescription"),
    locale,
    path: "terms",
    title: t("termsTitle")
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");
  const sections = [
    ["s1Title", "s1Text"],
    ["s2Title", "s2Text"],
    ["s3Title", "s3Text"],
    ["s4Title", "s4Text"],
    ["s5Title", "s5Text"]
  ] as const;

  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">{t("label")}</p>
        <h1 className="page-title">{t("title")}</h1>
        <p className="page-copy">{t("intro")}</p>
      </section>
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {sections.map(([title, text]) => (
            <article className="border-t border-graphite/12 pt-6" key={title}>
              <h2 className="font-serif text-3xl">{t(title)}</h2>
              <p className="mt-3 leading-7 text-graphite/68">{t(text)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
