const cityDots = [
  "left-[18%] top-[32%]",
  "left-[34%] top-[52%]",
  "left-[58%] top-[28%]",
  "left-[72%] top-[58%]",
  "left-[46%] top-[70%]"
];

export function AppPreview() {
  return (
    <figure
      aria-label="RICORTU app preview with map, city detail, wishlist, stats, and share card mockups"
      className="relative overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-paper p-4 shadow-[0_24px_80px_rgba(28,37,45,0.11)] sm:p-6"
    >
      <div aria-hidden="true" className="absolute inset-0 map-grid opacity-70" />
      <div className="relative grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="min-h-[420px] rounded-[1.25rem] border border-graphite/10 bg-ivory/80 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="museum-label">RICORTU</p>
              <p className="mt-1 text-xs text-graphite/50">Private atlas</p>
            </div>
            <p className="rounded-full border border-graphite/10 bg-paper px-3 py-1 text-xs text-graphite/62">
              2026
            </p>
          </div>
          <div className="relative mt-8 h-72 rounded-2xl border border-slate/15 bg-bluegrey/20">
            <div aria-hidden="true" className="absolute inset-0 map-grid opacity-80" />
            <div className="absolute left-4 top-4 rounded-full border border-graphite/10 bg-paper/80 px-3 py-1 text-xs text-graphite/62">
              28 collected cities
            </div>
            {cityDots.map((position) => (
              <span
                aria-hidden="true"
                className={`absolute h-3 w-3 rounded-full bg-slate shadow-[0_0_0_7px_rgba(114,137,154,0.14)] ${position}`}
                key={position}
              />
            ))}
            <div className="absolute bottom-4 right-4 rounded-xl border border-graphite/10 bg-paper/85 px-3 py-2 text-right text-xs text-graphite/62">
              <p className="font-medium text-graphite">Lisbon, Portugal</p>
              <p>Visited May 2024</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["28 cities", "11 countries", "4 saved"].map((item) => (
              <div
                className="rounded-xl border border-graphite/10 bg-white/55 px-3 py-4 text-center text-sm text-graphite/70"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <PreviewCard label="City detail" title="Lisbon" text="Portugal · May 2024 · First evening by the river." />
          <PreviewCard label="Wishlist" title="Kyoto" text="Japan · Saved for spring light." />
          <PreviewCard label="Stats" title="47%" text="Europe slowly lit · 11 countries collected." />
          <PreviewCard label="Share card" title="My atlas" text="A quiet export, only when you choose." />
        </div>
      </div>
    </figure>
  );
}

function PreviewCard({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-graphite/10 bg-ivory/85 p-5">
      <p className="museum-label">{label}</p>
      <p className="mt-5 font-serif text-3xl text-graphite">{title}</p>
      <p className="mt-2 text-sm leading-6 text-graphite/65">{text}</p>
    </div>
  );
}
