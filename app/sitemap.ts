import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/tjenester",
    ...SERVICES.map((s) => `/tjenester/${s.slug}`),
    "/tripletex",
    "/om-oss",
    "/kontakt",
    "/personvern",
  ].map(
    (p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }),
  );
}
