import React from 'react';

export default function Resume() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>

      {/* Embedded PDF */}
      <div className="mb-8">
        <iframe
          src="/AyomideAwonaya%20softwareengineering.pdf"
          width="100%"
          height="800px"
          title="Ayomide Awonaya Resume"
          className="border shadow"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/AyomideAwonaya%20softwareengineering.pdf"
        download
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
