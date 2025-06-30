import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center px-8 py-4 border-b">
      <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-lg font-medium">
        <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
        <li><Link to="/skills" className="hover:text-accent transition">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-accent transition">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
        <li><Link to="/resume" className="hover:text-accent transition">Resume</Link></li>
      </ul>
    </nav>
  );
}
