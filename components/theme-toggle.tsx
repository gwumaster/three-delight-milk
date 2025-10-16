"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col justify-center ml-auto">
        <FiSun size={18} />
      </div>
    );
  }

  const handleToggle = () => {
    console.log("Current theme:", theme, "Resolved theme:", resolvedTheme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="flex flex-col justify-center p-2 rounded-md cursor-pointer transition-colors ml-auto border-2 border-foreground/40 m-8"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};
