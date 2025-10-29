// components/sections/Hero.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main id="home" className="pt-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      
      {/* SECCIÓN 1: Animación de la Cabeza */}
      <section className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 border-b-4 border-black dark:border-white">
        <Image
          src="/animation.gif"
          alt="JDMB animated head illustration"
          width={500} 
          height={500} 
          unoptimized={true} 
          className="object-contain max-w-full h-auto shadow-2xl shadow-indigo-500/50 dark:shadow-indigo-400/70 rounded-full" 
          priority 
        />
      </section>

      {/* SECCIÓN 2: Contenido Secundario  */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b-4 border-black dark:border-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <article className="order-1 md:order-1">
            <hgroup>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                {t.heroTitle} 
              </h1>
              <p className="text-xl sm:text-2xl dark:text-indigo-400">
                {t.heroSubtitle} 
              </p>
            </hgroup>
          </article>
          
          {/* Lado de la otra imagen (dos_abajo.png) */}
          <figure className="order-2 md:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/dos_abajo.png"
                alt="Imagen de perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Hero;