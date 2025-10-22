"use client";

// context/ThemeContext.tsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// Comentario: Interfaz para el estado del contexto del tema
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Comentario: Creamos el contexto con valores por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Comentario: Hook para usar el contexto de tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Comentario: Componente proveedor del tema
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Comentario: Estado inicial, lee de localStorage si existe
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Comentario: Busca el tema guardado al cargar la página
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Comentario: Aplica la clase 'dark' a la etiqueta <html> y guarda en localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Comentario: Función para cambiar entre 'light' y 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};