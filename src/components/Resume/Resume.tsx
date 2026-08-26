import { Download } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";
import type { Content } from "../../i18n/types";
import { BASE_PATH } from "../../lib/site";

export function Resume({ t }: { t: Content }) {
  const { resume, profile } = t;

  return (
    <section id="resume" className="border-t border-border py-20 sm:py-24" aria-labelledby="resume-heading">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 id="resume-heading" className="text-balance text-2xl font-semibold text-text sm:text-3xl">
            {resume.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">{resume.description}</p>
          <div className="mt-8">
            <Button href={`${BASE_PATH}${profile.resumeUrl}`} variant="primary" target="_blank" rel="noopener noreferrer">
              {resume.downloadResume}
              <Download size={16} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
