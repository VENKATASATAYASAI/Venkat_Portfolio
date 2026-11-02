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
    "Data Cloud Consultant — in progress",
  ],
  summary:
    "I design and run customer journeys on Salesforce Marketing Cloud — from data model and segmentation to AMPscript-powered personalization and automated delivery. Backed by a Master's in Electrical & Computer Engineering, I bring an engineer's rigor to marketing technology.",
  location: "Ontario, Canada",
  email: "tunikipativenkat310@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/VENKATASATAYASAI",
    trailblazer: "https://www.salesforce.com/trailblazer/",
  },
  current: {
    title: "Marketing Cloud Consultant",
    company: "CGI",
    since: "Feb 2026",
  },
};

export const stats = [
  { value: "2", label: "Salesforce certifications" },
  { value: "M.Eng", label: "Electrical & Computer Eng." },
  { value: "2026", label: "Consulting since February" },
  { value: "2+", label: "Certs in progress" },
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
    role: "AWS Cloud Intern",
    company: "APSSDC",
    period: "Internship",
    points: [
      "Managed EC2 instances and VPC architecture, optimizing resource allocation and security.",
    ],
    tags: ["AWS", "EC2", "VPC"],
  },
  {
    role: "IoT Intern",
    company: "Technologics Global",
    period: "Internship",
    points: [
      "Engineered Arduino-based home automation with sensor integration and energy efficiency in mind.",
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
