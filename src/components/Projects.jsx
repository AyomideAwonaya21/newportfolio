import React from "react";
import { motion } from "framer-motion";

function ExternalIcon({ className = "w-4 h-4" }) {
  // Simple inline external-link icon (no extra deps)
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "SmartCart",
      desc:
        "An intelligent shopping assistant that tracks items, estimates total cost, and suggests discounts in real time. Built with React, Node.js, Express, MongoDB, and AWS.",
      image: "/projects/smartcart.jpg",
      link: "https://github.com/AyomideAwonaya21/SmartCart",
    },
    {
      title: "EDI Translator / Validator",
      desc:
        "A web tool that converts and validates EDI X12 transactions (850, 810) into JSON. Built with Python, FastAPI, and React for efficient parsing and validation workflows.",
      image: "/projects/edi.jpg",
      link: "https://github.com/AyomideAwonaya21/edi-translator",
    },
    {
      title: "Habitly Tracker",
      desc:
        "A full-stack habit tracking system built with Java, Spring Boot, Angular, MySQL, JWT, and AWS. Manage habits, visualize streaks, and stay accountable through analytics.",
      image: "/projects/habitly.jpg",
      link: "https://github.com/AyomideAwonaya21/habitly-tracker",
    },
    {
      title: "Personality Pet Finder",
      desc:
        "A personality-based pet matching app using React, GeoAPIfy, and the Petfinder API. Helps users discover adoptable pets aligned with their personality traits.",
      image: "/projects/petfinder.jpg",
      link: "https://ayomideawonaya21.github.io/The-Ultimate-Personality-Pet-Finder/",
    },
    {
      title: "Weather Dashboard",
      desc:
        "A dynamic weather dashboard using JavaScript and the OpenWeather API. Delivers real-time conditions and 7-day forecasts based on user location.",
      image: "/projects/weather.jpg",
      link: "https://ayomideawonaya21.github.io/weather-dashboard/",
    },
  ];

  return (
    <main className="py-20 px-4 max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10"
      >
        Selected Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white/60 dark:bg-white/5"
          >
            {/* Clickable image */}
            <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`}>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
            </a>

            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {p.desc}
              </p>

              {/* Optional text link for clarity/accessibility */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition text-sm font-medium"
              >
                <ExternalIcon />
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
