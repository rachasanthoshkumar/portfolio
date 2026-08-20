"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  Link2,
  Mail,
  MapPin,
  Moon,
  Network,
  Send,
  Sun
} from "lucide-react";
import {
  certifications,
  experience,
  heroTools,
  navItems,
  profile,
  projects,
  socials
} from "@/data/portfolio";
import {
  SiAuth0,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGoogle,
  SiHibernate,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const socialIcons = {
  github: GitBranch,
  linkedin: Link2,
  mail: Mail,
  globe: Globe
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getTechMeta(label) {
  const normalized = label.toLowerCase();

  if (normalized === "java") return { Icon: SiOpenjdk, color: "text-red-600" };
  if (normalized.includes("spring security")) return { Icon: SiSpringsecurity, color: "text-green-600" };
  if (normalized.includes("spring")) return { Icon: SiSpringboot, color: "text-green-600" };
  if (normalized.includes("hibernate")) return { Icon: SiHibernate, color: "text-yellow-700 dark:text-yellow-500" };
  if (normalized.includes("redis")) return { Icon: SiRedis, color: "text-red-600" };
  if (normalized.includes("postman")) return { Icon: SiPostman, color: "text-orange-500" };
  if (normalized.includes("rest")) return { Icon: Network, color: "text-zinc-900 dark:text-white" };
  if (normalized.includes("typescript")) return { Icon: SiTypescript, color: "text-sky-500" };
  if (normalized.includes("javascript")) return { Icon: SiJavascript, color: "text-yellow-500" };
  if (normalized.includes("react")) return { Icon: SiReact, color: "text-cyan-500" };
  if (normalized.includes("next")) return { Icon: SiNextdotjs, color: "text-zinc-950 dark:text-white" };
  if (normalized.includes("tailwind")) return { Icon: SiTailwindcss, color: "text-cyan-500" };
  if (normalized.includes("node")) return { Icon: SiNodedotjs, color: "text-green-600" };
  if (normalized.includes("postgres")) return { Icon: SiPostgresql, color: "text-blue-600" };
  if (normalized.includes("docker")) return { Icon: SiDocker, color: "text-sky-500" };
  if (normalized.includes("express")) return { Icon: SiExpress, color: "text-zinc-950 dark:text-white" };
  if (normalized.includes("git")) return { Icon: SiGit, color: "text-orange-600" };
  if (normalized.includes("prisma")) return { Icon: SiPrisma, color: "text-zinc-900 dark:text-white" };
  if (normalized.includes("mongodb")) return { Icon: SiMongodb, color: "text-green-600" };
  if (normalized.includes("drizzle")) return { Icon: SiDrizzle, color: "text-lime-500" };
  if (normalized.includes("auth")) return { Icon: SiAuth0, color: "text-orange-500" };
  if (normalized.includes("gemini")) return { Icon: SiGoogle, color: "text-blue-500" };
  if (normalized.includes("neon")) return { Icon: SiPostgresql, color: "text-emerald-500" };

  return null;
}

function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark"))
  };
}

function Avatar({ large = false }) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm shadow-zinc-200/70 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/20",
        large ? "h-24 w-24 md:h-28 md:w-28" : "h-10 w-10"
      )}
      aria-label={`${profile.name} avatar`}
    >
      <img
        src="/avatar.png"
        alt={`${profile.name} caricature avatar`}
        className="h-full w-full object-cover object-[50%_18%]"
      />
    </div>
  );
}

function TechPill({ label }) {
  const tech = getTechMeta(label);
  const Icon = tech?.Icon;

  return (
    <span className="inline-flex h-6 items-center gap-1 rounded-md border border-dashed border-zinc-300 bg-white px-1.5 text-xs font-semibold text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <span className="grid h-4 min-w-4 place-items-center">
        {Icon ? (
          <Icon className={cn("h-4 w-4", tech.color)} aria-hidden="true" />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        )}
      </span>
      {label}
    </span>
  );
}

