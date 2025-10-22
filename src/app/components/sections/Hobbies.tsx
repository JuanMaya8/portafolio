// components/sections/Hobbies.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
// Comentario: Iconos de ejemplo para Hobbies (se asume @heroicons/react está instalado)
import { CameraIcon, ChatBubbleOvalLeftEllipsisIcon, FireIcon } from '@heroicons/react/24/outline'; 

const Hobbies: React.FC = () => {
  const { t } = useLanguage();

  // Comentario: Lista de hobbies (con iconos wireframe)
  const hobbyList = [
    { icon: <CameraIcon className="w-8 h-8 text-indigo-500" />, title: "Explorar la Naturaleza" },
    { icon: <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-indigo-500" />, title: "Compartir Conversaciones" },
    { icon: <FireIcon className="w-8 h-8 text-indigo-500" />, title: "Cocinar Nuevo" },
  ];

  return (
    // Comentario: Usa <section> y la ID 'off-work' para navegación
    <section id="off-work" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comentario: Usa <h2> para el título de la sección */}
        <hgroup className="text-center mb-12">
          <h2 className="text-3xl font-extrabold border-b-2 border-indigo-500 pb-2 inline-block">
            {t.hobbiesTitle} {/* Un poco de mi fuera de una maquina */}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t.hobbiesSubtitle} {/* Mi lado humano. Porque aunque soy ingeniero... */}
          </p>
        </hgroup>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Comentario: Lado de Imagen (Wireframe) */}
          <figure className="order-1 flex justify-center items-center">
            <span
              aria-label="Placeholder for image of a landscape or hobby activity"
              className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-5xl text-gray-500 dark:text-gray-400 border-4 border-dashed border-gray-400 dark:border-gray-500"
            >
              🏞️
            </span>
          </figure>

          {/* Comentario: Lado de Texto y lista de Hobbies */}
          <article className="order-2 space-y-6 text-lg leading-relaxed">
            <p>
              {t.hobbiesText1} {/* Me gusta desconectarme para reconectarme... */}
            </p>
            
            <p>
              {t.hobbiesText2} {/* Esos espacios me ayudan a pensar mejor... */}
            </p>
            
            <p className="font-semibold text-indigo-600 dark:text-indigo-400">
              {t.hobbiesText3} {/* Porque al final, programamos para personas... */}
            </p>

            {/* Comentario: Lista semántica para los hobbies */}
            <menu className="flex flex-wrap gap-4 pt-4">
              {hobbyList.map((hobby, index) => (
                <li key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                  {/* Comentario: Icono (Wireframe) */}
                  {hobby.icon}
                  {/* Comentario: Descripción del hobby */}
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {hobby.title}
                  </span>
                </li>
              ))}
            </menu>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;