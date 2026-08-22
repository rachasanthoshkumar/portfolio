export const profile = {
  name: "Santhosh Racha",
  shortName: "Santhosh",
  initials: "SR",
  role: "Software Engineer",
  location: "Hyderabad, India",
  email: "rachasanthosh2309@gmail.com",
  phone: "8688092739",
  resumeUrl: "/resume.pdf",
  summary:
    "Software Engineer with 2+ years of experience developing internal tools, modernising legacy applications, and supporting business-critical production systems."
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" }
];

export const socials = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "Email", href: "mailto:rachasanthosh2309@gmail.com", icon: "mail" },
  { label: "Portfolio", href: "#projects", icon: "globe" }
];

export const heroTools = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker"
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    period: "2024 - Present",
    location: "Hyderabad, India",
    status: "Full-time",
    logo: "TCS",
    links: ["On-site"],
    tools: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "REST APIs",
      "Git",
      "Docker"
    ],
    highlights: [
      "Developed and enhanced internal support tools and operational dashboards for real-time visibility into platform health, message processing, queue volumes, and system status.",
      "Modernised legacy applications by rebuilding interfaces with pagination, filtering, refresh controls, and secure authentication to reduce manual operational effort.",
      "Investigated and resolved 30+ production issues related to API failures, server outages, and data processing by analysing logs, identifying root causes, and implementing corrective actions."
    ]
  },
  
];

export const projects = [
  {
    title: "ShortURL",
    description:
      "A full-stack URL shortener with dynamic slug redirects, stable QR codes, authentication, and persistent PostgreSQL storage.",
    status: "All Systems Operational",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    gradient: "from-pink-100 via-fuchsia-400 to-purple-700",
    accent: "bg-purple-500",
    href: "#",
    repo: "#"
  },
  {
    title: "MoodLog",
    description:
      "An AI-powered journaling app that analyzes entries, generates mood tags, summaries, reflective questions, and stores journal history.",
    status: "All Systems Operational",
    tools: ["React", "JavaScript", "Tailwind", "Gemini", "Drizzle ORM", "Neon"],
    gradient: "from-pink-100 via-fuchsia-400 to-purple-700",
    accent: "bg-indigo-500",
    href: "https://moodlog-rho.vercel.app/",
    repo: "#"
  },
  
];

export const certifications = [
  "DevOps Professional Certificate by PagerDuty and LinkedIn",
  "Atlassian Agile Project Management Professional Certificate"
];
