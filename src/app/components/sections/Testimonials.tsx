// components/sections/Testimonials.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

//  Interfaz para los datos de un testimonio
interface Testimonial {
  name: string;
  quote: string;
  source: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const { t, lang } = useLanguage();

  const testimonialList: Testimonial[] = [
    {
      name: "Jack Limas",
      // Comentario:"Trabajo honesto, comprometido y con visión de futuro. Un activo en cualquier equipo."
      quote: "Honest, committed work with a future vision. An asset to any team.",
      source: "",
      image: "https://instagram.fpso3-1.fna.fbcdn.net/v/t51.2885-19/491446472_18352940323146854_4087542511557636712_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fpso3-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QExYckiAqez0_MDjRILBq4b4-z2GL0X3epoxWbaSOS9MRG66Tt7ed0JRwOsJs9i_sU&_nc_ohc=kvg_0UxaKBYQ7kNvwG0ENzI&_nc_gid=d8gg-jEv81vt4M5sLyHN3g&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfhKd_cifTXa1ctaniJL_kK3SoHrrzhGDm5wOQ9MuXw2tg&oe=6917208E&_nc_sid=7d3ac5"
    },
    {
      name: "Juan Mora",
      // "Siempre sabe escuchar, colaborar y tiene una comunicación que genera confianza en el silencio."
      quote: "Always knows how to listen, collaborate, and has communication that generates trust in silence.",
      source: ""
    },
    {
      name: "David Ramirez",
      //"La velocidad y la compresión del problema demuestran su profesionalismo. Siempre cumple el propósito."
      quote: "Speed and problem comprehension demonstrate his professionalism. Always fulfills the purpose.",
      source: ""
    },
  ];
  
  // Traducción dinámica de las citas
  const getTranslatedQuote = (name: string, lang: 'es' | 'en'): string => {
      // Comentario: Aquí se usaría un diccionario más completo. Por simplicidad, se traduce solo si es "es".
      if (lang === 'es') {
          if (name === "Jack Limas") return "Trabajo honesto, comprometido y con visión de futuro. Un activo en cualquier equipo.";
          if (name === "Juan Mora") return "Siempre sabe escuchar, colaborar y tiene una comunicación que genera confianza en el silencio.";
          if (name === "David Ramirez") return "La velocidad y la compresión del problema demuestran su profesionalismo. Siempre cumple el propósito.";
      }
      // Devuelve la versión en inglés por defecto o para otros casos
      const testimonial = testimonialList.find(item => item.name === name);
      return testimonial ? testimonial.quote : "";
  };


  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 pb-2">
          {t.testimonials} {/* Testimonios */}
        </h2>
        
        <figure className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialList.map((testimonial, index) => (
            <article key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border-t-4 ">
              
              <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4 h-32">
                &quot;{getTranslatedQuote(testimonial.name, lang)}&quot;
              </blockquote>
              
              <figcaption className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
                {testimonial.image ? (
                  <div className="relative w-10 h-10 mr-3 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={`Profile picture of ${testimonial.name}`}
                      fill
                      className="rounded-full object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <span
                    aria-label={`Placeholder for profile image of ${testimonial.name}`}
                    className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full inline-flex mr-3 flex-shrink-0 items-center justify-center text-xl"
                  >
                    🧑
                  </span>
                )}
                
                {/* Información del Testimonio */}
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