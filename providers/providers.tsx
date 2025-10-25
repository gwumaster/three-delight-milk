"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { ModeProvider } from "@/providers/mode-provider";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="three-delight-theme"
    >
      <ModeProvider>
        {children}
      </ModeProvider>
    </ThemeProvider>
  );
}
