import type { Metadata } from "next";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About RICORTU | A Private Atlas for Travel Memories",
  description:
    "Learn why RICORTU is being created as a calm, private travel memory app for people who see places as part of their personal history.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">About</p>
        <h1 className="page-title">Some places become part of you.</h1>
        <p className="page-copy">
          RICORTU is built around a simple feeling: my world is slowly lighting
          up. Every city visited, every country remembered, and every future
          place saved becomes part of a personal atlas.
        </p>
      </section>
      <section className="section-band">
        <div className="content-grid">
          <p className="museum-label">Principles</p>
          <div className="grid gap-6">
            {[
              ["Private by default", "Your map should feel like a journal, not a broadcast."],
              ["Memory over motion", "RICORTU is interested in what places meant, not where you are right now."],
              ["Quiet permanence", "The interface should feel collected, treasured, and easy to return to."]
            ].map(([title, text]) => (
              <article className="border-t border-graphite/12 pt-6" key={title}>
                <h2 className="font-serif text-3xl">{title}</h2>
                <p className="mt-3 leading-7 text-graphite/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
