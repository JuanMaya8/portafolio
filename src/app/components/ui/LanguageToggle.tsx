// components/ui/LanguageToggle.tsx

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Comentario: Componente funcional para alternar el idioma
const LanguageToggle: React.FC = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    // Comentario: Usa un <button> para el toggle
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language between English and Spanish"
      // Comentario: Estilos responsivos y de Dark Mode
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold transition-colors duration-300"
    >
      {/* Comentario: Muestra el idioma actual */}
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;