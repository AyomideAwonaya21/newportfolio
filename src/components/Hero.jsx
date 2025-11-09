import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* premium, subtle depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-28 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col-reverse items-center gap-10 px-5 py-16 md:min-h-screen md:flex-row md:gap-14 md:px-12 lg:px-16">
        {/* Left — headline, bio, single CTA */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ayomide Awonaya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-xl text-white/90"
          >
            I design and ship fast, resilient software.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 max-w-2xl text-sm/6 text-white/75 md:text-[15px]"
          >
            Frontend that feels effortless. Backends that don’t break. I care about clear UX,
            tight APIs, and performance that shows up in metrics. Recent work spans React/Next,
            Node/Java/Python services, and AWS/Docker deployments.
          </motion.p>

          {/* Single decisive CTA */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8"
          >
            <Link to="/projects" aria-label="View my projects">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_28px_-10px_rgba(16,185,129,.9)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-12px_rgba(16,185,129,1)]">
                View My Work →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right — tighter portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400/25 via-cyan-400/20 to-transparent blur-xl" />
            <img
              src="/Ayomide.jpg"
              alt="Ayomide Awonaya"
              className="relative h-24 w-24 rounded-full object-cover shadow-lg ring-1 ring-white/20 sm:h-28 sm:w-28 md:h-32 md:w-32"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
