// components/sections/WhyMe.tsx

"use client"; 

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const WhyMe: React.FC = () => {
  const { t } = useLanguage();

  // Lista de puntos clave de habilidades blandas extraídas
  const softSkills = [
    t.whyMeText4.split(': ')[1]?.split(',')[0]?.trim() || 'Empatía',
    t.whyMeText4.split(':')[1]?.split(',')[1]?.trim() || 'Proactividad',
    t.whyMeText4.split(':')[1]?.split(',')[2]?.split('sin')[0]?.trim() || 'Resiliencia',
  ];

  return (
    <section id="risk-it" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b-4 border-black dark:border-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 border-b-2 pb-2">
          {t.whyMeTitle} 
        </h2>
        
        {/* Contenedor principal de la justificación */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Columna de texto */}
          <article className="space-y-6 text-lg leading-relaxed flex-1">
          {/* Párrafo 1: Tecnologías y Colaboración */}
          <p>
            {t.whyMeText1} 
          </p>
          
          {/* Párrafo 2: Trabajo en Equipos Distribuidos */}
          <p>
            {t.whyMeText2} 
          </p>

          {/* Cita: Software es gente, no solo código */}
          <blockquote className="border-l-4  pl-4 italic text-gray-600 dark:text-gray-300">
            {t.whyMeText3}
          </blockquote>

          <section className="space-y-4"> 
            <p>
              {t.whyMeText4.split(':')[0]}: 
            </p>
            
            <menu className="flex flex-wrap gap-2"> 
              {softSkills.map((skill, index) => (
                <li key={index} className="inline-block bg-indigo-100 dark:bg-indigo-900  dark:text-indigo-300 px-3 py-1 rounded-full text-base font-medium">
                  {skill}
                </li>
              ))}
            </menu>
          </section>

          <p className="font-semibold  dark:text-indigo-400">
            {t.whyMeText5}
          </p>
          </article>

          {/* Columna de imagen */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="sticky top-24 w-full">
              <Image
                src="/Apuntando_una_abajo.png"
                alt="Ilustración apuntando hacia abajo"
                width={400}
                height={400}
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;