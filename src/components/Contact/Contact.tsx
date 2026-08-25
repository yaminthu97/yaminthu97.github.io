import { Mail, Phone } from "lucide-react";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import type { Content } from "../../i18n/types";
import { GithubIcon } from "../common/icons";

export function Contact({ t }: { t: Content }) {
  const { contact, profile } = t;

  const contactLinks = [
    {
      label: contact.emailLabel,
      value: profile.email,
      href: profile.email.startsWith("[") ? "#" : `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: contact.phoneLabel,
      value: profile.phone,
      href: profile.phone.startsWith("[") ? "#" : `tel:${profile.phone}`,
      icon: Phone,
    },
    {
      label: contact.githubLabel,
      value: profile.github.startsWith("[") ? "" : `@${profile.github.split("/").filter(Boolean).pop()}`,
      href: profile.github.startsWith("[") ? "#" : profile.github,
      icon: GithubIcon,
    },
  ];

  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title} description={contact.description}>
      <div className="grid gap-4 sm:grid-cols-3">
        {contactLinks.map((link, i) => (
          <Reveal key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="flex items-center gap-4 rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent"
            >
              <link.icon aria-hidden="true" size={22} className="shrink-0 text-accent" />
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-text">{link.label}</p>
                {link.value && <p className="truncate text-sm text-text-muted">{link.value}</p>}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
