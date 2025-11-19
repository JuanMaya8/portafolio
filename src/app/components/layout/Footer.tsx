"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Redes */}
        <figure className="flex justify-center items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/juan-david-maya-906530381"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:opacity-70 transition-colors flex items-center gap-2"
            style={{ color: "var(--foreground)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-10 h-10"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>

          <a
            href="mailto:juanmayabusiness@gmail.com"
            aria-label="Enviar correo"
            className="text-sm transition-colors flex items-center gap-2 hover:opacity-70"
            style={{ color: "var(--foreground)" }}
          >
            ✉️
            <span className="hidden sm:inline">
              juanmayabusiness@gmail.com
            </span>
          </a>
        </figure>

        <p
          className="mt-8 text-sm"
          style={{ color: "var(--foreground)" }}
        >
          &copy; {new Date().getFullYear()} {t.portfolio}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
