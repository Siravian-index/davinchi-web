import { useTranslation } from "react-i18next";
import motoImg from "@/assets/1_IMG_0416.JPG.jpeg";

const INTERESTS = [
  { labelKey: "personal.resilience.title", colorVar: "bg-primary" },
  { labelKey: "personal.mechanical.title",  colorVar: "bg-tertiary" },
  { labelKey: "personal.human.title",       colorVar: "bg-secondary" },
];

export const AboutExplorer = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-4xl lg:text-6xl font-bold text-on-surface mb-8">
              {t("personal.title")}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-lg">
              {t("personal.description")}
            </p>

            {/* Interest lines */}
            <div className="space-y-4">
              {INTERESTS.map((item) => (
                <div key={item.labelKey} className="flex items-center gap-4 group">
                  <span
                    className={`h-px ${item.colorVar} transition-all duration-500 ease-out`}
                    style={{ width: "3rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.width = "5rem")}
                    onMouseLeave={(e) => (e.currentTarget.style.width = "3rem")}
                  />
                  <span className="font-label uppercase tracking-widest text-xs text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
                    {t(item.labelKey)}
                  </span>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div className="mt-10 flex items-baseline gap-3">
              <span className="font-headline text-5xl font-bold text-primary">26,000+</span>
              <span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">
                {t("personal.stats.km")}
              </span>
            </div>
          </div>

          {/* Motorcycle image column */}
          <div className="order-1 lg:order-2 relative group motorcycle-hover overflow-hidden rounded-xl">
            <img
              src={motoImg}
              alt="Classic 350 — Colombia"
              className="w-full h-130 object-cover grayscale transition-all duration-700 ease-out brightness-60 group-hover:brightness-50"
            />

            {/* Colombia flag color overlay */}
            <div className="absolute inset-0 opacity-0 color-overlay transition-opacity duration-700 pointer-events-none mix-blend-color overflow-hidden">
              <div className="h-1/3 bg-[#FFCD00]/50" />
              <div className="h-1/3 bg-[#003087]/50" />
              <div className="h-1/3 bg-[#C8102E]/50" />
            </div>

            {/* Border frame */}
            <div className="absolute inset-0 border-16 border-background pointer-events-none rounded-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};
