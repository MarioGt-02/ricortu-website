import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "RICORTU Journal | Travel Memory, Maps, and Private Archives",
  description:
    "Read calm notes from RICORTU about travel memory, personal maps, visited cities, private journals, and building a meaningful travel archive.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="museum-label text-gold">Journal</p>
        <h1 className="page-title">Notes on memory, maps, and places kept.</h1>
        <p className="page-copy">
          Essays and product notes for people building a private travel archive
          rather than another public travel profile.
        </p>
      </section>
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article className="quiet-card" key={post.slug}>
              <p className="museum-label">{post.eyebrow}</p>
              <h2 className="mt-8 font-serif text-3xl leading-tight">
                <Link className="hover:text-slate" href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="mt-5 leading-7 text-graphite/68">
                {post.description}
              </p>
              <Link
                className="mt-8 inline-flex text-sm font-semibold text-slate hover:text-graphite"
                href={`/blog/${post.slug}`}
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
