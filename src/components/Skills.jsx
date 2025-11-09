import React from "react";
import { motion } from "framer-motion";

/** 
 * Levels: "expert" | "advanced" | "proficient" 
 * Style uses small dot indicators (●●●) for instant visual signal.
 */
const CATEGORIES = [
  {
    name: "Languages",
    items: [
      { name: "Java", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "C", level: "proficient" },
      { name: "C++", level: "proficient" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Angular", level: "proficient" },
      { name: "Vue.js", level: "proficient" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      { name: "Node.js", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "GraphQL", level: "proficient" },
      { name: "Prisma", level: "proficient" },
      { name: "FastAPI", level: "proficient" },
      { name: "Flask", level: "proficient" },
    ],
  },
  {
    name: "Data & Databases",
    items: [
      { name: "MySQL", level: "advanced" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Firebase", level: "proficient" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", level: "proficient" },
      { name: "Docker", level: "advanced" },
      { name: "Kubernetes", level: "proficient" },
      { name: "CI/CD", level: "advanced" },
    ],
  },
  {
    name: "Testing & Quality",
    items: [
      { name: "Jest", level: "advanced" },
      { name: "Vitest", level: "proficient" },
    ],
  },
  {
    name: "Analytics & BI",
    items: [
      { name: "Power BI", level: "proficient" },
      { name: "Tableau", level: "proficient" },
    ],
  },
];

function DotScale({ level }) {
  const map = {
    expert: 3,
    advanced: 3,
    proficient: 2,
  };
  const filled = map[level] ?? 2;
  return (
    <span className="inline-flex items-center gap-0.5 ml-1 align-middle">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            i < filled ? "bg-emerald-500" : "bg-emerald-200 dark:bg-emerald-900"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function SkillBadge({ label, level }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 hover:shadow-sm transition"
      title={`${label} • ${level.charAt(0).toUpperCase() + level.slice(1)}`}
    >
      {label}
      <DotScale level={level} />
    </span>
  );
}

export default function Skills() {
  return (
    <main className="py-16 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl sm:text-4xl font-bold mb-4 text-center"
      >
        Skills & Expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-10 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        A concise view of my language fluency, frameworks, platforms, and delivery tooling —
        organized for quick scanning.
      </motion.p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat, idx) => (
          <motion.section
            key={cat.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm p-5"
          >
            <header className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </header>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <SkillBadge key={s.name} label={s.name} level={s.level} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex gap-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Advanced
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex gap-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-200 dark:bg-emerald-900" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-200 dark:bg-emerald-900" />
          </span>
          Proficient
        </div>
      </div>
    </main>
  );
}
