import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AppPreview } from "@/components/app-preview";
import { WaitlistForm } from "@/components/waitlist-form";
import { WaitlistLink } from "@/components/waitlist-link";
import { Link, locales, type Locale } from "@/i18n/routing";
import { createLocalizedMetadata } from "@/lib/site";

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return createLocalizedMetadata({
    description: t("homeDescription"),
    locale,
    title: t("homeTitle")
  });
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const waitlist = await getTranslations("waitlist");
  const values = [
    ["value1Title", "value1Text"],
    ["value2Title", "value2Text"],
    ["value3Title", "value3Text"],
    ["value4Title", "value4Text"]
  ] as const;
  const useCases = ["use1", "use2", "use3", "use4"] as const;

  return (
    <main>
      <section
        aria-labelledby="home-hero-title"
        className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24"
      >
        <div aria-hidden="true" className="absolute inset-0 map-grid opacity-70" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <p className="museum-label text-gold">{t("eyebrow")}</p>
            <h1
              className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-graphite sm:text-6xl lg:text-7xl"
              id="home-hero-title"
            >
              {t("title")}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite/70">
              {t("subtitle")}
            </p>
            <ul className="mt-7 grid max-w-2xl gap-3 text-sm text-graphite/65 sm:grid-cols-3">
              {[t("trust1"), t("trust2"), t("trust3")].map((item) => (
                <li className="border-t border-graphite/15 pt-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WaitlistLink className="button-primary button-hero" href={`/${locale}#waitlist`}>
                {t("cta")}
              </WaitlistLink>
              <Link className="button-secondary" href="/">
                {t("secondaryCta")}
              </Link>
            </div>
          </div>
          <AppPreview />
        </div>
      </section>

      <section aria-labelledby="problem-title" className="section-band">
        <div className="content-grid">
          <p className="museum-label">{t("problemLabel")}</p>
          <div>
            <h2 className="section-title" id="problem-title">
              {t("problemTitle")}
            </h2>
            <p className="section-copy mt-5">{t("problemText")}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="value-title" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="museum-label">{t("valueLabel")}</p>
            <h2 className="section-title mt-4" id="value-title">
              {t("valueTitle")}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {values.map(([title, text]) => (
              <article className="quiet-card" key={title}>
                <h3 className="font-serif text-3xl">{t(title)}</h3>
                <p className="mt-4 leading-7 text-graphite/68">{t(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="difference-title" className="section-band">
        <div className="mx-auto max-w-7xl">
          <h2 className="sr-only" id="difference-title">
            {t("difference")}
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[t("not1"), t("not2"), t("not3")].map((line) => (
              <p className="museum-label border-t border-graphite/15 pt-5" key={line}>
                {line}
              </p>
            ))}
            <p className="text-xl leading-8 text-graphite">{t("difference")}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="use-cases-title" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="museum-label">{t("useLabel")}</p>
          <h2
            className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl"
            id="use-cases-title"
          >
            {t("useTitle")}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <article className="quiet-card min-h-44" key={item}>
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-gold" />
                <h3 className="mt-8 font-serif text-2xl">{t(item)}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="preview-title" className="section-band" id="preview">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="museum-label">{t("previewLabel")}</p>
            <h2 className="section-title mt-4" id="preview-title">
              {t("previewTitle")}
            </h2>
          </div>
          <AppPreview />
        </div>
      </section>

      <section aria-labelledby="seo-title" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="museum-label">{t("seoLabel")}</p>
          <h2 className="section-title mt-4" id="seo-title">
            {t("seoTitle")}
          </h2>
          <p className="section-copy mt-6">{t("seoText")}</p>
        </div>
      </section>

      <section aria-labelledby="waitlist-title" className="px-5 pb-24 sm:px-8" id="waitlist">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate px-6 py-14 text-ivory sm:px-10">
          <p className="museum-label text-gold">{t("waitlistLabel")}</p>
          <h2
            className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl"
            id="waitlist-title"
          >
            {t("waitlistTitle")}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-ivory/72">
            {t("waitlistText")}
          </p>
          <WaitlistForm
            labels={{
              email: waitlist("email"),
              error: waitlist("error"),
              placeholder: waitlist("placeholder"),
              privacy: waitlist("privacy"),
              submit: waitlist("submit"),
              submitting: waitlist("submitting"),
              success: waitlist("success")
            }}
          />
        </div>
      </section>
    </main>
  );
}
