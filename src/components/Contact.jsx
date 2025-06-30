import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="py-20 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        Let’s Talk
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 text-lg"
      >
        Interested in working together or have an idea you’d like to discuss? I’d love to hear from you.
      </motion.p>

      <motion.a
        href="mailto:ayomideawonaya@gmail.com"
        whileHover={{ scale: 1.05 }}
        className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
      >
        Say Hello
      </motion.a>
    </main>
  );
}
