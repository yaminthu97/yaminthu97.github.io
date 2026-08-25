import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import type { Content } from "../../i18n/types";

export function Experience({ t }: { t: Content }) {
  const { experience } = t;

  return (
    <Section
      id="experience"
      eyebrow={experience.eyebrow}
      title={experience.title}
      description={experience.description}
    >
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.jobs.map((job, i) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[calc(2.5rem+5px)]"
            />
            <Reveal delay={i * 80}>
              <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-semibold text-text">{job.company}</h3>
                    {job.formerName && (
                      <p className="mt-0.5 text-sm text-text-faint">{job.formerName}</p>
                    )}
                  </div>
                  <p className="font-mono text-sm text-text-muted">{job.period}</p>
                </div>
                <p className="mt-2 text-sm font-medium text-accent">{job.position}</p>

                <ul className="mt-5 space-y-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                      <span aria-hidden="true" className="mt-1 text-accent">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {job.contributions.length > 0 && (
                  <div className="mt-5 border-t border-border pt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-faint">
                      {experience.contributionsLabel}
                    </p>
                    <ul className="space-y-2">
                      {job.contributions.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border-strong px-3 py-1 text-xs text-text"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
