import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "SmartCart",
      image: "/projects/smartcart.jpg",
      link: "https://github.com/AyomideAwonaya21/SmartCart",
    },
    {
      title: "EDI Translator / Validator",
      image: "/projects/edi.jpg",
      link: "https://github.com/AyomideAwonaya21/edi-translator",
    },
    {
      title: "Habitly Tracker",
      image: "/projects/habitly.jpg",
      link: "https://github.com/AyomideAwonaya21/habitly-tracker",
    },
    {
      title: "Personality Pet Finder",
      image: "/projects/petfinder.jpg",
      link: "https://ayomideawonaya21.github.io/The-Ultimate-Personality-Pet-Finder/",
    },
    {
      title: "Weather Dashboard",
      image: "/projects/weather.jpg",
      link: "https://ayomideawonaya21.github.io/weather-dashboard/",
    },
  ];

  return (
    <main className="py-10 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-bold mb-6 text-center"
      >
        Selected Projects
      </motion.h2>

      {/* Compact, stylish thumbnail grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            className="group relative overflow-hidden rounded-xl border bg-white/50 dark:bg-white/5 shadow-sm"
            title={p.title}
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title}`}
              className="block"
            >
              {/* Thumbnail with fixed aspect ratio so cards stay small & even */}
              <div className="aspect-[16/10] w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with title */}
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="inset-x-0 bottom-0 translate-y-3 opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 w-full">
                  <div className="m-2 rounded-lg bg-black/55 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {p.title}
                  </div>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
