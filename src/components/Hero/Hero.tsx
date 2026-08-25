import { ArrowRight, Download, Mail } from "lucide-react";
import type { Content } from "../../i18n/types";
import { Button } from "../common/Button";
import { Reveal } from "../common/Reveal";

export function Hero({ t }: { t: Content }) {
  const { profile, hero } = t;

  return (
    <section
      id="home"
      className="flex min-h-screen items-center pt-24"
      aria-label="Introduction"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="mb-5 font-mono text-sm text-accent">{hero.greeting}</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-text sm:text-6xl">
            {profile.name}.
          </h1>
          <p className="mt-2 text-balance text-3xl font-bold tracking-tight text-text-muted sm:text-5xl">
            {profile.role}.
          </p>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              {hero.viewWork}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="#resume" variant="secondary">
              {hero.downloadResume}
              <Download size={16} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost">
              {hero.contactMe}
              <Mail size={16} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-first lg:order-last">
          <div className="relative mx-auto aspect-square w-full max-w-48 sm:max-w-64">
            <div
              aria-hidden="true"
              className="hidden rounded-full border border-border-strong/60 sm:block sm:absolute sm:-left-12 sm:-top-12 sm:h-40 sm:w-40"
            />
            <div
              aria-hidden="true"
              className="hidden grid-cols-4 gap-1.5 sm:absolute sm:-right-6 sm:-top-6 sm:grid"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-accent/40" />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="hidden grid-cols-4 gap-1.5 sm:absolute sm:-bottom-6 sm:-right-6 sm:grid"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-accent/40" />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-accent/20 blur-3xl"
            />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-accent/70 bg-surface/60 shadow-[0_0_30px_-5px_rgba(79,209,197,0.5)] backdrop-blur-xl">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute -inset-6 bg-linear-to-br from-accent/50 via-accent/10 to-transparent blur-2xl"
                  />
                  <div className="relative flex flex-col items-center gap-3">
                    <span className="font-mono text-4xl font-bold text-accent/80 drop-shadow-[0_0_24px_rgba(79,209,197,0.45)] sm:text-5xl">
                      {profile.initials}
                    </span>
                    <span className="font-mono text-xs text-text-faint">
                      {hero.photoPlaceholder}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
