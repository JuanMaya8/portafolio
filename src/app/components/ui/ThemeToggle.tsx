// components/ui/ThemeToggle.tsx

"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light theme"
      style={{
        padding: "8px",
        borderRadius: "50%",
        background: "var(--foreground)",
        color: "var(--background)",
        border: "none",
        cursor: "pointer",
        transition: "0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme === "light" ? (
        <MoonIcon style={{ width: "24px", height: "24px" }} />
      ) : (
        <SunIcon style={{ width: "24px", height: "24px" }} />
      )}
    </button>
  );
};

export default ThemeToggle;
