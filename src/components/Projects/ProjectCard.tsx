"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { Content, Project } from "../../i18n/types";
import { GithubIcon } from "../common/icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  labels: Content["projects"];
}

export function ProjectCard({ project, index, labels: projects }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${index}`;

  return (
    <article className="rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-strong sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-strong bg-black/20 font-mono text-sm font-bold text-accent"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-text">{project.name}</h3>
            <p className="mt-0.5 text-xs text-text-faint">{project.teamSize}</p>
          </div>
        </div>
        <p className="font-mono text-sm text-text-muted">{project.period}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <li key={i} className="rounded-full border border-border-strong px-3 py-1 text-xs text-text">
            {tech}
          </li>
        ))}
      </ul>

      {expanded && (
        <div id={detailsId} className="mt-5 space-y-4">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-accent/40 pl-3 text-sm">
              <dt className="text-xs font-semibold uppercase tracking-wide text-text-faint">
                {projects.problemLabel}
              </dt>
              <dd className="mt-1 text-text-muted">{project.problem}</dd>
            </div>
            <div className="border-l-2 border-accent/40 pl-3 text-sm">
              <dt className="text-xs font-semibold uppercase tracking-wide text-text-faint">
                {projects.contributionLabel}
              </dt>
              <dd className="mt-1 text-text-muted">{project.contribution}</dd>
            </div>
          </dl>

          {project.features.length > 0 && (
            <ul className="space-y-1.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-2 text-sm text-text-muted">
                  <span aria-hidden="true" className="text-accent">
                    ▸
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex items-center gap-5 pt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                >
                  <GithubIcon size={16} aria-hidden="true" />
                  {projects.code}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  {projects.liveDemo}
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={detailsId}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
      >
        {expanded ? projects.seeLess : projects.seeMore}
        <ChevronDown
          aria-hidden="true"
          size={16}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </article>
  );
}
