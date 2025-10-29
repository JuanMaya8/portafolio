// components/sections/AboutMe.tsx

"use client";
import React from 'react';
import Image from 'next/image';
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
        
        {/* Sección de imágenes con orden responsive */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* En mobile: segunda imagen */}
          <div className="md:order-2 flex justify-center">
            <Image
              src="/manos_arriba.png"
              alt="Ilustración de manos arriba"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* En mobile: tercera imagen */}
          <div className="md:order-3 flex justify-center">
            <Image
              src="/yo_2.png"
              alt="Segunda ilustración personal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* En mobile: primera imagen */}
          <div className="md:order-1 flex justify-center">
            <Image
              src="/yo_1.png"
              alt="Primera ilustración personal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;