import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** Consistent section shell: eyebrow + heading + optional description + content. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              <p className="font-mono text-sm uppercase tracking-wide text-accent">{eyebrow}</p>
              <span aria-hidden="true" className="h-px w-16 bg-border-strong" />
            </div>
            <h2
              id={`${id}-heading`}
              className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
