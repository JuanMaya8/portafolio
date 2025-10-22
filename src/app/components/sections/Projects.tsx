// components/sections/Projects.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Comentario: Interfaz para los datos de un proyecto
interface Project {
  name: string;
  description: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();

  // Comentario: Datos simulados de proyectos basados en el PDF [cite: 11, 12, 13, 14, 15]
  const projectList: Project[] = [
    { name: "BOM [cite: 11]", description: "Project BOM description placeholder." },
    { name: "AMS [cite: 12]", description: "Project AMS description placeholder." },
    { name: "3 dj [cite: 13]", description: "Project 3 dj description placeholder." },
    { name: "52 [cite: 14]", description: "Project 52 description placeholder." },
    { name: "N [cite: 15]", description: "Project N description placeholder." },
  ];

  return (
    // Comentario: Usa <section> y la ID 'projects' para navegación
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 border-b-2  pb-2">
          {t.projectsTitle} 
        </h2>
        
        {/* Comentario: Usa <figure> para la cuadrícula de proyectos */}
        <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            // Comentario: Usa <article> para cada tarjeta de proyecto
            <article key={index} className="bg-white dark:bg-gray-700 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              
              {/* Comentario: Espacio para la imagen (Wireframe) */}
              <span
                aria-label={`Placeholder for project image ${project.name}`}
                className="h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-5xl text-gray-500 dark:text-gray-400 border-b-2 border-dashed border-gray-400 dark:border-gray-500"
              >
                ⚙️
              </span>

              <figcaption className="p-6">
                {/* Comentario: Usa <h3> para el nombre del proyecto */}
                <h3 className="text-xl font-bold mb-2  dark:text-indigo-400">
                  {project.name}
                </h3>
                {/* Comentario: Usa <p> para la descripción */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <button className="bg-black hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                  {t.clickMe}
                </button>
              </figcaption>
            </article>
          ))}
        </figure>
      </div>
    </section>
  );
};

export default Projects;