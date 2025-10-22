// components/sections/Contact.tsx

"use client";
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Comentario: Manejador de cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Comentario: Manejador de envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Comentario: Lógica de envío (e.g., enviar a una API o a un servicio como Formspree)
    console.log('Form data submitted:', formData);
    alert('Mensaje enviado (simulado)!');
  };

  return (
    // Comentario: Usa <section> y la ID 'contact-form' para un enlace más específico
    <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comentario: Usa <h2> para el título de la sección */}
        <h2 className="text-3xl font-extrabold text-center mb-12 border-b-2 border-indigo-500 pb-2">
          {t.contact} {/* Contacto */}
        </h2>
        
        {/* Comentario: Usa <form> para el formulario de contacto */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl">
          
          {/* Campo de Nombre */}
          <fieldset>
            {/* Comentario: Usa <label> para accesibilidad */}
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {lang === 'es' ? 'Nombre Completo' : 'Full Name'}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </fieldset>

          {/* Campo de Email */}
          <fieldset>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </fieldset>

          {/* Campo de Mensaje */}
          <fieldset>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {lang === 'es' ? 'Mensaje' : 'Message'}
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </fieldset>

          {/* Botón de Envío */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;