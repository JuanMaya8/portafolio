"use client";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";
import HamburgerMenu from "../ui/HamburgerMenu";

interface NavItem {
  name: string;
  id: string;
}

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: t.home, id: "home" },
    { name: t.whoAmI, id: "who-am-i" },
    { name: t.projects, id: "projects" },
    { name: t.offWork, id: "off-work" },
    { name: t.riskIt, id: "risk-it" },
    { name: t.testimonials, id: "testimonials" },
    { name: t.contact, id: "contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-2xl font-bold transition-opacity hover:opacity-80"
            style={{ color: "var(--foreground)" }}
          >
            {t.portfolio}
          </a>

          {/* MENU DESKTOP */}
          <menu className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <ThemeToggle />
            </li>
            <li>
              <LanguageToggle />
            </li>
          </menu>

          {/* MENU MOBILE */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
              className="p-2 rounded-md transition-opacity hover:opacity-70"
              style={{ color: "var(--foreground)" }}
            >
              <HamburgerMenu isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <section
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <menu className="flex flex-col space-y-2 py-4 px-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block p-2 rounded-md transition-opacity hover:opacity-70"
                style={{ color: "var(--foreground)" }}
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
