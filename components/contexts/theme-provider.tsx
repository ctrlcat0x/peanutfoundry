"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      {...props}
      attribute="data-theme"
      defaultTheme="rose-pine"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
