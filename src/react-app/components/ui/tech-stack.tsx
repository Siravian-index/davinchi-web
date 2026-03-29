import { type ComponentType, type CSSProperties } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiLinux,
  SiPython,
} from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";

interface TechItem {
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  brandColor: string;
}

const TECH_STACK: TechItem[] = [
  { label: "React",      icon: SiReact,      brandColor: "#61DAFB" },
  { label: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
  { label: "Node.js",    icon: SiNodedotjs,  brandColor: "#339933" },
  { label: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" },
  { label: "Linux",      icon: SiLinux,      brandColor: "#FCC624" },
  { label: "Python",     icon: SiPython,     brandColor: "#3776AB" },
];

interface TechStackProps {
  showIcons?: boolean;
  showLabels?: boolean;
  className?: string;
}

export const TechStack = ({
  showIcons = true,
  showLabels = true,
  className,
}: TechStackProps) => {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {TECH_STACK.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.label}
            className="group flex items-center gap-2 px-3 py-2 bg-surface-container-highest/50 border border-outline-variant/10 rounded-lg transition-all duration-300 ease-out hover:border-outline-variant/40"
            style={{ "--brand-color": tech.brandColor } as CSSProperties}
          >
            {showIcons && (
              <Icon
                size={16}
                className="text-on-surface-variant transition-colors duration-300 ease-out group-hover:text-[--brand-color]"
              />
            )}
            {showLabels && (
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors duration-300 ease-out group-hover:text-on-surface">
                {tech.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
