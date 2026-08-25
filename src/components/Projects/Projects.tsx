import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import type { Content } from "../../i18n/types";
import { ProjectCard } from "./ProjectCard";

export function Projects({ t }: { t: Content }) {
  const { projects } = t;

  return (
    <Section
      id="projects"
      eyebrow={projects.eyebrow}
      title={projects.title}
      description={projects.description}
    >
      <div className="flex flex-col gap-6">
        {projects.items.map((project, i) => (
          <Reveal key={project.name + i} delay={Math.min(i * 60, 240)}>
            <ProjectCard project={project} index={i} labels={projects} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
