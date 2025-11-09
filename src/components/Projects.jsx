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
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-20">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl font-bold mb-12 tracking-tight"
      >
        Featured Projects
      </motion.h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl transition"
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              {/* Image layer */}
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay with glow & text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 w-full text-left">
                  <h3 className="text-lg font-semibold text-emerald-400">{p.title}</h3>
                  <p className="text-xs text-gray-300 mt-1 opacity-90">
                    Click to view details
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
