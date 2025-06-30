import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <main className="py-20 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Selected Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-2">Habitly Tracker</h3>
          <p className="mb-4">
            A full-stack habit tracker built with Java, Spring Boot, Angular,
            MySQL, JWT, and AWS. Manage personal goals with secure auth and an
            intuitive dashboard.
          </p>
          <a
            href="https://github.com/AyomideAwonaya21/habitly-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Project
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-2">Pet Finder App</h3>
          <p className="mb-4">
            A responsive web app using React, GeoAPIfy, and the Petfinder API.
            Find pets in real-time, filtered by location, with a smooth UX.
          </p>
          <a
            href="https://ayomideawonaya21.github.io/The-Ultimate-Personality-Pet-Finder/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Project
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-2">Weather Dashboard</h3>
          <p className="mb-4">
            A real-time weather dashboard built with JavaScript and the Open
            Weather API. Delivers dynamic forecasts based on user input.
          </p>
          <a
            href="https://ayomideawonaya21.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Project
          </a>
        </motion.div>
      </div>
    </main>
  );
}
