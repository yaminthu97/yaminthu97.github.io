import type { Content } from "./types";

export const en: Content = {
  meta: {
    skipToContent: "Skip to main content",
    scrollToTop: "Scroll to top",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Approach", href: "#approach" },
      { label: "Contact", href: "#contact" },
    ],
    resume: "Resume",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  profile: {
    name: "Yamin Thu",
    initials: "YT",
    role: "Full Stack Developer",
    photoUrl: "",
    tagline:
      "I build modern, reliable, and user-focused web applications across the full stack — from frontend interfaces to backend systems and databases.",
    location: "Yangon, Myanmar",
    email: "yaminthu.at@gmail.com",
    phone: "09977803561",
    github: "https://github.com/yaminthu97",
    resumeUrl: "/resume-en.pdf",
    education: {
      degree: "Bachelor of Computer Science (B.C.Sc.)",
      school: "University of Computer Studies, Meiktila",
      years: "2013–2018",
    },
    languages: ["Japanese", "English", "Myanmar"],
  },
  hero: {
    greeting: "Hi, my name is",
    viewWork: "View My Work",
    downloadResume: "Download Resume",
    contactMe: "Contact Me",
    photoPlaceholder: "photo placeholder",
  },
  about: {
    eyebrow: "About Me",
    headline: "Building solutions that make an",
    headlineAccent: "impact.",
    paragraphs: [
      "I'm a Full Stack Developer with a Bachelor's degree in Computer Science and about six years of experience building production web applications — from WordPress and Shopify sites to PHP/Laravel business systems. I move comfortably across the stack, from React and JavaScript on the frontend to Laravel/PHP and MySQL on the backend, picking up new frameworks quickly when a project calls for it.",
      "I've built a strong habit of thorough testing and work well in ambiguous situations, asking the right questions early rather than guessing. Most of my project work has been on Japan-facing teams as part of a Myanmar-based offshore group — I hold JLPT N3 and I'm looking for a full-stack role, ideally at a Japanese company, where I can keep building on that cross-team collaboration experience.",
    ],
    factLabels: {
      location: "Location",
      education: "Education",
      languages: "Languages",
    },
    valuesTitle: "What I Value",
    values: [
      { title: "Clean Code", description: "Writing simple, readable, and maintainable code." },
      { title: "Problem Solving", description: "Analyzing problems and building practical solutions." },
      { title: "User Focus", description: "Building products that are useful and easy to use." },
      { title: "Team Collaboration", description: "Working well with others to achieve shared goals." },
      { title: "Continuous Learning", description: "Always learning and adapting to new technologies." },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Technical Skills",
    description: "Technologies I use regularly to build and maintain full-stack web applications.",
    categories: [
      {
        category: "Frontend",
        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3 / SCSS",
          "jQuery",
          "AJAX",
          "Bootstrap",
          "Tailwind CSS",
          "Vue.js",
          "Next.js",
          "Responsive Design",
        ],
      },
      {
        category: "Backend",
        skills: [
          "PHP",
          "Laravel",
          "WordPress",
          "Shopify / Liquid",
          "Ruby",
          "Java / Spring Boot",
          "REST API Development",
        ],
      },
      {
        category: "Database",
        skills: ["MySQL", "PostgreSQL", "Supabase"],
      },
      {
        category: "Tools",
        skills: ["Git", "Sourcetree", "Fork", "Docker", "VS Code", "Postman", "Backlog", "Linux (Ubuntu)", "Windows"],
      },
    ],
  },
  experience: {
    eyebrow: "Career",
    title: "Experience",
    description: "Professional roles where I've built and maintained full-stack web applications.",
    contributionsLabel: "Contributions",
    jobs: [
      {
        company: "Global Innovation Consulting Inc.",
        position: "Full Stack Developer",
        period: "Apr 2025 — Present",
        responsibilities: [
          "Maintain and support a shipping management system for a Japan-facing client, covering detailed design, testing, and direct responses to customer questions.",
          "Built an insurance application platform end to end — applicant/policyholder data registration, document generation, and an admin approval workflow — across a React frontend and Laravel/Spring Boot backend.",
          "Developed a web app that automates monthly PMO reporting: generating a PowerPoint report from an uploaded Excel file and saving it to SharePoint via Microsoft account sign-in.",
          "Working across the full lifecycle — strategy, requirements analysis, system design, development, and testing — on a multi-tenant applicant management platform.",
        ],
        technologies: ["React", "TypeScript", "Next.js", "PHP", "Laravel", "Java / Spring Boot", "MySQL", "Docker"],
        contributions: [
          "Advanced from programmer to Systems Engineer, taking on requirements analysis and system design responsibilities in addition to development.",
          "Delivering a multi-tenant applicant management system end to end, from strategy and requirements through to testing.",
        ],
      },
      {
        company: "Brycen Myanmar Co., Ltd.",
        position: "Senior System Engineer",
        period: "Aug 2024 — Mar 2025",
        responsibilities: [
          "Developed an e-commerce management platform integrating customer management, order processing, warehouse operations, and inventory management for a Japan-facing offshore project.",
          "Conducted source code reviews and managed version control across a 12-person development team.",
          "Created unit test cases, executed unit and performance testing, and produced QA evidence documentation.",
          "Executed integration testing to validate functionality across modules before release.",
        ],
        technologies: ["PHP", "Laravel", "MySQL", "Docker", "Amazon S3", "Nginx", "Ubuntu", "jQuery", "Git"],
        contributions: [
          "Contributed as an SE-level developer on a 12-person team building an integrated e-commerce management platform for a Japanese client.",
          "Took ownership of code quality practices — code review and version control discipline — on a mid-sized team.",
        ],
      },
      {
        company: "METATEAM Myanmar Co., Ltd.",
        formerName: "Formerly Seattle Consulting Myanmar",
        position: "Junior / Senior Developer",
        period: "Mar 2019 — Jul 2024",
        responsibilities: [
          "Built and maintained around 20 client websites and web applications — static marketing sites, WordPress sites, and Shopify e-commerce stores — for Japanese clients as part of a Myanmar offshore team.",
          "Developed a multi-vendor e-commerce management system covering user, product, purchasing, order, and coupon management.",
          "Built an internal project and work-hour estimation system used to streamline project management within the company.",
          "Performed unit, integration, and comprehensive testing across projects, including test case creation and QA evidence documentation.",
          "Progressed from junior programmer to owning full end-to-end feature delivery across a range of tech stacks.",
        ],
        technologies: ["PHP", "Laravel", "WordPress", "Shopify", "Liquid", "Vue.js", "JavaScript", "jQuery", "MySQL"],
        contributions: [
          "Delivered around 20 client websites (static, WordPress, and Shopify) as part of Japan-facing offshore projects, through the company's rebrand from Seattle Consulting Myanmar to METATEAM Myanmar.",
          "Built and shipped two internal business systems — multi-vendor e-commerce management and project estimation — from requirements through to deployment.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Projects",
    description: "Projects I've built and delivered throughout my career, most recent first.",
    problemLabel: "Problem",
    contributionLabel: "My Contribution",
    seeMore: "See more",
    seeLess: "See less",
    code: "Code",
    liveDemo: "Live Demo",
    items: [
      {
        name: "Global AMS",
        period: "Mar 2026 — Present",
        teamSize: "6 people",
        description:
          "A multi-tenant applicant management system used by multiple companies to manage job applicants, from application intake through the interview process — an updated version of an earlier internal system.",
        problem:
          "Multiple companies needed one applicant-tracking platform with isolated data per company, rather than separate ad-hoc tools.",
        contribution:
          "Working across the full lifecycle — strategy and requirements analysis, system design, development, and testing — primarily on the Laravel backend and MySQL data layer with a React frontend.",
        technologies: ["React", "PHP", "Laravel", "JavaScript", "MySQL", "Docker"],
        features: [
          "Multi-tenant architecture with isolated applicant data per company",
          "Applicant registration, search, and management",
          "Interview process tracking and management",
          "Configurable user roles and permissions",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Monthly PMO Report Creation Project",
        period: "Aug 2025 — Dec 2025",
        teamSize: "5 people",
        description:
          "A web app where users sign in with a Microsoft account, upload a monthly PMO Excel report, and the system auto-generates a PowerPoint report and saves it to SharePoint.",
        problem: "PMO reporting was a manual, repetitive process of turning Excel data into PowerPoint decks by hand.",
        contribution: "Built core development features and ran integration and comprehensive testing on a 5-person team.",
        technologies: ["Ruby", "TypeScript", "React.js", "Next.js"],
        features: [
          "Microsoft account sign-in",
          "Automated Excel-to-PowerPoint report generation",
          "Automatic SharePoint upload",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Insurance Application Platform",
        period: "May 2025 — Jun 2025",
        teamSize: "5 people",
        description:
          "An insurance application management platform for individual users and insurance agencies to submit and manage insurance applications.",
        problem:
          "Insurance agencies needed a single system to register applicant/policyholder data, manage submitted applications, and generate required documents, with an approval workflow for admins.",
        contribution:
          "Developed features across a React frontend and Laravel/Spring Boot backend, including unit and integration testing, and wrote the end-user manual.",
        technologies: ["React", "PHP", "Laravel", "Java / Spring Boot", "MySQL", "Tailwind CSS"],
        features: [
          "Contractor, insured, and beneficiary data registration",
          "Application status management and admin approval workflow",
          "Automated required-document generation",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Surf Beverage Shipping Management System",
        period: "Apr 2025 — Present",
        teamSize: "3 people",
        description:
          "A shipping management system that streamlines shipment processing based on order data — from order intake through shipment creation, confirmation, and export.",
        problem:
          "The client needed to move from manual shipment tracking to a system that manages the full order-to-shipment pipeline.",
        contribution:
          "Responsible for operation and maintenance, testing, detailed design, and handling customer questions directly for a Japan-facing client.",
        technologies: ["PHP", "Laravel", "MySQL", "jQuery", "AJAX", "Git"],
        features: [
          "Order data import",
          "Shipment creation, confirmation, and export workflow",
          "Direct client support channel",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "EC Management System",
        period: "Aug 2024 — Mar 2025",
        teamSize: "12 people",
        description:
          "A platform integrating customer management, order processing, warehouse operations, and inventory management to improve operational efficiency for a Japan-facing client.",
        problem:
          "The business needed one integrated system instead of disconnected tools for customer, order, warehouse, and inventory management.",
        contribution:
          "Conducted source code reviews and version control across a 12-person team; created unit test cases, executed unit, performance, and integration testing, and produced QA evidence documentation.",
        technologies: ["PHP", "Laravel", "MySQL", "Docker", "Amazon S3", "Nginx", "Git"],
        features: [
          "Customer management",
          "Order processing",
          "Warehouse and inventory management",
          "Improved data transparency across teams",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Estimate Management System",
        period: "Mar 2024 — Jul 2024",
        teamSize: "7 people",
        description: "An internal tool for estimating project time and work hours to streamline in-office project management.",
        problem:
          "The company needed a consistent way to plan, estimate, and track project and staff time across concurrent projects.",
        contribution:
          "Built core CRUD functionality for project estimates and staff assignment, plus test case creation and QA evidence documentation.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Docker"],
        features: [
          "Create, read, update, and delete project estimates",
          "Assign team members to projects",
          "Built-in workflow for handling client questions",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Multi-vendor EC System",
        period: "Jun 2023 — Feb 2024",
        teamSize: "5 people",
        description:
          "An internal system centrally managing user accounts, product listings, purchasing/receiving, orders, and coupons for e-commerce operations.",
        problem: "The business needed one platform to manage multi-vendor e-commerce operations instead of disconnected tools.",
        contribution: "Built core development features and executed unit testing for the platform.",
        technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "jQuery"],
        features: [
          "Centralized user, product, and order management",
          "Purchasing and receiving workflows",
          "Coupon management",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "FiveVai — Shopify E-Commerce Platform",
        period: "Jan 2022 — May 2023",
        teamSize: "5 people",
        description:
          "A set of around five e-commerce stores built on Shopify for a Japanese client, developed and operated as part of a Myanmar-based offshore team.",
        problem:
          "The client needed multiple online stores running with automated inventory and order handling instead of manual, error-prone processing.",
        contribution:
          "Built storefront themes and logic in Liquid, and used Shopify Flow to automate inventory management and order processing across the stores.",
        technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "jQuery"],
        features: [
          "Automated inventory management via Shopify Flow",
          "Automated order-processing workflows",
          "Custom storefront themes across ~5 stores",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Bties — WordPress Sites",
        period: "Jan 2020 — Dec 2021",
        teamSize: "6 people",
        description:
          "Around 15 WordPress websites — corporate sites and online stores — built with custom post types, taxonomies, and plugins for flexible content management.",
        problem: "The client needed many different WordPress sites with varied content types and a flexible way to manage them all.",
        contribution: "Developed and maintained the sites end to end, including unit and integration testing.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
        features: [
          "~15 WordPress sites delivered",
          "Custom post types and taxonomies for flexible content",
          "Plugin-driven interactive features",
        ],
        githubUrl: "",
        liveUrl: "",
      },
      {
        name: "Bties — LP Website",
        period: "Jun 2019 — Dec 2019",
        teamSize: "5 people",
        description:
          "Around eight static websites — including shopping and advertising sites — designed to let users intuitively understand valuable content.",
        problem: "The client needed clear, static marketing sites for end users across a range of shopping and advertising campaigns.",
        contribution:
          "Built the frontend for multiple sites and handled ongoing operation and maintenance plus integration and comprehensive testing.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        features: [
          "8 client-facing static sites delivered",
          "Shopping and advertising site variants",
          "Responsive layouts built for readability",
        ],
        githubUrl: "",
        liveUrl: "",
      },
    ],
  },
  approach: {
    eyebrow: "Process",
    title: "Development Approach",
    steps: [
      {
        title: "Understand",
        description: "Understand the business requirement and the underlying user problem before writing any code.",
      },
      {
        title: "Design",
        description: "Design a simple, intuitive user experience and plan how data will move through the system.",
      },
      {
        title: "Build",
        description: "Develop maintainable frontend, backend, and database components with clear boundaries.",
      },
      {
        title: "Test",
        description: "Test functionality against real usage patterns and handle edge cases before shipping.",
      },
      {
        title: "Improve",
        description: "Monitor behavior in production, fix issues, and continuously refine the system over time.",
      },
    ],
  },
  resume: {
    title: "Want to know more about my experience?",
    description:
      "Download my resume and learn more about my professional background, experience, and technical skills.",
    downloadResume: "Download Resume",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get In Touch",
    description:
      "I'm open to full-stack developer opportunities. Feel free to reach out through any of the channels below.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "All rights reserved.",
    githubProfile: "GitHub profile",
  },
};
