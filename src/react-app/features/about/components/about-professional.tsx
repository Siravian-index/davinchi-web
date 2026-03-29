import { useTranslation } from "react-i18next";

const MODULES = [
  {
    key: "frontend",
    icon: "layers",
    number: "01",
    titleKey: "professional.frontend.title",
    descKey: "professional.frontend.description",
    chips: ["React 18", "TypeScript", "Tailwind CSS"],
    iconColor: "text-primary",
  },
  {
    key: "automation",
    icon: "smart_toy",
    number: "02",
    titleKey: "professional.automation.title",
    descKey: "professional.automation.description",
    chips: ["LangChain", "OpenAI API", "n8n"],
    iconColor: "text-tertiary",
  },
  {
    key: "learning",
    icon: "terminal",
    number: "03",
    titleKey: "professional.learning.title",
    descKey: "professional.learning.description",
    chips: ["Golang", "gRPC", "Docker"],
    iconColor: "text-secondary",
  },
];

const WORK_ETHICS = ["#AsymmetricThinking", "#ContinuousLearning", "#RadicalCuriosity"];

export const AboutProfessional = () => {
  const { t } = useTranslation();

  return (
    <section id="professional" className="py-32 bg-surface-container-lowest relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col gap-24">

          {/* Section header */}
          <div className="border-l-4 border-primary pl-8">
            <h2 className="font-headline text-4xl font-bold text-on-surface uppercase tracking-tight">
              {t("professional.title")}
            </h2>
            <p className="font-label text-primary text-xs tracking-[0.3em] mt-2 uppercase">
              {t("professional.subtitle")}
            </p>
          </div>

          {/* Modules */}
          <div className="grid grid-cols-1 gap-12">
            {MODULES.map((mod) => (
              <div
                key={mod.key}
                className="group bg-surface-container-low border border-white/10 p-8 rounded-xl inner-glow transition-all duration-300 ease-out hover:border-white/20"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`material-symbols-outlined text-4xl ${mod.iconColor}`}>
                    {mod.icon}
                  </span>
                  <span className="font-label text-[10px] text-on-surface-variant/60 uppercase">
                    Module {mod.number}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  {t(mod.titleKey)}
                </h3>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  {t(mod.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mod.chips.map((chip) => (
                    <span
                      key={chip}
                      className="bg-surface-container-highest px-3 py-1 rounded text-[10px] font-label uppercase tracking-wider border border-outline-variant/10 text-on-surface-variant"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Work ethics */}
          <div className="pt-12 border-t border-outline-variant/20">
            <p className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-6">
              {t("professional.softSkills.title")}
            </p>
            <div className="flex flex-wrap gap-4">
              {WORK_ETHICS.map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="text-on-surface font-headline font-medium text-lg italic">{tag}</span>
                  {i < WORK_ETHICS.length - 1 && (
                    <span className="text-outline-variant text-xl">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
