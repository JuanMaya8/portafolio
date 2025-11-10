// components/layout/Header.tsx

"use client";
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';
import ThemeToggle from '../ui/ThemeToggle';
import HamburgerMenu from '../ui/HamburgerMenu';

// Interfaz para los elementos de navegación
interface NavItem {
  name: string;
  id: string;
}

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Array de elementos de navegación'
  const navItems: NavItem[] = [
    { name: t.home, id: 'home' },
    { name: t.whoAmI, id: 'who-am-i' },
    { name: t.projects, id: 'projects' },
    { name: t.offWork, id: 'off-work' },
    { name: t.riskIt, id: 'risk-it' },
    { name: t.testimonials, id: 'testimonials' }, 
    { name: t.contact, id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
            {t.portfolio}
          </a>

          <menu className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li><ThemeToggle /></li>
            <li><LanguageToggle /></li>
          </menu>

          {/* Botón de Menú Hamburguesa (Mobile) */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
              className="p-2 rounded-md text-gray-900 dark:text-white"
            >
              <HamburgerMenu isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      <section
        className={`md:hidden absolute w-full bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <menu className="flex flex-col space-y-2 py-4 px-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} 
                className="block text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
              >
                {item.name}
              </a>
            </li>
          ))}
        </menu>
      </section>
    </header>
  );
};

export default Header;