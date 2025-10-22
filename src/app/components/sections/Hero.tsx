// components/sections/Hero.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    // Comentario: Usa <main> para el contenido principal y la ID 'home' para navegación
    <main id="home" className="pt-16 min-h-screen flex items-center bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Comentario: Lado de Texto */}
        <article className="order-2 md:order-1">
          {/* Comentario: Usa <h1> para el título principal y <hgroup> para agrupar [cite: 5] */}
          <hgroup>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              {t.heroTitle} 
            </h1>
            {/* Comentario: Usa <p> para la descripción [cite: 6] */}
            <p className="text-xl sm:text-2xl  dark:text-indigo-400">
              {t.heroSubtitle} 
            </p>
          </hgroup>
        </article>
        
        {/* Comentario: Lado de Imagen (Wireframe) */}
        <figure className="order-1 md:order-2 flex justify-center items-center">
          {/* Imagen del autor: reemplaza el wireframe por la imagen en public/dos_abajo.png */}
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
    </main>
  );
};

export default Hero;