function ProjectTechIcon({ label }) {
  const tech = getTechMeta(label);
  const Icon = tech?.Icon;

  return (
    <span
      title={label}
      className="grid h-7 w-7 place-items-center rounded-[4px] bg-white text-zinc-950 shadow-sm ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800"
    >
      {Icon ? (
        <Icon className={cn("h-5 w-5", tech.color)} aria-hidden="true" />
      ) : (
        <span className="h-2 w-2 rounded-full bg-zinc-400" />
      )}
    </span>
  );
}

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/80 py-5 backdrop-blur-xl dark:bg-zinc-950/80">
      <nav className="container mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        <a href="#top" className="transition-transform duration-200 hover:scale-105">
          <Avatar />
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <motion.section
      id="top"
      className="container mx-auto flex min-h-[560px] max-w-2xl scroll-mt-20 flex-col items-start justify-center px-4 pb-12 pt-10 text-left"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Avatar large />
      <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-sm text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        <MapPin size={15} />
        {profile.location}
      </div>
      <h1 className="mt-5 max-w-2xl text-balance text-lg font-bold leading-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
        Hi, I&apos;m {profile.shortName}{" "}
        <span className="text-zinc-400 dark:text-zinc-500">- A {profile.role}.</span>
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {profile.summary}
      </p>
      <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-zinc-500 sm:text-base dark:text-zinc-400">
        I build secure backend systems using{" "}
        {heroTools.map((tool, index) => (
          <span key={tool}>
            <TechPill label={tool} />
            {index < heroTools.length - 1 ? " " : ""}
          </span>
        ))}
        . With a focus on scalable APIs, clean architecture, reliable data flows, and production-ready services.
      </p>
      <div className="mt-6 flex flex-wrap justify-start gap-3">
        <a
          href={profile.resumeUrl}
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
        >
          <FileText size={17} />
          Resume / CV
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-zinc-950 px-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          <Send size={17} />
          Get in touch
        </a>
      </div>
      <div className="mt-6 flex items-center justify-start gap-3 text-zinc-400">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];

          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition hover:-translate-y-0.5 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Icon size={20} strokeWidth={1.8} />
            </a>
          );
        })}
      </div>
      <div className="mt-6 flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-white/70 p-4 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
          <Globe size={20} />
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-400">Available for opportunities</p>
          <p className="mt-1 break-all text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {profile.email}
          </p>
          <p className="mt-0.5 text-xs font-medium text-zinc-400">{profile.phone}</p>
        </div>
      </div>
    </motion.section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-zinc-400">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-bold tracking-normal text-zinc-950 dark:text-zinc-50">
        {title}
      </h2>
    </div>
  );
}

