"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Mode = "ordering" | "delivering";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("ordering");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("three-delight-mode") as Mode;
    if (savedMode && (savedMode === "ordering" || savedMode === "delivering")) {
      setModeState(savedMode);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("ordering", "delivering");
    document.documentElement.classList.add(mode);
  }, [mode]);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    if (mounted) {
      localStorage.setItem("three-delight-mode", newMode);
    }
  };

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
