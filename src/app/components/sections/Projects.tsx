"use client";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Interfaz para los proyectos
interface Project {
  name: string;
  image: string;
  link: string;
}

// Lista de proyectos (previsualizaciones y links)
const projectList: Project[] = [
  {
    name: "Project 1",
    image: "/proyecto_1.png",
    link: "https://maps-nine-pearl.vercel.app/",
  },
  {
    name: "Project 2",
    image: "/proyecto_2.png",
    link: "https://responsive-taller-five.vercel.app/",
  },
  {
    name: "Project 3",
    image: "/proyecto_3.png",
    link: "https://shoppasto-microservices.vercel.app/",
  },
  {
    name: "Project 4",
    image: "/proyecto_4.png",
    link: "https://boleto-disenooo.vercel.app/",
  },
  {
    name: "Project 5",
    image: "/proyecto_5.png",
    link: "https://diseno-taller7-brfm.vercel.app/",
  },
];

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Avanzar al siguiente proyecto
  const next = () =>
    setCurrent((prev) => (prev + 1) % projectList.length);

  // Volver al anterior
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projectList.length) % projectList.length);

  return (
    <section
      id="projects"
      className="py-20 bg-pink-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative overflow-x-hidden border-b-4 border-black dark:border-white"
    >
      <div className="max-w-2xl mx-auto px-2 lg:px-0 flex flex-col items-center">
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-center mb-8 pb-2 text-gray-900 dark:text-gray-100">
          {t.projectsTitle}
        </h2>
        {/* Avatares laterales en desktop */}
        <img
          src="/mano_derecha.png"
          alt="Left avatar"
          className="hidden md:block absolute left-0 bottom-8 md:bottom-24 w-100 opacity-80 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <img
          src="/mano_izquierda.png"
          alt="Right avatar"
          className="hidden md:block absolute right-0 bottom-8 md:bottom-24 w-100 opacity-80 pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* Televisor marco con imagen de proyecto ajustada detrás */}
        <div className="relative flex items-center justify-center w-full max-w-lg mx-auto" style={{height: "380px"}}>
          {/* Flecha izquierda */}
          <button
            aria-label="Previous project"
            onClick={prev}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-transparent flex items-center justify-center z-30"
          >
            <span className="bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-lg text-3xl md:text-4xl hover:bg-gray-400 dark:hover:bg-gray-600 transition">
              ←
            </span>
          </button>
          {/* Imagen de previsualización ABSOLUTA detrás del televisor */}
          <div
            className="absolute left-1/2 top-[16.5%] w-[69%] h-[66%] transform -translate-x-1/2 z-10 flex items-center justify-center overflow-hidden"
            style={{ pointerEvents: "none", borderRadius: "8px", background: "transparent" }}
          >
            <img
              src={projectList[current].image}
              alt={projectList[current].name}
              className="w-full h-full object-cover"
              style={{ borderRadius: "8px" }}
            />
          </div>
          {/* Televisor marco ENCIMA de la imagen */}
          <img
            src="/televisor.png"
            alt="TV Frame"
            className="w-full object-contain relative z-20 pointer-events-none"
            style={{ maxWidth: "500px" }}
          />
          {/* Flecha derecha */}
          <button
            aria-label="Next project"
            onClick={next}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-transparent flex items-center justify-center z-30"
          >
            <span className="bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-lg text-3xl md:text-4xl hover:bg-gray-400 dark:hover:bg-gray-600 transition">
              →
            </span>
          </button>
        </div>

        {/* Botón principal para ir al link */}
        <a
          href={projectList[current].link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black mt-4 mb-6 w-36 text-center hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
        >
          {t.clickMe}
        </a>

        {/* Tecnologías SVG, adaptativo en grid */}
        <div className="grid grid-cols-5 md:grid-cols-8 gap-2 items-center justify-items-center w-full max-w-xl mx-auto mt-2 md:mt-4 mb-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <img
              key={i}
              src={`/tecnologia_${i + 1}.svg`}
              alt={`Technology ${i + 1}`}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          ))}
        </div>

        {/* Avatares móviles con menor opacidad y detrás del texto */}
        <div className="md:hidden flex justify-between items-center w-full mt-2 relative z-0">
          <img
            src="/mano_izquierda.png"
            alt="Left avatar mobile"
            className="w-20 opacity-70 mr-4"
          />
          <img
            src="/mano_derecha.png"
            alt="Right avatar mobile"
            className="w-20 opacity-70 ml-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