function ExperienceSection() {
  const primaryExperience = experience[0];

  return (
    <section id="work" className="container mx-auto max-w-2xl scroll-mt-20 px-4 py-10">
      <h2 className="text-xl font-bold tracking-normal text-zinc-950 dark:text-zinc-50">
        Experience
      </h2>
      <motion.article
        className="mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
          <div className="flex min-w-0 gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-zinc-950 text-[11px] font-bold text-white shadow-sm dark:bg-white dark:text-zinc-950">
              {primaryExperience.logo}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-50">
                  {primaryExperience.company}
                </h3>
                <Globe size={16} className="text-zinc-400" strokeWidth={1.8} />
                <Link2 size={16} className="text-zinc-400" strokeWidth={1.8} />
                <GitBranch size={16} className="text-zinc-400" strokeWidth={1.8} />
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-emerald-950/50 dark:text-zinc-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {primaryExperience.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {primaryExperience.role}
              </p>
            </div>
          </div>
          <div className="text-left text-sm leading-6 text-zinc-400 md:min-w-44 md:text-right">
            <p>{primaryExperience.period}</p>
            <p>{primaryExperience.location}</p>
          </div>
        </div>

        <h4 className="mt-7 text-base font-bold text-zinc-950 dark:text-zinc-50">
          Technologies & Tools
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {primaryExperience.tools.map((tool) => (
            <TechPill key={tool} label={tool} />
          ))}
        </div>

        <ul className="mt-5 space-y-1 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7 dark:text-zinc-500">
          {primaryExperience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-sm bg-zinc-400 dark:bg-zinc-600" />
              <span className="text-sm">{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}

function ProjectPreview({ project, index }) {
  return (
    <div className={cn("relative h-[235px] overflow-hidden bg-gradient-to-br", project.gradient)}>
      <div className="absolute -left-8 top-12 h-[176px] w-[118%] rotate-[-5deg] rounded-[10px] border border-white/70 bg-[#070816] p-3 shadow-2xl">
        <div className="flex h-6 items-center justify-between rounded-md bg-white/5 px-3 text-[6px] text-white/50">
          <div className="flex items-center gap-2">
            <span className={cn("h-2 w-2 rounded-sm", project.accent)} />
            <span className="">{project.title}</span>
          </div>
          <div className="flex gap-3">
            <span>Links</span>
            <span>Docs</span>
            <span>Deploy</span>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-[1.05fr_0.95fr] gap-4 px-5">
          <div>
            <p className="text-[22px] font-black leading-[1.05] text-white">
              {index === 0 ? "Build Fast," : project.title}
            </p>
            <p className="mt-1 text-[22px] font-black leading-[1.05] text-indigo-300">
              {index === 0 ? "Ship Smart" : "MCP Server"}
            </p>
            <div className="mt-4 h-2 w-28 rounded-full bg-white/15" />
            <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
          </div>
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2">
              <span className="block h-2 rounded-full bg-emerald-400/70" />
              <span className="mt-2 block h-2 w-4/5 rounded-full bg-white/15" />
              <span className="mt-2 block h-2 w-3/5 rounded-full bg-white/10" />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-2">
              <span className="block h-2 w-2/3 rounded-full bg-white/15" />
              <span className="mt-2 block h-2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      {index === 0 && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-[74px] w-[74px] place-items-center rounded-full border-[6px] border-zinc-500/70 bg-black/10 text-zinc-500/80 backdrop-blur-[1px]">
            <span className="ml-1 h-0 w-0 border-y-[14px] border-l-[21px] border-y-transparent border-l-current" />
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[14px] border border-zinc-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/70 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:shadow-black/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.05, duration: 0.45 }}
    >
      <ProjectPreview project={project} index={index} />
      <div className="p-[30px]">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[15px] font-bold leading-tight text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-4 text-zinc-400">
            <a
              href={project.href}
              aria-label={`${project.title} live preview`}
              className="transition hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Globe size={28} strokeWidth={1.8} />
            </a>
            <a
              href={project.repo}
              aria-label={`${project.title} repository`}
              className="transition hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <GitBranch size={27} strokeWidth={1.8} />
            </a>
          </div>
        </div>
        <p className="mt-3 min-h-[112px] text-[14px] leading-[1.55] text-zinc-400 dark:text-zinc-400">
          {project.description}
        </p>
        <p className="mt-1 text-[14px] font-semibold text-zinc-400">Technologies</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {project.tools.map((tool) => (
            <ProjectTechIcon key={tool} label={tool} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto max-w-2xl scroll-mt-20 px-4 py-10">
      <div className="mb-7">
        <h2 className="text-xl font-bold leading-none text-zinc-950 dark:text-zinc-50">
          Projects
        </h2>
      </div>
      <div className="grid gap-[22px] md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-10">
      <div className="mb-7">
        <p className="text-xs text-zinc-400">Credentials</p>
        <h2 className="mt-1 text-lg font-bold tracking-normal text-zinc-950 dark:text-zinc-50">
          Certifications
        </h2>
      </div>
      <div className="space-y-3">
        {certifications.map((certification, index) => (
          <motion.div
            key={certification}
            className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white p-3 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: index * 0.05, duration: 0.45 }}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300">
              <Award size={16} />
            </span>
            {certification}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container mx-auto max-w-2xl px-4 pb-10 pt-6 text-left text-sm text-zinc-400">
      <p>
        Built by {profile.name}.{" "}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1 font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          Say hello
          <ExternalLink size={14} />
        </a>
      </p>
    </footer>
  );
}

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}
