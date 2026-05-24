import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const routes = ["", "privacy", "terms", "delete-account"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      const languages = Object.fromEntries(
        locales.map((item) => [
          item,
          new URL(route ? `/${item}/${route}` : `/${item}`, siteConfig.url).toString()
        ])
      );

      return {
        url: new URL(path, siteConfig.url).toString(),
        lastModified: new Date(),
        changeFrequency: route ? "monthly" : "weekly",
        priority: route ? 0.7 : 1,
        alternates: {
          languages: {
            ...languages,
            "x-default": new URL(
              route ? `/en/${route}` : "/en",
              siteConfig.url
            ).toString()
          }
        }
      };
    })
  );
}
