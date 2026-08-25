"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Content, Lang } from "../../i18n/types";
import { Logo } from "../common/Logo";
import { ToggleControls } from "./ToggleControls";

export function Navbar({ lang, t }: { lang: Lang; t: Content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const isElevated = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        isElevated
          ? "border-b border-border bg-bg/80 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent shadow-none"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a href="#home" aria-label="Home" className="transition-opacity hover:opacity-80">
          <Logo size={38} />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative inline-block py-1 text-sm text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#resume"
              className="rounded-md border border-border-strong px-4 py-2 text-sm font-medium text-text transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t.nav.resume}
            </a>
          </li>
          <li className="border-l border-border pl-4">
            <ToggleControls lang={lang} />
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ToggleControls lang={lang} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-text"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-border bg-bg`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-2 py-3 text-base text-text transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="block rounded-md border border-border-strong px-4 py-3 text-center text-base font-medium text-text"
            >
              {t.nav.resume}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
