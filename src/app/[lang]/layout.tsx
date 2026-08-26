import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/context/ThemeContext";
import { SITE_URL } from "@/lib/site";
import type { Lang } from "@/i18n";
import { toLang } from "@/i18n/toLang";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-jp",
  display: "swap",
});

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = toLang((await params).lang);
  return {
    metadataBase: new URL(`${SITE_URL}/`),
    icons: {
      icon: "favicon.svg",
    },
    alternates: {
      canonical: lang,
      languages: {
        en: "en",
        ja: "ja",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang: Lang = toLang((await params).lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansJP.variable}`}
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
