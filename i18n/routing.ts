import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "it", "fr", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "always",
  locales
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
