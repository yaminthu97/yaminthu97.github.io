import { Search, PenTool, Code2, TestTube, RefreshCw } from "lucide-react";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import type { Content } from "../../i18n/types";

const stepIcons = [Search, PenTool, Code2, TestTube, RefreshCw];

export function Approach({ t }: { t: Content }) {
  const { approach } = t;

  return (
    <Section
      id="approach"
      eyebrow={approach.eyebrow}
      title={approach.title}
      className="pb-16 sm:pb-20"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {approach.steps.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <Reveal key={step.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-surface p-6">
                <Icon aria-hidden="true" size={22} className="text-accent" />
                <h3 className="mt-4 font-semibold text-text">
                  <span className="mr-1 font-mono text-xs text-text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
