"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section
      id="contact"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderBottom: "4px solid var(--gray-500)",
      }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-3xl font-extrabold text-center mb-6 pb-2"
        >
          {t.contact}
        </h2>

        <div
          style={{
            background: "var(--gray-100)",
            color: "var(--foreground)",
            boxShadow: "0 10px 25px var(--gray-400)",
          }}
          className="p-8 rounded-xl text-center"
        >
          <p style={{ color: "var(--foreground)" }} className="text-lg mb-4">
            {lang === 'es' ? 'Puedes contactarme en:' : 'You can reach me at:'}
          </p>
          <div className="space-y-4">
            <a
              href="mailto:juanmayabusiness@gmail.com"
              style={{ color: "var(--indigo-500)" }}
              className="block font-medium text-xl break-words hover:opacity-80 transition-opacity"
            >
              juanmayabusiness@gmail.com
            </a>
            <div style={{ borderTop: "1px solid var(--gray-400)" }} className="pt-4">
              <p style={{ color: "var(--foreground)" }} className="text-lg mb-2">
                {lang === 'es' ? 'También por LinkedIn:' : 'Also on LinkedIn:'}
              </p>
              <a
                href="https://www.linkedin.com/in/juan-david-maya-906530381/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--indigo-500)" }}
                className="font-medium text-xl break-words hover:opacity-80 transition-opacity"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
