// components/sections/Hobbies.tsx

"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { CameraIcon, ChatBubbleOvalLeftEllipsisIcon, FireIcon } from '@heroicons/react/24/outline'; 

// Componente gestiona un array de imágenes 
function Carousel() {
  const images: string[] = [
    '/carrusel_1.png',
    '/carrusel_2.jpg',
    '/carrusel_3.jpg',
    '/carrusel_4.jpg',
    '/carrusel_5.jpg',
    '/carrusel_6.jpg',
  ];

  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const threshold = 50; 

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) return;
    const dx = touchCurrentX.current - touchStartX.current;
    if (Math.abs(dx) > threshold) {
      if (dx < 0) next(); else prev();
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div
        className="w-full overflow-hidden rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image src={images[index]} alt={`Carrusel imagen ${index + 1}`} width={900} height={600} className="w-full h-auto object-cover" />
      </div>


      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
      >
        ›
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
}

const Hobbies: React.FC = () => {
  const { t } = useLanguage();

  // Comentario: Lista de hobbies 
  const hobbyList = [
    { icon: <CameraIcon className="w-8 h-8 " />, title: t.hobby1Title },
    { icon: <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 " />, title: t.hobby2Title },
    { icon: <FireIcon className="w-8 h-8 " />, title: t.hobby3Title },
  ];


  return (
    <section id="off-work" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hgroup className="text-center mb-12">
          <h2 className="text-3xl font-extrabold  pb-2 inline-block">
            {t.hobbiesTitle} {/* Un poco de mi fuera de una maquina */}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t.hobbiesSubtitle} {/* Mi lado humano. Porque aunque soy ingeniero... */}
          </p>
        </hgroup>
        
        {/* Carrusel después del título */}
        <div className="w-full flex flex-col items-center mb-8">
          {/* Estructura de datos del carrusel - puedes añadir más rutas en el array */}
          {/* La primera imagen será '/carrusel_1.png' */}
          {/* Dejo espacio para otras imágenes: '/carrusel_2.png', '/carrusel_3.png' */}
          {/* Si no existen, Next/Image dará error en build; asegúrate de añadir los archivos en public/ */}
          <Carousel />
        </div>

        {/* Texto y lista de hobbies debajo del carrusel */}
        <article className="space-y-6 text-lg leading-relaxed">
          <p>
            {t.hobbiesText1} {/* Me gusta desconectarme para reconectarme... */}
          </p>
          
          <p>
            {t.hobbiesText2} {/* Esos espacios me ayudan a pensar mejor... */}
          </p>
          
          <p className="font-semibold  dark:text-indigo-400">
            {t.hobbiesText3} {/* Porque al final, programamos para personas... */}
          </p>

          {/* Lista hobbies */}
          <menu className="flex flex-wrap gap-4 pt-4">
            {hobbyList.map((hobby, index) => (
              <li key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                {/* Icono */}
                {hobby.icon}
                {/* Descripción del hobby */}
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {hobby.title}
                </span>
              </li>
            ))}
          </menu>
        </article>
      </div>
    </section>
  );
};

export default Hobbies;