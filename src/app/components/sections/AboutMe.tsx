"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const AboutMe: React.FC = () => {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const bgLight = "#ffe9f5";
  const borderLight = "#d1b5cc";
  const blockquoteBorderLight = "#c2b2e1";
  const blockquoteColorLight = "#8c6dac";

  return (
    <section
      id="who-am-i"
      style={{
        background: isDark ? "var(--background)" : bgLight,
        color: "var(--foreground)",
        borderBottom: `4px solid ${isDark ? "var(--gray-500)" : borderLight}`,
      }}
      className="py-20"
    >
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-extrabold text-center mb-12 pb-2 ${
            !isDark ? "text-black md:text-[var(--foreground)]" : "text-[var(--foreground)]"
          }`}
        >
          {t.aboutTitle}
        </h2>
        <article className="space-y-6 text-lg leading-relaxed">
          <p
            className={`${
              !isDark ? "text-black md:text-[var(--foreground)]" : "text-[var(--foreground)]"
            }`}
          >
            {t.aboutText1}
          </p>
          <blockquote
            style={{
              borderLeft: `4px solid ${isDark ? "var(--gray-400)" : blockquoteBorderLight}`,
              color: isDark ? "var(--gray-300)" : blockquoteColorLight,
            }}
            className="pl-4 italic"
          >
            {t.aboutText2}
          </blockquote>
        </article>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:order-2 flex justify-center">
            <Image
              src="/manos_arriba.png"
              alt="Ilustración de manos arriba"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: isDark ? "0 10px 15px var(--gray-500)" : "0 10px 15px #d1b5cc" }}
            />
          </div>
          <div className="md:order-3 flex justify-center">
            <Image
              src="/yo_2.png"
              alt="Segunda ilustración personal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: isDark ? "0 10px 15px var(--gray-500)" : "0 10px 15px #d1b5cc" }}
            />
          </div>
          <div className="md:order-1 flex justify-center">
            <Image
              src="/yo_1.png"
              alt="Primera ilustración personal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: isDark ? "0 10px 15px var(--gray-500)" : "0 10px 15px #d1b5cc" }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
