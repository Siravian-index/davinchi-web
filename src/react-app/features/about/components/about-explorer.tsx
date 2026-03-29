import { useTranslation } from "react-i18next";
import type { PersonalCard, PersonalStat } from "../types";

const STATS: PersonalStat[] = [
  { value: "26,000+", labelKey: "personal.stats.km" },
  { value: "🇨🇴",     labelKey: "personal.stats.colombia" },
];

const CARDS: PersonalCard[] = [
  { key: "resilience", icon: "🛣",  titleKey: "personal.resilience.title", descKey: "personal.resilience.description" },
  { key: "mechanical", icon: "🔧", titleKey: "personal.mechanical.title",  descKey: "personal.mechanical.description" },
  { key: "human",      icon: "🤝", titleKey: "personal.human.title",       descKey: "personal.human.description" },
];

export const AboutExplorer = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">
            {t("personal.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("personal.title")}
          </h2>
          <p className="text-muted-fg mt-4 max-w-xl leading-relaxed">
            {t("personal.description")}
          </p>
        </div>

        {/* Stats row */}
        <div className="flex gap-8 mb-12">
          {STATS.map((stat) => (
            <div key={stat.labelKey} className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-muted-fg text-sm">{t(stat.labelKey)}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors group"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-foreground font-semibold mb-2 group-hover:text-accent transition-colors">
                {t(card.titleKey)}
              </h3>
              <p className="text-muted-fg text-sm leading-relaxed">
                {t(card.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
