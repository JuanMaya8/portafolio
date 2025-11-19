"use client";

import { ThemeProvider } from "./components/context/ThemeContext";
import { LanguageProvider } from "./components/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}