"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  const backgroundLight = "linear-gradient(180deg, #f8d1e0 0%, #e6d3f7 100%)";
  const backgroundDark = "var(--background)";

  return (
    <main
      id="home"
      className="pt-16 transition-colors duration-300"
      style={{ background: isDark ? backgroundDark : backgroundLight }}
    >
      {/* SECCIÓN 1 */}
      <section
        className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 border-b-4 border-[var(--foreground)]"
        style={{ background: isDark ? "var(--background)" : "#f8d1e0" }}
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
        <div className="max-w-7xl mx-auto grid gap-12 items-center md:grid-cols-2">
          <article className="order-2 md:order-1 text-center md:text-left">
            <hgroup>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 ${
                  !isDark ? "text-black" : "text-[var(--foreground)]"
                }`}
              >
                {t.heroTitle}
              </h1>
              <p className={`text-xl sm:text-2xl ${!isDark ? "text-black" : ""}`}>{t.heroSubtitle}</p>
            </hgroup>
            <a
              href="https://drive.google.com/uc?export=download&id=1qfuo2L1JccsY1uJ7C7iwJlp0mcYfpl8b"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-md transition"
              download
            >
              Descargar CV
            </a>
          </article>

          <figure className="order-1 md:order-2 relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/dos_abajo.png"
              alt="Imagen junto al texto"
              fill
              className="object-cover rounded-lg shadow-xl shadow-indigo-500/30"
              priority
            />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Hero;
