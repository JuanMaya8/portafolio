// components/sections/Testimonials.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Comentario: Interfaz para los datos de un testimonio
interface Testimonial {
  name: string;
  quote: string;
  source: string;
}

const Testimonials: React.FC = () => {
  const { t, lang } = useLanguage();

  // Comentario: Datos simulados de testimonios (basado en el PDF, ajustando texto ilegible)
  const testimonialList: Testimonial[] = [
    {
      name: "Jack Limas",
      // Comentario: Ajuste del texto ilegible: "Trabajo honesto, comprometido y con visión de futuro. Un activo en cualquier equipo."
      quote: "Honest, committed work with a future vision. An asset to any team.",
      source: ""
    },
    {
      name: "Juan Mora",
      // Comentario: Ajuste del texto ilegible: "Siempre sabe escuchar, colaborar y tiene una comunicación que genera confianza en el silencio."
      quote: "Always knows how to listen, collaborate, and has communication that generates trust in silence.",
      source: ""
    },
    {
      name: "David Ramirez",
      // Comentario: Ajuste del texto ilegible: "La velocidad y la compresión del problema demuestran su profesionalismo. Siempre cumple el propósito."
      quote: "Speed and problem comprehension demonstrate his professionalism. Always fulfills the purpose.",
      source: ""
    },
  ];
  
  // Comentario: Traducción dinámica de las citas
  const getTranslatedQuote = (name: string, lang: 'es' | 'en'): string => {
      // Comentario: Aquí se usaría un diccionario más completo. Por simplicidad, se traduce solo si es "es".
      if (lang === 'es') {
          if (name === "Jack Limas") return "Trabajo honesto, comprometido y con visión de futuro. Un activo en cualquier equipo.";
          if (name === "Juan Mora") return "Siempre sabe escuchar, colaborar y tiene una comunicación que genera confianza en el silencio.";
          if (name === "David Ramirez") return "La velocidad y la compresión del problema demuestran su profesionalismo. Siempre cumple el propósito.";
      }
      // Comentario: Devuelve la versión en inglés por defecto o para otros casos
      const testimonial = testimonialList.find(item => item.name === name);
      return testimonial ? testimonial.quote : "";
  };


  return (
    // Comentario: Usa <section> y la ID 'testimonials'
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comentario: Usa <h2> para el título de la sección */}
        <h2 className="text-3xl font-extrabold text-center mb-12 border-b-2  pb-2">
          {t.testimonials} {/* Testimonios */}
        </h2>
        
        {/* Comentario: Usa <figure> para la cuadrícula de testimonios */}
        <figure className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialList.map((testimonial, index) => (
            // Comentario: Usa <article> para cada testimonio
            <article key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border-t-4 ">
              
              {/* Comentario: Usa <blockquote> para el testimonio */}
              <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4 h-32">
                &quot;{getTranslatedQuote(testimonial.name, lang)}&quot;
              </blockquote>
              
              <figcaption className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
                {/* Comentario: Espacio para la imagen (Wireframe) */}
                <span
                  aria-label={`Placeholder for profile image of ${testimonial.name}`}
                  className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full inline-flex mr-3 flex-shrink-0 items-center justify-center text-xl"
                >
                  🧑
                </span>
                
                {/* Comentario: Información del Testimonio */}
                <div>
                    <cite className="not-italic font-bold text-lg  dark:text-indigo-400 block">
                        {testimonial.name}
                    </cite>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {testimonial.source}
                    </p>
                </div>
              </figcaption>
            </article>
          ))}
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;