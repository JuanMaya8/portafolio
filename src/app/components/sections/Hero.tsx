// components/sections/Hero.tsx

"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main
      id="home"
      className="pt-16 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      {/* SECCIÓN 1: Animación de la Cabeza */}
      <section
        className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 
        border-b-4 border-[var(--foreground)]"
      >
        <Image
          src="/animation.gif"
          alt="JDMB animated head illustration"
          width={500}
          height={500}
          unoptimized={true}
          className="object-contain max-w-full h-auto rounded-full 
          shadow-2xl shadow-indigo-500/40"
          priority
        />
      </section>

      {/* SECCIÓN 2: Contenido Secundario */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--background)] 
        border-b-4 border-[var(--foreground)] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <article className="order-1 md:order-1">
            <hgroup>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                {t.heroTitle}
              </h1>

              {/* Mantengo color particular del subtítulo (azulado suave) */}
              <p className="text-xl sm:text-2xl ">
                {t.heroSubtitle}
              </p>
            </hgroup>
          </article>

          {/* Imagen lateral */}
          <figure className="order-2 md:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/dos_abajo.png"
                alt="Imagen de perfil"
                fill
                className="object-cover rounded-lg shadow-xl shadow-indigo-500/30"
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
