"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

// Interfaz para los proyectos
interface Project {
  name: string;
  image: string;
  link: string;
}

// Lista de proyectos
const projectList: Project[] = [
  { name: "Project 1", image: "/proyecto_1.png", link: "https://maps-nine-pearl.vercel.app/" },
  { name: "Project 2", image: "/proyecto_2.png", link: "https://responsive-taller-five.vercel.app/" },
  { name: "Project 3", image: "/proyecto_3.png", link: "https://shoppasto-microservices.vercel.app/" },
  { name: "Project 4", image: "/proyecto_4.png", link: "https://boleto-disenooo.vercel.app/" },
  { name: "Project 5", image: "/proyecto_5.png", link: "https://diseno-taller7-brfm.vercel.app/" },
];

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % projectList.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projectList.length) % projectList.length);

  const backgroundColor = isDark ? "#18181b" : "#f8d1e0";
  const textColor = isDark ? "#f4f4f5" : "#3a2d36";
  const accentColor = isDark ? "#6366f1" : "#1a1a1a";
  const borderColor = isDark ? "#444" : "#e9b5c8";

  return (
    <section
      id="projects"
      className="py-20 relative overflow-x-hidden border-b-4"
      style={{ background: backgroundColor, color: textColor, borderColor }}
    >
      <div className="max-w-2xl mx-auto px-2 lg:px-0 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-center mb-8 pb-2" style={{ color: textColor }}>
          {t.projectsTitle}
        </h2>

        {/* Avatares laterales */}
        <img
          src="/mano_derecha.png"
          alt="Left avatar"
          className="hidden md:block absolute left-0 bottom-8 md:bottom-24 w-100 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <img
          src="/mano_izquierda.png"
          alt="Right avatar"
          className="hidden md:block absolute right-0 bottom-8 md:bottom-24 w-100 pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* Televisor con imagen */}
        <div
          className="relative flex items-center justify-center w-full max-w-lg mx-auto md:max-w-lg"
          style={{ height: "320px" }} // Altura estándar escritorio
        >
          <button
            aria-label="Previous project"
            onClick={prev}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 flex items-center justify-center z-30"
          >
            <span
              className={`rounded-full p-2 shadow-lg text-3xl md:text-4xl transition ${
                isDark ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              ←
            </span>
          </button>

          {/* Contenedor de la imagen del proyecto */}
          <div
            className="absolute left-1/2 top-[8%] w-[68%] h-[72%] transform -translate-x-1/2 z-10 flex items-center justify-center overflow-hidden rounded-lg"
            style={{ pointerEvents: "none", borderRadius: "8px" }}
          >
            <img
              src={projectList[current].image}
              alt={projectList[current].name}
              className="w-full h-full object-contain"
              style={{ borderRadius: "8px" }}
            />
          </div>

          {/* Marco televisor */}
          <img
            src="/televisor.png"
            alt="TV Frame"
            className="w-full object-contain relative z-20 pointer-events-none"
            style={{ maxWidth: "420px" }}
          />

          <button
            aria-label="Next project"
            onClick={next}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 flex items-center justify-center z-30"
          >
            <span
              className={`rounded-full p-2 shadow-lg text-3xl md:text-4xl transition ${
                isDark ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              →
            </span>
          </button>
        </div>

        {/* Botón debajo del televisor: solo visible en escritorio */}
        <a
          href={projectList[current].link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 mb-6 w-36 text-center font-bold py-2 px-4 rounded-full transition-colors hidden md:inline-block"
          style={{ background: accentColor, color: "#fff" }}
        >
          {t.clickMe}
        </a>

        {/* Tecnologías */}
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

        {/* Botón debajo de las tecnologías: solo visible en móvil */}
        <div className="md:hidden flex items-center w-full mt-2 relative z-10 justify-between">
          <img src="/mano_derecha.png" alt="Left avatar mobile" className="w-32" />
          <a
            href={projectList[current].link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-36 text-center font-bold py-2 px-4 rounded-full transition-colors block md:hidden"
            style={{ background: accentColor, color: "#fff" }}
          >
            {t.clickMe}
          </a>
          <img src="/mano_izquierda.png" alt="Right avatar mobile" className="w-32" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
