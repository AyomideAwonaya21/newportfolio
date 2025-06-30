import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-20 text-center md:text-left bg-black text-white">
      <div className="flex-1 mb-10 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Hi 👋,<br />
          I'm <span className="text-accent">Ayomide Awonaya</span><br />
          and I’m a <span className="text-accent">Software Developer</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-xl md:text-2xl mb-8 max-w-xl"
        >
          I build seamless, responsive user interfaces and scalable, high-performance applications that help businesses grow.
        </motion.h2>

        <Link to="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-accent text-black rounded-full hover:opacity-90 transition"
          >
            View My Work
          </motion.button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/Ayomide.jpg"
          alt="Ayomide Awonaya"
          className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover shadow-lg max-w-[80px] md:max-w-[112px]"
        />
      </motion.div>
    </section>
  );
}
