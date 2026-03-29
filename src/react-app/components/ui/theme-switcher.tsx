import { THEMES, useThemeStore } from "@/stores/theme-store";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex items-center gap-2">
      {THEMES.map((t) => (
        <button
          key={t.name}
          title={t.label}
          onClick={() => setTheme(t.name)}
          className={cn(
            "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
            theme === t.name ? "border-foreground scale-110" : "border-border"
          )}
          style={{ backgroundColor: t.accent }}
        />
      ))}
    </div>
  );
};
