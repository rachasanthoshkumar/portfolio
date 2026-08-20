export const profile = {
  name: "Santhosh Racha",
  shortName: "Santhosh",
  initials: "SR",
  role: "Java Developer",
  location: "Hyderabad, India",
  email: "rachasanthosh2309@gmail.com",
  phone: "8688092739",
  resumeUrl: "/resume.pdf",
  summary:
    "Java Developer focused on building secure RESTful APIs, Spring Boot microservices, and reliable backend systems with PostgreSQL, Redis, and Docker."
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
  "Java",
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Postman",
  "React",
  "JavaScript",
  "Tailwind CSS"
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Java Developer",
    period: "2024 - 2026",
    location: "Hyderabad",
    status: "Full-time",
    logo: "TCS",
    links: ["On-site"],
    tools: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Postman",
      "React",
      "JavaScript",
      "Tailwind CSS"
    ],
    highlights: [
      "Developed scalable RESTful APIs using Spring Boot, following clean architecture principles, and secured endpoints with Spring Security using JWT-based authentication and role-based authorization.",
      "Utilized Spring Data JPA and Hibernate ORM to design efficient entity mappings and repository layers, reducing boilerplate code and ensuring data consistency across modules.",
      "Integrated Redis as a caching layer to optimize frequently accessed data and reduce latency while contributing to a microservices-based architecture.",
      "Improved scalability, performance, and reliability through robust exception handling, validation, and AI-assisted development and debugging workflows."
    ]
  },
  
];

export const projects = [
  {
    title: "Microservices eCommerce",
    description:
      "A microservices-based e-commerce platform with product catalog, cart, orders, and user management services communicating through RESTful APIs.",
    status: "All Systems Operational",
    tools: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Docker", "REST APIs"],
    gradient: "from-pink-100 via-fuchsia-400 to-purple-700",
    accent: "bg-purple-500",
    href: "#",
    repo: "#"
  },
  {
    title: "URL Shortener",
    description:
      "A scalable Spring Boot URL shortening service with short-code generation, HTTP 302 redirects, Redis caching, rate limiting, expiration, and link analytics.",
    status: "All Systems Operational",
    tools: ["Java", "Spring Boot", "Redis", "PostgreSQL", "REST APIs", "Docker"],
    gradient: "from-pink-100 via-fuchsia-400 to-purple-700",
    accent: "bg-indigo-500",
    href: "#",
    repo: "#"
  },
  
];

export const certifications = [
  "DevOps Professional Certificate by PagerDuty and LinkedIn",
  "Atlassian Agile Project Management Professional Certificate"
];
