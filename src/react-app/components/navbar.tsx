import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const NAV_LINKS = [
  { labelKey: "nav.projects", href: "#projects" },
  { labelKey: "nav.professional", href: "#professional" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.contact", href: "#contact" },
];

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-surface-container-lowest/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,212,255,0.06)]">
      <span className="font-headline font-bold tracking-tighter text-xl text-on-surface">
        davinchi.work
      </span>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.labelKey}
            href={link.href}
            className={
              i === 0
                ? "font-label uppercase tracking-widest text-xs text-primary border-b border-primary pb-1 transition-all duration-300 ease-out"
                : "font-label uppercase tracking-widest text-xs text-on-surface-variant hover:text-on-surface transition-colors ease-out duration-300"
            }
          >
            {t(link.labelKey)}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 text-primary">
        <LanguageSwitcher />
        <button className="p-2 hover:bg-white/5 transition-all duration-300 rounded-lg text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined text-[22px]">settings</span>
        </button>
      </div>
    </nav>
  );
};
