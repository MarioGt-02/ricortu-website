import { getTranslations } from "next-intl/server";

export async function Faq({ compact = false }: { compact?: boolean }) {
  const t = await getTranslations("faq");
  const questions = compact ? ["account", "photos", "backup", "release", "price"]
    : ["account", "location", "photos", "offline", "backup", "feedback", "deletion", "release", "price"];
  return (
    <div className="divide-y divide-graphite/15 border-y border-graphite/15">
      {questions.map((key) => (
        <details className="py-5" key={key}>
          <summary className="cursor-pointer text-base font-medium leading-7 marker:text-slate">{t(`${key}Q`)}</summary>
          <p className="mt-4 max-w-3xl leading-7 text-graphite/75">{t(`${key}A`)}</p>
        </details>
      ))}
    </div>
  );
}
