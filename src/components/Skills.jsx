import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'C',
    'C++',
    'React',
    'Angular',
    'Vue.js',
    'Next.js',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Node.js',
    'Express',
    'GraphQL',
    'Prisma',
    'FastAPI',
    'Flask',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Jest',
    'Vitest',
    'Power BI',
    'Tableau'
  ];

  return (
    <main className="py-20 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        My Toolbox & Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12 text-lg max-w-2xl mx-auto"
      >
        A snapshot of the languages, frameworks, and tools I use to design,
        build, and deliver clean, high-performance applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white text-black px-4 py-2 rounded shadow hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </main>
  );
}
