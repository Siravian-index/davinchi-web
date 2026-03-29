import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeName = "default" | "moto" | "cyber";

export interface ThemeOption {
  name: ThemeName;
  label: string;
  accent: string; // hex preview color
}

export const THEMES: ThemeOption[] = [
  { name: "default", label: "Default", accent: "#6366f1" },
  { name: "moto",    label: "Moto",    accent: "#d97706" },
  { name: "cyber",   label: "Cyber",   accent: "#00ff88" },
];

interface ThemeState {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "default",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "davinchi-theme" }
  )
);
