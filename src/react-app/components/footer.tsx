import { useTranslation } from "react-i18next";

const SOCIAL_LINKS = [
  { label: "GitHub",    href: "https://github.com/Siravian-index",                          icon: "code" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/david-pe%C3%B1a-037812200/",     icon: "work" },
  { label: "Instagram", href: "https://www.instagram.com/davinchi_47",                       icon: "photo_camera" },
];

const CONTACT_LINKS = [
  { label: "depch47@gmail.com", href: "mailto:depch47@gmail.com", icon: "mail" },
];

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-surface-container-lowest py-16 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-1">
          <span className="font-headline font-bold text-on-surface tracking-widest uppercase">
            davinchi.work
          </span>
          <span className="text-on-surface-variant text-[10px] font-label tracking-widest">
            © {new Date().getFullYear()} — David Peña
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mb-1">
              Social
            </span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors duration-300 text-sm group"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mb-1">
              {t("contact.title")}
            </span>
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors duration-300 text-sm group"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
