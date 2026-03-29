import { THEMES, useThemeStore } from "@/stores/theme-store";
import { cn } from "@/lib/utils";

const SLOT_WIDTH = 88; // px — wider slot so labels have room to breathe
const PILL_OFFSET = 4; // px — padding inside dock before first slot

export const ThemeSwitcherV2 = () => {
  const { theme, setTheme } = useThemeStore();

  const activeIndex = THEMES.findIndex((t) => t.name === theme);
  const activeTheme = THEMES[activeIndex];

  const pillLeft = PILL_OFFSET + activeIndex * SLOT_WIDTH;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Ambient glow behind the dock — color follows active theme */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-20 transition-colors duration-500 pointer-events-none"
        style={{ backgroundColor: activeTheme.accent }}
      />

      {/* Dock */}
      <div
        className="relative flex items-center bg-surface-container-lowest/70 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-1 py-1"
        style={{ paddingLeft: PILL_OFFSET, paddingRight: PILL_OFFSET }}
      >
        {/* Sliding pill indicator */}
        <div
          className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out"
          style={{
            left: pillLeft,
            width: SLOT_WIDTH,
            backgroundColor: `${activeTheme.accent}22`,
            boxShadow: `0 0 12px 2px ${activeTheme.accent}33`,
            border: `1px solid ${activeTheme.accent}44`,
          }}
        />

        {/* Buttons */}
        {THEMES.map((t) => {
          const isActive = theme === t.name;
          return (
            <button
              key={t.name}
              onClick={() => setTheme(t.name)}
              className="relative z-10 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-300 ease-out"
              style={{ width: SLOT_WIDTH, paddingTop: 6, paddingBottom: 6 }}
              title={t.label}
            >
              {/* Icon — always white, filled when active */}
              <span
                className={cn(
                  "material-symbols-outlined text-[22px] transition-all duration-300 ease-out text-on-surface",
                  isActive ? "material-symbols-filled" : "text-on-surface-variant"
                )}
              >
                {t.icon}
              </span>

              {/* Label — expands with fixed width so text never wraps */}
              <span
                className={cn(
                  "font-label text-[9px] uppercase tracking-[0.12em] text-on-surface-variant transition-all duration-300 whitespace-nowrap",
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
