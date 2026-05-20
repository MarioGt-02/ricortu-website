import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { createMetadata } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: `${post.title} | RICORTU Journal`,
    description: post.description,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        <header className="page-hero">
          <p className="museum-label text-gold">{post.eyebrow}</p>
          <h1 className="page-title">{post.title}</h1>
          <p className="page-copy">{post.intro}</p>
        </header>
        <section className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-3xl space-y-10">
            {post.sections.map((section) => (
              <section
                className="border-t border-graphite/12 pt-8"
                key={section.title}
              >
                <h2 className="font-serif text-3xl leading-tight text-graphite">
                  {section.title}
                </h2>
                <p className="mt-4 leading-8 text-graphite/68">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
