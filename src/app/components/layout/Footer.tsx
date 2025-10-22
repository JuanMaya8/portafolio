// components/layout/Footer.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    // Comentario: Usa <footer> como etiqueta semántica
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Comentario: Usa <section> para la información de contacto [cite: 36, 37, 38] */}
        <section id="contact" className="mb-4">
          <hgroup>
            <h3 className="text-xl font-bold mb-2">{t.contact}</h3> 
            <p className="text-sm">
              {t.email}: <a href="mailto:Banmayatuamese@gmail.com" className="text-indigo-400 hover:text-indigo-300">Banmayatuamese@gmail.com</a>
            </p>
          </hgroup>
        </section>
        
        {/* Comentario: Enlaces de Redes Sociales (Wireframe) */}
        <figure className="flex justify-center space-x-4">
          {/* Comentario: LinkedIn (Icono simulado) */}
          <a href="#" aria-label="LinkedIn" className="text-xl hover:text-indigo-400 transition-colors">
            🔗 (in)
          </a>
          {/* Comentario: Otro Icono (Simulado) [cite: 40] */}
          <a href="#" aria-label="Other Social Media" className="text-xl hover:text-indigo-400 transition-colors">
            08
          </a>
        </figure>
        
        {/* Comentario: Información de Copyright */}
        <p className="mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {t.portfolio}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;