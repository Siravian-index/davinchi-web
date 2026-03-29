import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const currentLang = i18n.language === "es" ? "ES" : "EN";

  return (
    <button
      onClick={toggle}
      title={currentLang === "ES" ? "Switch to English" : "Cambiar a Español"}
      className="flex items-center gap-1.5 p-2 hover:bg-white/5 transition-all duration-300 rounded-lg text-on-surface-variant hover:text-on-surface"
    >
      <span className="material-symbols-outlined text-[22px]">language</span>
      <span className="font-label text-[10px] uppercase tracking-widest">{currentLang}</span>
    </button>
  );
};
