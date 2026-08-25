export type Lang = "en" | "ja";

export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  company: string;
  formerName?: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
}

export interface Project {
  name: string;
  period: string;
  teamSize: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ApproachStep {
  title: string;
  description: string;
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface Content {
  meta: {
    skipToContent: string;
    scrollToTop: string;
  };
  nav: {
    links: NavLink[];
    resume: string;
    openMenu: string;
    closeMenu: string;
  };
  profile: {
    name: string;
    initials: string;
    role: string;
    photoUrl: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    resumeUrl: string;
    education: { degree: string; school: string; years: string };
    languages: string[];
  };
  hero: {
    greeting: string;
    viewWork: string;
    downloadResume: string;
    contactMe: string;
    photoPlaceholder: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    paragraphs: string[];
    factLabels: { location: string; education: string; languages: string };
    valuesTitle: string;
    values: AboutValue[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    contributionsLabel: string;
    jobs: ExperienceEntry[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: Project[];
    problemLabel: string;
    contributionLabel: string;
    seeMore: string;
    seeLess: string;
    code: string;
    liveDemo: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    steps: ApproachStep[];
  };
  resume: {
    title: string;
    description: string;
    downloadResume: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
  };
  footer: {
    rights: string;
    githubProfile: string;
  };
}
