// components/layout/Footer.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/*  Enlaces de Redes Sociales (Wireframe) */}
        <figure className="flex justify-center items-center space-x-4">
          <a href="#" aria-label="LinkedIn" className="text-xl hover:text-indigo-400 transition-colors flex items-center gap-2">
            🔗 (in)
          </a>

          {/* Enlace de correo junto a LinkedIn */}
          <a href="mailto:juanmayabusiness@gmail.com" aria-label="Enviar correo" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2">
            ✉️
            <span className="hidden sm:inline">juanmayabusiness@gmail.com</span>
          </a>

          <a href="#" aria-label="Other Social Media" className="text-xl hover:text-indigo-400 transition-colors">
            08
          </a>
        </figure>
        
        <p className="mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {t.portfolio}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;