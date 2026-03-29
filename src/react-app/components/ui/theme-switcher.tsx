import { THEMES, useThemeStore } from "@/stores/theme-store";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-6 items-center bg-surface-container-lowest/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-3 w-max">
      {THEMES.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <div
            className={cn(
              "p-2 rounded-full transition-all duration-200 ease-out",
              theme === t.name
                ? "bg-primary/20 text-primary scale-110"
                : "text-on-surface-variant hover:text-on-surface hover:scale-105"
            )}
          >
            <span
              className={cn(
                "material-symbols-outlined text-[22px]",
                theme === t.name && "material-symbols-filled"
              )}
            >
              {t.icon}
            </span>
          </div>
          <span
            className={cn(
              "font-label text-[9px] uppercase tracking-[0.2em] transition-opacity duration-200",
              theme === t.name ? "text-primary opacity-100" : "text-on-surface-variant opacity-0 group-hover:opacity-100"
            )}
          >
            {t.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
