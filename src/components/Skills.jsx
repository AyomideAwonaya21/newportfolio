import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Levels control how many dots are filled (visual seniority signal)
const CATEGORIES = [
  {
    name: "Languages",
    emoji: "💻",
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
    emoji: "🎨",
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
    emoji: "🧩",
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
    emoji: "🗃️",
    items: [
      { name: "MySQL", level: "advanced" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Firebase", level: "proficient" },
    ],
  },
  {
    name: "Cloud & DevOps",
    emoji: "☁️",
    items: [
      { name: "AWS", level: "proficient" },
      { name: "Docker", level: "advanced" },
      { name: "Kubernetes", level: "proficient" },
      { name: "CI/CD", level: "advanced" },
    ],
  },
  {
    name: "Testing & Quality",
    emoji: "🧪",
    items: [
      { name: "Jest", level: "advanced" },
      { name: "Vitest", level: "proficient" },
    ],
  },
  {
    name: "Analytics & BI",
    emoji: "📊",
    items: [
      { name: "Power BI", level: "proficient" },
      { name: "Tableau", level: "proficient" },
    ],
  },
];

const LEVEL_DOTS = {
  advanced: 3,
  proficient: 2,
};

function Dots({ level }) {
  const n = LEVEL_DOTS[level] ?? 2;
  return (
    <span className="ml-1 inline-flex gap-0.5 align-middle" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < n ? "bg-emerald-500" : "bg-emerald-200 dark:bg-emerald-900"
          }`}
        />
      ))}
    </span>
  );
}

function Badge({ text, level }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 hover:shadow-sm hover:-translate-y-0.5 transition"
      title={`${text} • ${level}`}
    >
      {text}
      <Dots level={level} />
    </span>
  );
}

export default function Skills() {
  const [q, setQ] = useState("");

  // Flattened index for search
  const filtered = useMemo(() => {
    if (!q.trim()) return CATEGORIES;
    const s = q.toLowerCase();
    return CATEGORIES.map(cat => ({
      ...cat,
      items: cat.items.filter(it => it.name.toLowerCase().includes(s)),
    })).filter(cat => cat.items.length > 0);
  }, [q]);

  return (
    <main className="py-16 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl sm:text-4xl font-bold text-center"
      >
        Skills & Expertise
      </motion.h2>

      <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
        Focused, modern stack—organized for quick scanning.
      </p>

      {/* Search */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter skills (e.g., React, AWS, GraphQL)"
            className="w-full rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400/60"
            aria-label="Filter skills"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cat, idx) => (
          <motion.section
            key={cat.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
            className="rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm p-5"
          >
            <header className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                <span className="mr-2">{cat.emoji}</span>
                {cat.name}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {cat.items.length} skill{cat.items.length !== 1 ? "s" : ""}
              </span>
            </header>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <Badge key={s.name} text={s.name} level={s.level} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Legend — small, understated */}
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
