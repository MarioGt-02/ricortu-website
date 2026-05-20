import type { Metadata } from "next";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | RICORTU",
  description:
    "Read the RICORTU privacy policy for a private travel memory app designed around personal maps, saved places, and user control.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">Privacy</p>
        <h1 className="page-title">Privacy is part of the product.</h1>
        <p className="page-copy">
          RICORTU is designed as a private travel journal and personal travel
          map. This page outlines the privacy principles intended for the app.
        </p>
      </section>
      <PolicySections
        sections={[
          ["Personal information", "We collect only the information needed to provide the app experience, such as account details and saved places."],
          ["Travel memories", "Visited cities, countries, notes, wishlists, and archive entries are treated as private personal content."],
          ["Location", "RICORTU is not a GPS tracker. The product is designed around places you choose to save, not continuous location monitoring."],
          ["Sharing", "Share cards are optional. Your atlas is private unless you intentionally choose to export or share something."],
          ["Contact", "Questions about privacy can be sent to hello@ricortu.com."]
        ]}
      />
    </main>
  );
}

function PolicySections({ sections }: { sections: Array<[string, string]> }) {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {sections.map(([title, text]) => (
          <article className="border-t border-graphite/12 pt-6" key={title}>
            <h2 className="font-serif text-3xl">{title}</h2>
            <p className="mt-3 leading-7 text-graphite/68">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
