import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeName = "deep-ocean" | "forest-fire" | "sunset";

export interface ThemeOption {
  name: ThemeName;
  label: string;
  icon: string;   // Material Symbol name
  accent: string; // hex preview color
}

export const THEMES: ThemeOption[] = [
  { name: "deep-ocean",   label: "Deep Ocean",   icon: "water_drop",          accent: "#00D4FF" },
  { name: "forest-fire",  label: "Forest Fire",  icon: "local_fire_department", accent: "#ff6b1a" },
  { name: "sunset",       label: "Sunset",       icon: "wb_twilight",          accent: "#e040fb" },
];

interface ThemeState {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "deep-ocean",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "davinchi-theme" }
  )
);
