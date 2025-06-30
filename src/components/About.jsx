import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="py-20 px-4 max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg leading-relaxed"
      >
        I’m Ayomide, a passionate software engineer with a strong foundation in
        full-stack development. I specialize in building seamless, responsive
        user interfaces and scalable back-end systems. I enjoy turning complex
        ideas into elegant, high-performance applications.
      </motion.p>
    </main>
  );
}
