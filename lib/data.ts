// Single source of truth for portfolio content.
// Update the values here — every section reads from this file.

export const profile = {
  name: "Venkata Satya Sai Tunikipati",
  shortName: "Venkat",
  initials: "VT",
  headline: "Salesforce Marketing Cloud Consultant",
  roles: [
    "Marketing Cloud Consultant",
    "SFMC Admin — Certified",
    "Engagement Specialist — Certified",
    "Agentforce Specialist — Certified",
    "Data Cloud Consultant — in progress",
  ],
  summary:
    "I design and run customer journeys on Salesforce Marketing Cloud — from data model and segmentation to AMPscript-powered personalization and automated delivery. Backed by a Master's in Electrical & Computer Engineering, I bring an engineer's rigor to marketing technology.",
  location: "Ontario, Canada",
  email: "tunikipativenkat310@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/venkata-satya-sai-tunikipati-b47a73213",
    github: "https://github.com/VENKATASATAYASAI",
    trailblazer: "https://www.salesforce.com/trailblazer/bdw0e844ec72rgzx58",
  },
  current: {
    title: "Marketing Cloud Consultant",
    company: "CGI",
    since: "Feb 2026",
  },
};

// `value` animates as a count-up when it is a number; `suffix` is appended.
export const stats: { value: number | string; suffix?: string; label: string }[] = [
  { value: 3, label: "Salesforce certifications" },
  { value: "M.Eng", label: "Electrical & Computer Eng." },
  { value: 2026, label: "Consulting since February" },
  { value: 2, suffix: "+", label: "Certs in progress" },
];

export const capabilities = [
  {
    title: "Journey Orchestration",
    description: "Multi-step, event-driven journeys in Journey Builder with entry logic, decision splits and wait strategies.",
    icon: "route",
    accent: "from-sky-500/30 to-blue-600/10",
  },
  {
    title: "Data & Segmentation",
    description: "Data extension models, Contact Builder relationships and SQL queries that produce clean, targetable audiences.",
    icon: "database",
    accent: "from-violet-500/30 to-fuchsia-600/10",
  },
  {
    title: "Personalization",
    description: "AMPscript and SSJS for dynamic content, lookups and CloudPages that feel one-to-one.",
    icon: "sparkles",
    accent: "from-fuchsia-500/30 to-pink-600/10",
  },
  {
    title: "AI & Agentforce",
    description: "Applying Agentforce and AI tooling to speed up build, QA and campaign decisioning.",
    icon: "bot",
    accent: "from-emerald-500/30 to-teal-600/10",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: "earned" | "in-progress";
  accent: string; // tailwind gradient stops
};

export const certifications: Certification[] = [
  {
    name: "Marketing Cloud Administrator",
    issuer: "Salesforce",
    status: "earned",
    accent: "from-sky-400 to-blue-600",
  },
  {
    name: "Marketing Cloud Engagement Specialist",
    issuer: "Salesforce",
    status: "earned",
    accent: "from-fuchsia-400 to-violet-600",
  },
  {
    name: "Agentforce Specialist",
    issuer: "Salesforce",
    status: "earned",
    accent: "from-indigo-400 to-cyan-500",
  },
  {
    name: "Data Cloud Consultant",
    issuer: "Salesforce",
    status: "in-progress",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    name: "Marketing Cloud Next Consultant",
    issuer: "Salesforce",
    status: "in-progress",
    accent: "from-amber-400 to-orange-600",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Marketing Cloud Consultant",
    company: "CGI",
    period: "Feb 2026 — Present",
    current: true,
    points: [
      "Configure and administer Salesforce Marketing Cloud Engagement for client implementations.",
      "Build Journey Builder flows, Automation Studio jobs and data extension models for targeted, multi-step campaigns.",
      "Write AMPscript and SQL to personalize content and segment audiences at scale.",
    ],
    tags: ["SFMC", "Journey Builder", "Automation Studio", "AMPscript", "SQL"],
  },
  {
    role: "Cloud Developer",
    company: "APSSDC",
    period: "Internship",
    points: [
      "Provisioned and managed AWS EC2 instances and designed VPC network architecture.",
      "Optimized resource allocation and hardened security groups and access policies.",
    ],
    tags: ["AWS", "EC2", "VPC"],
  },
  {
    role: "IoT Developer",
    company: "Technologics Global",
    period: "Internship",
    points: [
      "Developed Arduino-based home automation systems with multi-sensor integration.",
      "Designed device logic with a focus on reliability and energy efficiency.",
    ],
    tags: ["Arduino", "C++", "Sensors"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  emoji: string;
};

export const projects: Project[] = [
  {
    title: "ARGUS — SFMC Architect Agent",
    kicker: "AI × Marketing Cloud",
    description:
      "An AI assistant for Marketing Cloud builders: generates AMPscript & SSJS, designs data extension schemas with a visual schema builder, and reasons about Journey Builder and Automation Studio — with saved session history.",
    tags: ["React", "Vite", "Claude API", "AMPscript", "SSJS"],
    href: "https://github.com/VENKATASATAYASAI/sfmc-meridian",
    featured: true,
    emoji: "🛰️",
  },
  {
    title: "Obstacle-Avoidance Robot",
    kicker: "Robotics",
    description:
      "Autonomous navigation on Raspberry Pi using OpenCV for obstacle detection and path planning.",
    tags: ["Python", "Raspberry Pi", "OpenCV"],
    emoji: "🤖",
  },
  {
    title: "Gesture Appliance Control",
    kicker: "IoT · Accessibility",
    description:
      "Control home appliances with hand gestures using accelerometers — built for accessibility.",
    tags: ["Arduino", "C++", "IoT"],
    emoji: "✋",
  },
];

export const education = [
  {
    degree: "Master of Engineering, Electrical & Computer Engineering",
    school: "University of Windsor",
    period: "Completed Jan 2026",
    note: "",
  },
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    school: "SRM University AP",
    period: "Completed Sep 2023",
    note: "CGPA 8.24",
  },
];

export const skills = [
  "Marketing Cloud",
  "Journey Builder",
  "Automation Studio",
  "Email Studio",
  "Contact Builder",
  "AMPscript",
  "SSJS",
  "SQL",
  "Data Cloud",
  "CloudPages",
  "Salesforce",
  "AWS",
  "Python",
  "Next.js",
  "React",
];
