"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 px-3 py-2 rounded-md bg-[var(--foreground)] text-[var(--background)] text-sm flex items-center gap-2 hover:opacity-80 transition"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      {dark ? "Light" : "Dark"}
    </button>
  );
}


