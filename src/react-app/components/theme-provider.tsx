import { useEffect, type ReactNode } from "react";
import { THEMES, useThemeStore } from "@/stores/theme-store";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    THEMES.forEach((t) => root.classList.remove(`theme-${t.name}`));
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  return <>{children}</>;
};
