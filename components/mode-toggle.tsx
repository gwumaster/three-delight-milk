"use client";

import { useEffect, useState } from "react";
import { useMode } from "@/providers/mode-provider";

export const ModeToggle: React.FC = () => {
  const { mode, setMode } = useMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 px-4 py-2 mr-auto">
        <div className="px-4 py-2 rounded-full font-semibold text-md cursor-pointer">Ordering</div>
        <div className="px-4 py-2 rounded-full font-semibold text-md cursor-pointer">Delivering</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 mr-auto">
      <button
        className={`px-4 py-2 rounded-full font-semibold text-md transition-all cursor-pointer ${
          mode === "ordering" ? "bg-foreground text-background" : "text-foreground/70"
        }`}
        onClick={() => setMode("ordering")}
      >
        Ordering
      </button>
      <button
        className={`px-4 py-2 rounded-full font-semibold text-md transition-all cursor-pointer ${
          mode === "delivering" ? "bg-foreground text-background" : "text-foreground/70"
        }`}
        onClick={() => setMode("delivering")}
      >
        Delivering
      </button>
    </div>
  );
};
