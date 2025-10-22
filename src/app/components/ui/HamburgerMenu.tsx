// components/ui/HamburgerMenu.tsx

import React from 'react';

// Comentario: Interfaz para las props
interface HamburgerMenuProps {
  isOpen: boolean;
}

// Comentario: Icono de hamburguesa animado
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen }) => (
  // Comentario: Usa <svg> para el icono
  <svg
    className="w-6 h-6"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    {/* Comentario: Línea superior: se convierte en X al abrir */}
    <path
      d={isOpen ? "M6 18L18 6" : "M4 6h16"}
      className="transition-transform duration-300"
    />
    {/* Comentario: Línea media: se oculta al abrir */}
    <path
      d="M4 12h16"
      className={`${
        isOpen ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300`}
    />
    {/* Comentario: Línea inferior: se convierte en X al abrir */}
    <path
      d={isOpen ? "M6 6l12 12" : "M4 18h16"}
      className="transition-transform duration-300"
    />
  </svg>
);

export default HamburgerMenu;