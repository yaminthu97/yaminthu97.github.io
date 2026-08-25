"use client";

import { Sun, Moon } from "lucide-react";
import type { Lang } from "../../i18n/types";
import { useTheme } from "../../context/ThemeContext";

export function ToggleControls({ lang }: { lang: Lang }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 rounded-full border border-border-strong bg-surface p-1">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-text-muted transition-colors hover:text-accent"
      >
        {theme === "dark" ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
      </button>

      <span aria-hidden="true" className="h-4 w-px bg-border-strong" />

      <div className="relative flex items-center rounded-full bg-bg/60 p-0.5 font-mono text-[11px] font-semibold">
        <span
          aria-hidden="true"
          className={`absolute inset-y-0.5 left-0.5 w-7 rounded-full bg-accent transition-transform duration-200 ease-out ${
            lang === "ja" ? "translate-x-7" : "translate-x-0"
          }`}
        />
        <a
          href="/en"
          hrefLang="en"
          aria-current={lang === "en" ? "page" : undefined}
          className={`relative z-10 w-7 rounded-full py-1.5 text-center transition-colors ${
            lang === "en" ? "text-[#04120f]" : "text-text-muted hover:text-accent"
          }`}
        >
          EN
        </a>
        <a
          href="/ja"
          hrefLang="ja"
          aria-current={lang === "ja" ? "page" : undefined}
          className={`relative z-10 w-7 rounded-full py-1.5 text-center transition-colors ${
            lang === "ja" ? "text-[#04120f]" : "text-text-muted hover:text-accent"
          }`}
        >
          JA
        </a>
      </div>
    </div>
  );
}
