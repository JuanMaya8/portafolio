"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const WhyMe: React.FC = () => {
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

  // Colores para modo claro personalizado
  const backgroundLight = "#f5f0fa"; // tono lila pastel claro para modo claro
  const borderColorLight = "#b9aee8";

  return (
    <section
      id="risk-it"
      className="py-20"
      style={{
        background: isDark ? "var(--background)" : backgroundLight,
        color: isDark ? "var(--foreground)" : "#3c2a6d",
        borderBottom: isDark ? "4px solid var(--gray-500)" : `4px solid ${borderColorLight}`,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          style={{ color: isDark ? "var(--foreground)" : "#2f1f56" }}
          className="text-3xl font-extrabold text-center mb-12 pb-2"
        >
          {t.whyMeTitle}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <article
            className="space-y-6 text-lg leading-relaxed flex-1"
            style={{ color: isDark ? "var(--foreground-dark)" : "#4a3c72" }}
          >
            <p>{t.whyMeText1}</p>
            <p>{t.whyMeText2}</p>
            <p>{t.whyMeText3}</p>
            <p>{t.whyMeText4}</p>
            <p>{t.whyMeText5}</p>
          </article>

          <div className="lg:w-1/3 flex-shrink-0">
            <div className="sticky top-24 w-full">
              <Image
                src="/Apuntando_una_abajo.png"
                alt="Ilustración apuntando hacia abajo"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
