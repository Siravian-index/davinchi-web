import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggle}
      className="text-sm font-medium text-muted-fg hover:text-foreground transition-colors border border-border rounded-md px-3 py-1.5"
    >
      {t("language.switch")}
    </button>
  );
};
