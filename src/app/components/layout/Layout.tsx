// components/layout/Layout.tsx

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import Header from './Header';
import Footer from './Footer';

// Interfaz para las props del Layout
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Envuelve con el contexto de Tema y de Idioma
    <ThemeProvider>
      <LanguageProvider>
        {/* La clase del cuerpo para el tema se maneja en el ThemeContext */}
        <div className="min-h-screen antialiased">
          <Header />
          {/* Contenido de la página (Hero, About, Projects, etc.) */}
          {children}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Layout;