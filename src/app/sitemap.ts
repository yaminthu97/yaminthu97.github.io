import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          ja: `${SITE_URL}/ja`,
        },
      },
    },
    {
      url: `${SITE_URL}/ja`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          ja: `${SITE_URL}/ja`,
        },
      },
    },
  ];
}
