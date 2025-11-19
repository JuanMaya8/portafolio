"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  // Colores para modo claro personalizados
  const backgroundLight = "#f9fafb"; // muy claro, casi blanco
  const boxShadowLight = "0 10px 25px #d1d5db"; // sombra gris suave
  const textLight = "#1f2937"; // texto gris oscuro
  const linkLight = "#4f46e5"; // azul para enlaces

  return (
    <section
      id="contact"
      style={{
        background: isDark ? "var(--background)" : backgroundLight,
        color: isDark ? "var(--foreground)" : textLight,
        borderBottom: isDark ? "4px solid var(--gray-500)" : "4px solid #9ca3af",
      }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          style={{ color: isDark ? "var(--foreground)" : textLight }}
          className="text-3xl font-extrabold text-center mb-6 pb-2"
        >
          {t.contact}
        </h2>

        <div
          style={{
            background: isDark ? "var(--gray-800)" : "var(--gray-100)",
            color: isDark ? "var(--foreground)" : textLight,
            boxShadow: isDark ? "0 10px 25px var(--gray-400)" : boxShadowLight,
          }}
          className="p-8 rounded-xl text-center"
        >
          <p style={{ color: isDark ? "var(--foreground)" : textLight }} className="text-lg mb-4">
            {lang === 'es' ? 'Puedes contactarme en:' : 'You can reach me at:'}
          </p>
          <div className="space-y-4">
            <a
              href="mailto:juanmayabusiness@gmail.com"
              style={{ color: isDark ? "var(--indigo-500)" : linkLight }}
              className="block font-medium text-xl break-words hover:opacity-80 transition-opacity"
            >
              juanmayabusiness@gmail.com
            </a>
            <div style={{ borderTop: isDark ? "1px solid var(--gray-400)" : "1px solid #d1d5db" }} className="pt-4">
              <p style={{ color: isDark ? "var(--foreground)" : textLight }} className="text-lg mb-2">
                {lang === 'es' ? 'También por LinkedIn:' : 'Also on LinkedIn:'}
              </p>
              <a
                href="https://www.linkedin.com/in/juan-david-maya-906530381/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: isDark ? "var(--indigo-500)" : linkLight }}
                className="font-medium text-xl break-words hover:opacity-80 transition-opacity"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
