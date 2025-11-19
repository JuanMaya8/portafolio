"use client";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  quote: string;
  source: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonialList: Testimonial[] = [
    {
      name: "Jack Limas",
      quote: "Honest, committed work with a future vision. An asset to any team.",
      source: "",
      image: "/jack.png",
    },
    {
      name: "Juan Mora",
      quote: "Always knows how to listen, collaborate, and has communication that generates trust in silence.",
      source: "",
      image: "/mora.png",
    },
    {
      name: "David Ramirez",
      quote: "Speed and problem comprehension demonstrate his professionalism. Always fulfills the purpose.",
      source: "",
      image: "/ramirez.png",
    },
  ];

  const getTranslatedQuote = (name: string, lang: "es" | "en") => {
    if (lang === "es") {
      if (name === "Jack Limas")
        return "Trabajo honesto, comprometido y con visión de futuro. Un activo en cualquier equipo.";
      if (name === "Juan Mora")
        return "Siempre sabe escuchar, colaborar y tiene una comunicación que genera confianza en el silencio.";
      if (name === "David Ramirez")
        return "La velocidad y la compresión del problema demuestran su profesionalismo. Siempre cumple el propósito.";
    }
    const testimonial = testimonialList.find((t) => t.name === name);
    return testimonial ? testimonial.quote : "";
  };

  const next = () => setCurrent((prev) => (prev + 1) % testimonialList.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialList.length) % testimonialList.length);

  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderBottom: '4px solid var(--gray-500)',
      }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 style={{ color: 'var(--foreground)' }} className="text-3xl font-extrabold text-center mb-12 pb-2">
          {t.testimonials}
        </h2>

        {/* MOBILE CAROUSEL */}
        <div className="block md:hidden relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--gray-200)',
                borderTop: '4px solid var(--indigo-500)',
              }}
              className="p-6 rounded-lg shadow-md"
            >
              <blockquote style={{ color: 'var(--foreground-dark)' }} className="italic mb-4 h-32">
                &quot;{getTranslatedQuote(testimonialList[current].name, lang)}&quot;
              </blockquote>

              <figcaption className="pt-4 border-t border-gray-400 flex items-center">
                {testimonialList[current].image && (
                  <div className="relative w-10 h-10 mr-3 flex-shrink-0">
                    <Image
                      src={testimonialList[current].image!}
                      alt={testimonialList[current].name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <cite style={{ color: 'var(--indigo-500)' }} className="not-italic font-bold text-lg block">
                    {testimonialList[current].name}
                  </cite>
                </div>
              </figcaption>
            </motion.article>
          </AnimatePresence>

          {/* Controles */}
          <div className="flex justify-between mt-4">
            <button style={{ background: 'var(--gray-300)', color: 'var(--foreground)' }} className="px-4 py-2 rounded-lg" onClick={prev}>
              ←
            </button>
            <button style={{ background: 'var(--gray-300)', color: 'var(--foreground)' }} className="px-4 py-2 rounded-lg" onClick={next}>
              →
            </button>
          </div>
        </div>

        {/* DESKTOP GRID */}
        <figure className="hidden md:grid grid-cols-3 gap-8 mt-10">
          {testimonialList.map((testimonial, index) => (
            <article
              key={index}
              style={{
                background: 'var(--gray-200)',
                borderTop: '4px solid var(--indigo-500)',
              }}
              className="p-6 rounded-lg shadow-md"
            >
              <blockquote style={{ color: 'var(--foreground-dark)' }} className="italic mb-4 h-32">
                &quot;{getTranslatedQuote(testimonial.name, lang)}&quot;
              </blockquote>

              <figcaption className="pt-4 border-t border-gray-400 flex items-center">
                {testimonial.image && (
                  <div className="relative w-10 h-10 mr-3 flex-shrink-0">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="rounded-full object-cover" />
                  </div>
                )}
                <div>
                  <cite style={{ color: 'var(--indigo-500)' }} className="not-italic font-bold text-lg block">
                    {testimonial.name}
                  </cite>
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
