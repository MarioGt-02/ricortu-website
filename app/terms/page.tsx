import type { Metadata } from "next";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | RICORTU",
  description:
    "Read the RICORTU terms of use for the private travel memory app and personal atlas experience.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">Terms</p>
        <h1 className="page-title">Terms for a calm personal archive.</h1>
        <p className="page-copy">
          These terms describe the intended use of RICORTU as a private travel
          memory app for saved places, visited cities, and personal notes.
        </p>
      </section>
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {[
            ["Use of the service", "RICORTU is intended for personal travel memory keeping, private map building, and saved destination planning."],
            ["Your content", "You are responsible for the places, notes, and memories you add to your atlas."],
            ["No tracking promise", "RICORTU should not be used as a navigation system, safety tracker, or real-time location service."],
            ["Availability", "Early product concepts and waitlist features may change as the app develops."],
            ["Contact", "Questions about these terms can be sent to hello@ricortu.com."]
          ].map(([title, text]) => (
            <article className="border-t border-graphite/12 pt-6" key={title}>
              <h2 className="font-serif text-3xl">{title}</h2>
              <p className="mt-3 leading-7 text-graphite/68">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
