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
    "Java Developer focused on building secure RESTful APIs, microservices, and reliable backend systems with Spring Boot, PostgreSQL, MongoDB, Redis, and Apache Kafka."
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" }
];

export const socials = [
  { label: "GitHub", href: "https://github.com/rachasanthoshkumar", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/santhosh-racha/", icon: "linkedin" },
  { label: "Email", href: "mailto:rachasanthosh2309@gmail.com", icon: "mail" },
  { label: "Portfolio", href: "#projects", icon: "globe" }
];

export const heroTools = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "Docker"
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Java Developer",
    period: "2024 - 2026",
    location: "Hyderabad, India",
    status: "Full-time",
    logo: "TCS",
    links: ["On-site"],
    tools: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Git",
      "Docker"
    ],
    highlights: [
      "Developed and maintained RESTful APIs using Java and Spring Boot for backend application features.",
      "Applied core Java and object-oriented programming concepts while developing and maintaining application components.",
      "Worked with SQL queries for retrieving, inserting, updating, and deleting application data.",
      "Implemented input validation and exception handling to improve API reliability and handle invalid requests and application errors.",
      "Tested and validated REST APIs using Postman, troubleshooting API requests, responses, and database-related issues.",
      "Worked with SQL Server for relational database operations and application data management."
    ]
  },
  
];

export const projects = [
  {
    title: "AI Powered Fitness App",
    description:
      "A Java and Spring Boot microservices platform for user management, fitness tracking, and Gemini-powered insights, secured with Keycloak.",
    tools: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Eureka",
      "Keycloak",
      "OAuth2 / JWT",
      "PostgreSQL",
      "MongoDB",
      "Apache Kafka",
      "Google Gemini"
    ],
    gradient: "from-pink-100 via-fuchsia-400 to-purple-700",
    accent: "bg-purple-500",
    href: null,
    repo: "https://github.com/rachasanthoshkumar/AI-fitness-App",
    previewTitle: "Fitness",
    previewSubtitle: "AI Insights"
  },
  {
    title: "TinyURL",
    description:
      "A Spring Boot URL shortening backend with collision-resistant short codes, HTTP redirects, Redis caching, rate limiting, configurable expiry, and analytics.",
    tools: ["Java", "Spring Boot", "REST APIs", "Redis", "PostgreSQL", "Docker", "JUnit", "Mockito"],
    gradient: "from-pink-100 via-fuchsia-400 to-purple-700",
    accent: "bg-indigo-500",
    href: null,
    repo: "https://github.com/rachasanthoshkumar/tinyURL",
    previewTitle: "Shorten URLs,",
    previewSubtitle: "Ship Faster"
  },
  
];

export const certifications = [
  "DevOps Professional Certificate by PagerDuty and LinkedIn",
  "Atlassian Agile Project Management Professional Certificate"
];
