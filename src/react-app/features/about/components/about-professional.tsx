import { useTranslation } from "react-i18next";
import type { SkillCard, SoftSkill } from "../types";

const SKILLS: SkillCard[] = [
  { key: "frontend",   icon: "⚛",  titleKey: "professional.frontend.title",   descKey: "professional.frontend.description" },
  { key: "automation", icon: "🤖", titleKey: "professional.automation.title",  descKey: "professional.automation.description" },
  { key: "learning",   icon: "⚡",  titleKey: "professional.learning.title",   descKey: "professional.learning.description" },
];

const SOFT_SKILLS: SoftSkill[] = [
  { key: "teamwork",     labelKey: "professional.softSkills.teamwork" },
  { key: "mentoring",    labelKey: "professional.softSkills.mentoring" },
  { key: "learning",     labelKey: "professional.softSkills.learning" },
  { key: "adaptability", labelKey: "professional.softSkills.adaptability" },
];

export const AboutProfessional = () => {
  const { t } = useTranslation();

  return (
    <section id="professional" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">
            {t("professional.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("professional.title")}
          </h2>
        </div>

        {/* Experience badge */}
        <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2.5 mb-12">
          <span className="text-2xl font-bold text-primary">3.9</span>
          <span className="text-muted-fg text-sm">{t("professional.experience")}</span>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SKILLS.map((skill) => (
            <div
              key={skill.key}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
            >
              <span className="text-3xl mb-4 block">{skill.icon}</span>
              <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {t(skill.titleKey)}
              </h3>
              <p className="text-muted-fg text-sm leading-relaxed">
                {t(skill.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div>
          <p className="text-muted-fg text-sm font-mono uppercase tracking-widest mb-4">
            {t("professional.softSkills.title")}
          </p>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill.key}
                className="px-4 py-1.5 rounded-full border border-border text-secondary-fg text-sm"
              >
                {t(skill.labelKey)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
