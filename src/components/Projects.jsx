import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "SmartCart", image: "/projects/smartcart.jpg", link: "https://github.com/AyomideAwonaya21/SmartCart" },
    { title: "EDI Translator / Validator", image: "/projects/edi.jpg", link: "https://github.com/AyomideAwonaya21/edi-translator" },
    { title: "Habitly Tracker", image: "/projects/habitly.jpg", link: "https://github.com/AyomideAwonaya21/habitly-tracker" },
    { title: "Personality Pet Finder", image: "/projects/petfinder.jpg", link: "https://ayomideawonaya21.github.io/The-Ultimate-Personality-Pet-Finder/" },
    { title: "Weather Dashboard", image: "/projects/weather.jpg", link: "https://ayomideawonaya21.github.io/weather-dashboard/" },
  ];

  return (
    <main className="py-10 px-3 sm:px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center text-2xl sm:text-3xl font-bold mb-6"
      >
        Selected Projects
      </motion.h2>

      {/* Compact, stylish thumbnail grid (2 → 3 → 5 cols) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            className="group relative overflow-hidden rounded-lg border bg-white/60 dark:bg-white/5 shadow-sm"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title}`}
              className="block outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 dark:focus-visible:ring-offset-black/40"
            >
              {/* Taller on mobile for clarity; wider on larger screens */}
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width:1024px) 20vw, (min-width:640px) 30vw, 48vw"
                />
              </div>

              {/* Hover overlay (desktop only) */}
              <div className="pointer-events-none absolute inset-0 hidden sm:flex items-end">
                <div className="inset-x-0 bottom-0 translate-y-3 opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 w-full">
                  <div className="m-2 rounded-md bg-black/55 px-2 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {p.title}
                  </div>
                </div>
              </div>

              {/* Mobile caption (always visible on xs; hidden from sm up) */}
              <figcaption className="sm:hidden px-2 py-1.5 text-[11.5px] text-gray-700 dark:text-gray-300 truncate">
                {p.title}
              </figcaption>
            </a>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
