"use client"; 

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const WhyMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="risk-it"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderBottom: '4px solid var(--gray-500)',
      }}
      className="py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2
          style={{ color: 'var(--foreground)' }}
          className="text-3xl font-extrabold text-center mb-12 pb-2"
        >
          {t.whyMeTitle}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <article
            className="space-y-6 text-lg leading-relaxed flex-1"
            style={{ color: 'var(--foreground-dark)' }}
          >
            <p>{t.whyMeText1}</p>
            <p>{t.whyMeText2}</p>
            <p>{t.whyMeText3}</p>
            <p>{t.whyMeText4}</p>
            <p>{t.whyMeText5}</p>
          </article>

          <div className="lg:w-1/3 flex-shrink-0">
            <div className="sticky top-24 w-full">
              <Image
                src="/Apuntando_una_abajo.png"
                alt="Ilustración apuntando hacia abajo"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyMe;
