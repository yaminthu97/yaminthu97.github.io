import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import type { Content } from "../../i18n/types";

export function Skills({ t }: { t: Content }) {
  const { skills } = t;

  return (
    <Section id="skills" eyebrow={skills.eyebrow} title={skills.title} description={skills.description}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.categories.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="h-full rounded-lg border border-border bg-surface p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border-strong px-3 py-1 text-sm text-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
