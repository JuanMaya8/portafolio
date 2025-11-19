// components/sections/Hero.tsx

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según clase dark en html
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Establecer estado inicial
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const backgroundLight = "linear-gradient(180deg, #f8d1e0 0%, #e6d3f7 100%)";
  const backgroundDark = "var(--background)";

  return (
    <main
      id="home"
      className="pt-16 text-[var(--foreground)] transition-colors duration-300"
      style={{
        background: isDark ? backgroundDark : backgroundLight,
      }}
    >
      {/* SECCIÓN 1 */}
      <section
        className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 border-b-4 border-[var(--foreground)]"
        style={{
          background: isDark ? "var(--background)" : "#f8d1e0",
        }}
      >
        <Image
          src="/animation.gif"
          alt="JDMB animated head illustration"
          width={500}
          height={500}
          unoptimized={true}
          className="object-contain max-w-full h-auto rounded-full shadow-2xl shadow-indigo-500/40"
          priority
        />
      </section>

      {/* SECCIÓN 2 */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-[var(--foreground)] transition-colors duration-300"
        style={{ background: isDark ? "var(--background)" : "#e6d3f7" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <article className="order-1 md:order-1">
            <hgroup>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                {t.heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl ">{t.heroSubtitle}</p>
            </hgroup>
          </article>
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
