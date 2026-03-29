import { useTranslation } from "react-i18next";
import { TechStack } from "@/components/ui/tech-stack";

export const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-background">
      {/* Particle mesh */}
      <div className="absolute inset-0 particle-mesh opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 65%)" }}
        />
      </div>

      {/* Asymmetric decorative blur */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-surface-container-highest/40 border border-outline-variant/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
            System Status: Optimal
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-5xl md:text-8xl font-bold text-on-surface leading-[0.9] tracking-tighter max-w-4xl mb-8">
          {t("hero.headline.line1")}<br />
          <span className="text-primary italic">{t("hero.headline.line2")}</span>
        </h1>

        <p className="font-body text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
          {t("hero.subheadline")}
        </p>

        {/* Availability badge + Tech stack */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 bg-surface-container-highest/40 border border-outline-variant/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
              {t("hero.availability")}
            </span>
          </div>
          <TechStack showIcons showLabels />
        </div>
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-12 bottom-0 h-32 w-px bg-linear-to-t from-primary to-transparent hidden lg:block" />
    </header>
  );
};
