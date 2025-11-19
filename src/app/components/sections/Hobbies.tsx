// components/sections/Hobbies.tsx

"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

function Carousel() {
  const images: string[] = [
    '/carrusel_1.png',
    '/carrusel_2.jpg',
    '/carrusel_3.jpg',
    '/carrusel_4.jpg',
    '/carrusel_5.jpg',
    '/carrusel_6.jpg',
    '/carrusel_7.jpg',
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const threshold = 50;

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };

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
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div
        className="w-full overflow-hidden rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Image src={images[index]} alt={`Carrusel imagen ${index + 1}`} width={600} height={300} className="w-full h-auto object-cover" />
          </motion.div>
        </AnimatePresence>
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
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
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

  return (
    <section id="off-work" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hgroup className="text-center mb-12">
          <h2 className="text-3xl font-extrabold pb-2 inline-block">
            {t.hobbiesTitle}
          </h2>
        </hgroup>

        {/* Carrusel después del título */}
        <div className="w-full flex flex-col items-center mb-12">
          <Carousel />
        </div>

        {/* Texto debajo del carrusel */}
        <article className="space-y-6 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <p>{t.hobbiesSubtitle}</p>
          <p>{t.hobbiesText1}</p>
          <p>{t.hobbiesText2}</p>
          <p className="font-semibold dark:text-indigo-400">{t.hobbiesText3}</p>
        </article>
      </div>
    </section>
  );
};

export default Hobbies;
