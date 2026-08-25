import type { Content } from "../../i18n/types";
import { GithubIcon } from "../common/icons";
import { CurrentYear } from "./CurrentYear";

export function Footer({ t }: { t: Content }) {
  const buildYear = new Date().getFullYear();
  const { profile, footer } = t;

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <p className="text-sm text-text-faint">
          © <CurrentYear fallback={buildYear} /> {profile.name}. {footer.rights}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github.startsWith("[") ? "#" : profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={footer.githubProfile}
            className="text-text-faint transition-colors hover:text-accent"
          >
            <GithubIcon size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
