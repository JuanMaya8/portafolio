// components/sections/Contact.tsx

"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-b-4 border-black dark:border-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-6  pb-2">
          {t.contact}
        </h2>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl text-center">
          <p className="text-lg mb-4">
            {lang === 'es' ? 'Puedes contactarme en:' : 'You can reach me at:'}
          </p>
          <div className="space-y-4">
            <a href="mailto:juanmayabusiness@gmail.com" className="block text-indigo-500 hover:text-indigo-400 font-medium text-xl break-words">
              juanmayabusiness@gmail.com
            </a>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-lg mb-2">
                {lang === 'es' ? 'También por LinkedIn:' : 'Also on LinkedIn:'}
              </p>
              <a 
                href="https://www.linkedin.com/in/juan-david-maya-906530381/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400 font-medium text-xl break-words"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;