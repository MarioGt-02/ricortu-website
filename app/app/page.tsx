import type { Metadata } from "next";
import { AppPreview } from "@/components/app-preview";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "RICORTU App | Personal Travel Map and Memory Archive",
  description:
    "Explore the RICORTU app concept: collect visited cities, countries, notes, future destinations, and private travel memories in a personal atlas.",
  path: "/app"
});

const features = [
  ["Visited places", "Collect cities and countries without GPS tracking."],
  ["Memory layers", "Attach dates, notes, and private reflections to places."],
  ["Wishlist", "Separate the places you dream about from the places you know."],
  ["Stats", "See your atlas grow through calm, simple travel patterns."]
];

export default function ProductPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">Product</p>
        <h1 className="page-title">A personal travel map, made for memory.</h1>
        <p className="page-copy">
          RICORTU helps you collect the territories of your life without public
          feeds, route tracking, or travel guide noise.
        </p>
      </section>
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <AppPreview />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {features.map(([title, text]) => (
              <article className="quiet-card" key={title}>
                <h2 className="font-serif text-2xl">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-graphite/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
