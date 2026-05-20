const highlights = [
  "Digital strategy",
  "Brand systems",
  "Product experiences"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a className="text-xl font-semibold tracking-wide" href="/">
          RICORTU
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 sm:flex">
          <a className="transition hover:text-ink" href="#work">
            Work
          </a>
          <a className="transition hover:text-ink" href="#studio">
            Studio
          </a>
          <a className="transition hover:text-ink" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-28">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-signal">
            Official Website
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-ink sm:text-6xl md:text-7xl">
            RICORTU builds sharp digital identities for ambitious brands.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">
            We shape websites, brand systems, and product experiences that feel
            clear, confident, and ready for growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
              href="#contact"
            >
              Start a Project
            </a>
            <a
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
              href="#work"
            >
              View Focus
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-ink/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">
            Focus
          </p>
          <div className="mt-8 space-y-5">
            {highlights.map((item) => (
              <div
                className="border-b border-ink/10 pb-5 text-2xl font-semibold last:border-0 last:pb-0"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-ink/10 bg-white px-6 py-16"
        id="work"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            ["01", "Strategy", "Positioning, messaging, and launch planning."],
            ["02", "Design", "Visual systems for websites and campaigns."],
            ["03", "Build", "Fast, maintainable websites with modern tooling."]
          ].map(([number, title, description]) => (
            <article key={number}>
              <p className="text-sm font-bold text-signal">{number}</p>
              <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-ink/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="studio">
        <h2 className="text-3xl font-semibold">Built with intent.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-ink/70">
          This starter site uses Next.js, TypeScript, and Tailwind CSS, giving
          RICORTU a clean base for future content, case studies, and contact
          workflows.
        </p>
      </section>

      <footer className="bg-ink px-6 py-10 text-white" id="contact">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-semibold">RICORTU</p>
          <a className="text-sm font-semibold text-white/80" href="mailto:hello@ricortu.com">
            hello@ricortu.com
          </a>
        </div>
      </footer>
    </main>
  );
}
