import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { createLocalizedMetadata, siteConfig } from "@/lib/site";

type DeleteAccountPageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: DeleteAccountPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return createLocalizedMetadata({
    description: t("deleteDescription"),
    locale,
    path: "delete-account",
    title: t("deleteTitle")
  });
}

export default async function DeleteAccountPage({
  params
}: DeleteAccountPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("deleteAccount");
  const mailto = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(
    "Delete my RICORTU account"
  )}`;

  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">{t("label")}</p>
        <h1 className="page-title">{t("title")}</h1>
        <p className="page-copy">{t("intro")}</p>
        <a className="button-primary button-hero mt-8" href={mailto}>
          {t("cta")}
        </a>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_0.58fr]">
          <div className="quiet-card">
            <h2 className="font-serif text-3xl">{t("includedTitle")}</h2>
            <ul className="mt-6 space-y-4 leading-7 text-graphite/68">
              {["included1", "included2", "included3", "included4"].map(
                (item) => (
                  <li className="border-t border-graphite/10 pt-4" key={item}>
                    {t(item)}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="quiet-card">
            <h2 className="font-serif text-3xl">{t("notIncludedTitle")}</h2>
            <ul className="mt-6 space-y-4 leading-7 text-graphite/68">
              {["notIncluded1", "notIncluded2"].map((item) => (
                <li className="border-t border-graphite/10 pt-4" key={item}>
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-[1.5rem] border border-graphite/10 bg-paper/78 p-6 sm:p-8">
          <p className="museum-label text-slate">{t("requestTitle")}</p>
          <p className="mt-5 max-w-4xl leading-8 text-graphite/70">
            {t("requestText")}
          </p>
          <p className="mt-5 font-medium text-graphite">{t("timeline")}</p>
          <a className="button-secondary mt-8" href={mailto}>
            {siteConfig.supportEmail}
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-7xl">
          <p className="museum-label text-slate">{t("faqTitle")}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="quiet-card">
              <h2 className="font-serif text-2xl">{t("faqLocalQ")}</h2>
              <p className="mt-4 leading-7 text-graphite/68">
                {t("faqLocalA")}
              </p>
            </article>
            <article className="quiet-card">
              <h2 className="font-serif text-2xl">{t("faqSyncedQ")}</h2>
              <p className="mt-4 leading-7 text-graphite/68">
                {t("faqSyncedA")}
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
