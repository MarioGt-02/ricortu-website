import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Faq } from "@/components/faq";
import { Link, locales, type Locale } from "@/i18n/routing";
import { createLocalizedMetadata, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });
  return createLocalizedMetadata({ locale, path: "support", title: t("metaTitle"), description: t("metaDescription") });
}
export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("support");
  const faq = await getTranslations("faq");
  const footer = await getTranslations("footer");
  return (
    <main>
      <section className="page-hero">
        <p className="museum-label">RICORTU</p>
        <h1 className="page-title">{t("title")}</h1>
        <p className="page-copy">{t("intro")}</p>
        <a className="button-primary mt-8" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </section>
      <section className="px-5 pb-16 sm:px-8" aria-labelledby="report-title">
        <div className="mx-auto max-w-4xl border-t border-graphite/15 pt-8">
          <h2 className="font-serif text-3xl" id="report-title">{t("reportTitle")}</h2>
          <p className="mt-4 leading-7 text-graphite/75">{t("reportText")}</p>
          <p className="mt-4 text-sm leading-6 text-graphite/70">{t("sensitive")}</p>
        </div>
      </section>
      <section className="px-5 pb-16 sm:px-8" aria-labelledby="faq-title">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-serif text-3xl" id="faq-title">{faq("title")}</h2>
          <Faq />
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8" aria-labelledby="rights-title">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl" id="rights-title">{t("rightsTitle")}</h2>
          <p className="mt-4 leading-7 text-graphite/75">{t("rightsText")}</p>
          <a className="mt-3 inline-block underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <div className="mt-6 flex flex-wrap gap-6 text-sm underline underline-offset-4">
            <Link href="/privacy">{footer("privacy")}</Link>
            <Link href="/delete-account">{footer("deleteAccount")}</Link>
            <Link href="/terms">{footer("terms")}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
