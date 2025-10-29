// components/sections/AboutMe.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Sección "Quien soy"
const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="who-am-i" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b-4 border-black dark:border-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 border-b-2  pb-2">
          {t.aboutTitle} {/* Quien soy */}
        </h2>
        
        <article className="space-y-6 text-lg leading-relaxed">
          {/* Párrafo 1 */}
          <p>
            {t.aboutText1} {/* Soy un futuro ingeniero de software que tiene muchas expectativas... */}
          </p>
          {/* Párrafo 2 (Cita) */}
          <blockquote className="border-l-4  pl-4 italic text-gray-600 dark:text-gray-300">
            {t.aboutText2} {/* Me motiva entender cómo funcionan las cosas y mejorar lo que ya existe. */}
          </blockquote>
        </article>
        
        {/* Sección para la imagen de habilidades*/}
        <figure className="mt-12 flex justify-center">
          <span
            aria-label="Placeholder for diagram or skills chart"
            className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-4xl text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-400 dark:border-gray-500"
          >
            📊
          </span>
        </figure>
      </section>
    </section>
  );
};

export default AboutMe;