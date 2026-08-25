import {
  BookOpen,
  Code2,
  GraduationCap,
  Languages as LanguagesIcon,
  Laptop,
  MapPin,
  Puzzle,
  Users,
} from "lucide-react";
import { Reveal } from "../common/Reveal";
import type { Content } from "../../i18n/types";

const valueIcons = [Code2, Puzzle, Laptop, Users, BookOpen];

export function About({ t }: { t: Content }) {
  const { profile, about } = t;

  const quickFacts = [
    { label: about.factLabels.location, value: profile.location, icon: MapPin },
    {
      label: about.factLabels.education,
      value: `${profile.education.degree} — ${profile.education.school}, ${profile.education.years}`,
      icon: GraduationCap,
    },
    { label: about.factLabels.languages, value: profile.languages.join(" · "), icon: LanguagesIcon },
  ];

  return (
    <section
      id="about"
      className="border-y border-border bg-surface/40 py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            <p className="font-mono text-sm uppercase tracking-wide text-accent">{about.eyebrow}</p>
            <span aria-hidden="true" className="h-px w-16 bg-border-strong" />
          </div>
          <h2
            id="about-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl"
          >
            {about.headline} <span className="text-accent">{about.headlineAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <p className="max-w-2xl leading-relaxed text-text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              {quickFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex items-start gap-4 p-5 ${i !== 0 ? "border-t border-border" : ""}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <fact.icon aria-hidden="true" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{fact.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-16">
          <h3 className="mb-8 text-lg font-semibold text-text">{about.valuesTitle}</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {about.values.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={item.title}>
                  <Icon aria-hidden="true" size={22} className="mb-3 text-accent" />
                  <p className="text-sm font-semibold text-text">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
