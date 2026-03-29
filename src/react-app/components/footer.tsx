import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-container-lowest py-16 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1">
          <span className="font-headline font-bold text-on-surface tracking-widest uppercase">
            davinchi.work
          </span>
          <span className="text-on-surface-variant text-[10px] font-label tracking-widest">
            © {new Date().getFullYear()} — David Peña
          </span>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] uppercase text-on-surface-variant mb-1">
              {t("contact.github")}
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/david-peña-037812200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] uppercase text-on-surface-variant mb-1">
              {t("contact.title")}
            </span>
            <a
              href="mailto:david@davinchi.work"
              className="text-on-surface hover:text-primary transition-colors text-sm"
            >
              {t("contact.email")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
