import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Soft gradient backdrop for premium depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-10 px-5 py-16 md:min-h-screen md:flex-row md:gap-12 md:px-12 lg:px-16">
        {/* Left: headline, intro, and buttons */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi 👋 I’m <span className="text-emerald-400">Ayomide Awonaya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-xl font-semibold text-white/90"
          >
            Software Engineer — Frontend&nbsp;/&nbsp;Backend
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-balance text-sm/6 text-white/80 md:text-[15px]"
          >
            I design and build <span className="text-emerald-400">reliable, fast, and elegant</span> products end-to-end:
            React/Next on the front, Node/Java/Python APIs on the back, and AWS/Docker for scalable delivery.
            I focus on clarity, performance, and measurable impact.
          </motion.p>

          {/* Role chips */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {["React • Next.js", "Node • FastAPI", "Java • Spring", "AWS • Docker"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            {/* Projects Button */}
            <Link to="/projects" aria-label="View my projects">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_20px_-8px_rgba(16,185,129,.8)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(16,185,129,.9)]">
                View My Work →
              </span>
            </Link>

            {/* Resume Button (uses your existing filename) */}
            <a
              href="/Ayomide_awonaya%20softwareengineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/0 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              aria-label="Download resume"
            >
              Download Résumé
            </a>

            {/* Contact Button */}
            <Link to="/contact" aria-label="Contact me">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-500/20">
                Contact
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            {/* subtle glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400/30 via-cyan-400/30 to-transparent blur-xl" />
            <img
              src="/Ayomide.jpg"
              alt="Ayomide Awonaya"
              className="relative h-28 w-28 rounded-full object-cover shadow-lg ring-1 ring-white/20 sm:h-32 sm:w-32 md:h-40 md:w-40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
