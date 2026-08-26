// BASE_PATH mirrors next.config.ts's basePath so runtime links (plain <a> tags,
// which Next doesn't auto-prefix the way it does Link/Image) resolve correctly
// when the site is served from a GitHub Pages project subpath.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Used for canonical URLs, hreflang alternates, sitemap.xml, and robots.txt.
export const SITE_URL = `https://yaminthu97.github.io${BASE_PATH}`;
