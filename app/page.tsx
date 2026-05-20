import type { Metadata } from "next";
import Link from "next/link";
import { AppPreview } from "@/components/app-preview";
import { WaitlistLink } from "@/components/waitlist-link";
import { WaitlistForm } from "@/components/waitlist-form";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "RICORTU | Turn Travels Into a Private Map of Your Life",
  description:
    "RICORTU is a private travel memory app for collecting visited cities, saved destinations, countries, and personal travel history in a calm atlas.",
  path: "/"
});

const values = [
  ["Collect visited cities", "Mark the places you have lived, loved, passed through, and remembered."],
  ["Build your personal atlas", "Watch countries and cities gather into a map that belongs only to you."],
  ["Keep memories attached to places", "Save quiet notes, dates, and fragments without turning them into a feed."],
  ["Save future destinations", "Keep the places you dream about close, without confusing them with where you have been."]
];

const useCases = [
  "Students abroad",
  "Frequent travelers",
  "Quiet memory keepers",
  "People who love maps and personal archives"
];

export default function Home() {
  return (
    <main>
      <section
        aria-labelledby="home-hero-title"
        className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24"
      >
        <div aria-hidden="true" className="absolute inset-0 map-grid opacity-70" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <p className="museum-label text-gold">A private atlas for your travels</p>
            <h1
              className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-graphite sm:text-6xl lg:text-7xl"
              id="home-hero-title"
            >
              Turn your travels into a private map of your life.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite/70">
              Collect the cities you’ve visited, save the places you dream
              about, and watch your world slowly light up.
            </p>
            <ul className="mt-7 grid max-w-2xl gap-3 text-sm text-graphite/65 sm:grid-cols-3">
              {["No GPS tracking", "No public feed", "Private by default"].map(
                (item) => (
                  <li className="border-t border-graphite/15 pt-3" key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WaitlistLink className="button-primary button-hero">
                Join the waitlist
              </WaitlistLink>
              <Link className="button-secondary" href="/app">
                Explore the concept
              </Link>
            </div>
          </div>
          <AppPreview />
        </div>
      </section>

      <section aria-labelledby="problem-title" className="section-band">
        <div className="content-grid">
          <p className="museum-label">The problem</p>
          <div>
            <h2 className="section-title" id="problem-title">
              Travel memories rarely stay in one place.
            </h2>
            <p className="section-copy mt-5">
              They scatter across photos, notes, map pins, receipts, messages,
              and forgotten apps. The shape of a life in motion becomes hard to
              see, even when the places still matter.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="value-title" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="museum-label">What RICORTU keeps</p>
            <h2 className="section-title mt-4" id="value-title">
              A private archive for visited cities, countries, and collected
              territories.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {values.map(([title, text]) => (
              <article className="quiet-card" key={title}>
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-graphite/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="difference-title" className="section-band">
        <div className="mx-auto max-w-7xl">
          <h2 className="sr-only" id="difference-title">
            What makes RICORTU different
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {["Not a navigation app.", "Not a travel guide.", "Not a social network."].map(
              (line) => (
                <p className="museum-label border-t border-graphite/15 pt-5" key={line}>
                  {line}
                </p>
              )
            )}
            <p className="text-xl leading-8 text-graphite">
              RICORTU is a private archive for the places that became part of
              you.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="use-cases-title" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="museum-label">For people who collect quietly</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl" id="use-cases-title">
            Made for travelers who want memory, not performance.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <article className="quiet-card min-h-44" key={item}>
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-gold" />
                <h3 className="mt-8 font-serif text-2xl">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="preview-title" className="section-band" id="preview">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="museum-label">App preview</p>
            <h2 className="section-title mt-4" id="preview-title">
              Map, city detail, wishlist, stats, and share cards in one calm
              system.
            </h2>
          </div>
          <AppPreview />
        </div>
      </section>

      <section aria-labelledby="seo-title" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="museum-label">Search intent</p>
          <h2 className="section-title mt-4" id="seo-title">
            A travel memory app for a quieter record.
          </h2>
          <p className="section-copy mt-6">
            RICORTU is designed for people looking for a personal travel map, a
            visited cities tracker, a travel archive app, a countries visited
            tracker, or a private travel journal app that keeps memory close
            without turning travel into performance.
          </p>
        </div>
      </section>

      <section aria-labelledby="waitlist-title" className="px-5 pb-24 sm:px-8" id="waitlist">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate px-6 py-14 text-ivory sm:px-10">
          <p className="museum-label text-gold">Early access</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl" id="waitlist-title">
            Start building the map of your life.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-ivory/72">
            Join the early access list for a private travel archive that is not
            a guide, a social feed, or a location tracker.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
