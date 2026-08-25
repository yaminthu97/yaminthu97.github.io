import type { Metadata } from "next";
import { content } from "@/i18n";
import type { Lang } from "@/i18n";
import { toLang } from "@/i18n/toLang";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { Approach } from "@/components/Approach/Approach";
import { Resume } from "@/components/Resume/Resume";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const t = content[lang];
  const title = `${t.profile.name} | ${t.profile.role}`;
  const description = t.profile.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: lang === "ja" ? "ja_JP" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang: Lang = toLang((await params).lang);
  const t = content[lang];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#04120f]"
      >
        {t.meta.skipToContent}
      </a>
      <Navbar lang={lang} t={t} />
      <main id="main-content">
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Approach t={t} />
        <Resume t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <ScrollToTop label={t.meta.scrollToTop} />
    </>
  );
}
