// components/sections/WhyMe.tsx

"use client"; 

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhyMe: React.FC = () => {
  const { t } = useLanguage();

  // Lista de puntos clave de habilidades blandas extraídas de la traducción
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
        <article className="space-y-6 text-lg leading-relaxed">
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

          {/* Párrafo 3: Habilidades Blandas (Estructura Corregida: p y menu son hermanos) */}
          <section className="space-y-4"> 
            <p>
              {t.whyMeText4.split(':')[0]}: {/* Texto introductorio */}
            </p>
            
            <menu className="flex flex-wrap gap-2"> 
              {softSkills.map((skill, index) => (
                <li key={index} className="inline-block bg-indigo-100 dark:bg-indigo-900  dark:text-indigo-300 px-3 py-1 rounded-full text-base font-medium">
                  {skill}
                </li>
              ))}
            </menu>
          </section>

          {/* Párrafo 4: Valor Técnico y Humano */}
          <p className="font-semibold  dark:text-indigo-400">
            {t.whyMeText5}
          </p>
        </article>
      </div>
    </section>
  );
};

export default WhyMe;