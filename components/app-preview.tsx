import Image from "next/image";
import { getTranslations } from "next-intl/server";
import countryMap from "@/resource/countyMap.jpg";
import pointMap from "@/resource/pointMap.jpg";
import memories from "@/resource/ricordiPage.jpg";
import settings from "@/resource/settingPage.jpg";
import stats from "@/resource/statusPage.jpg";
import wishlist from "@/resource/wishListPage.jpg";

const screens = [
  { image: countryMap, key: "countries" },
  { image: pointMap, key: "places" },
  { image: memories, key: "memories" },
  { image: wishlist, key: "wishlist" },
  { image: stats, key: "stats" },
  { image: settings, key: "settings" }
] as const;

export async function AppPreview({ hero = false }: { hero?: boolean }) {
  const t = await getTranslations("screenshots");
  if (hero) {
    return (
      <figure className="relative mx-auto w-full max-w-[260px] lg:max-w-[280px]">
        <Image src={pointMap} alt={t("placesAlt")} sizes="(min-width: 1024px) 280px, 260px" priority
          className="h-auto w-full rounded-lg border border-graphite/15 shadow-[0_20px_50px_rgba(28,37,45,0.12)]" />
        <figcaption className="mt-4 text-center text-xs leading-5 text-graphite/70">{t("note")}</figcaption>
      </figure>
    );
  }
  return (
    <div>
      <p className="mb-8 max-w-2xl text-sm leading-6 text-graphite/70">{t("note")}</p>
      <div
        aria-labelledby="preview-title"
        className="grid auto-cols-[min(78vw,300px)] grid-flow-col gap-x-6 gap-y-14 overflow-x-auto pb-5 snap-x snap-mandatory sm:grid-flow-row sm:grid-cols-2 sm:auto-cols-auto sm:gap-x-10 sm:overflow-visible lg:grid-cols-3"
        role="region"
        tabIndex={0}
      >
        {screens.map(({ image, key }, index) => (
          <figure className="mx-auto w-full max-w-[300px] snap-start" key={key}>
            <Image src={image} alt={t(`${key}Alt`)} sizes="(min-width: 640px) 300px, 280px"
              className="h-auto w-full rounded-lg border border-graphite/15" />
            <figcaption className="mt-5 border-t border-graphite/15 pt-4">
              <p className="text-xs text-graphite/60">0{index + 1}</p>
              <h3 className="mt-2 font-serif text-2xl">{t(key)}</h3>
              <p className="mt-2 text-sm leading-6 text-graphite/75">{t(`${key}Text`)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
