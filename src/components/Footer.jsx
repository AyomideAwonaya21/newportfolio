import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm border-t">
      <p>
        &copy; {new Date().getFullYear()} Ayomide David Awonaya. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/AyomideAwonaya21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/-ayomide-awonaya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
