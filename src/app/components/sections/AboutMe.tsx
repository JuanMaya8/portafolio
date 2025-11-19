"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

// Sección "Quien soy"
const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="who-am-i"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderBottom: "4px solid var(--gray-500)",
      }}
      className="py-20"
    >
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-3xl font-extrabold text-center mb-12 pb-2"
        >
          {t.aboutTitle} {/* Quien soy */}
        </h2>

        <article className="space-y-6 text-lg leading-relaxed">
          {/* Párrafo 1 */}
          <p style={{ color: "var(--foreground)" }}>
            {t.aboutText1}
          </p>
          {/* Párrafo 2 (Cita) */}
          <blockquote
            style={{
              borderLeft: "4px solid var(--gray-400)",
              color: "var(--gray-300)",
            }}
            className="pl-4 italic"
          >
            {t.aboutText2}
          </blockquote>
        </article>

        {/* Sección de imágenes con orden responsive */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:order-2 flex justify-center">
            <Image
              src="/manos_arriba.png"
              alt="Ilustración de manos arriba"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: "0 10px 15px var(--gray-500)" }}
            />
          </div>

          <div className="md:order-3 flex justify-center">
            <Image
              src="/yo_2.png"
              alt="Segunda ilustración personal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: "0 10px 15px var(--gray-500)" }}
            />
          </div>

          <div className="md:order-1 flex justify-center">
            <Image
              src="/yo_1.png"
              alt="Primera ilustración personal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: "0 10px 15px var(--gray-500)" }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
