// components/ui/ThemeToggle.tsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';
// Comentario: Se asume que @heroicons/react está instalado
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; 

// Comentario: Componente funcional para alternar el tema
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // Comentario: Usa un <button> para el toggle
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light theme"
      // Comentario: Estilos responsivos y de Dark Mode
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      {/* Comentario: Muestra el icono según el tema actual */}
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6" /> // Icono de luna para cambiar a Dark
      ) : (
        <SunIcon className="w-6 h-6" /> // Icono de sol para cambiar a Light
      )}
    </button>
  );
};

export default ThemeToggle;