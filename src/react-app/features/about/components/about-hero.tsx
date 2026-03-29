import { useTranslation } from "react-i18next";

export const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-4">
          davinchi.work
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          {t("hero.headline")}
        </h1>
        <p className="text-lg text-muted-fg leading-relaxed mb-10 max-w-2xl mx-auto">
          {t("hero.subheadline")}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-fg font-semibold hover:opacity-90 transition-opacity"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            {t("hero.contact")}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-fg">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  );
};
