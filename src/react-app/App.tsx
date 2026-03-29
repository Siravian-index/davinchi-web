import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { AboutHero, AboutProfessional, AboutExplorer } from "@/features/about";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
          <span className="text-primary font-mono font-bold tracking-wider text-sm">
            davinchi.work
          </span>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Content */}
        <main className="pt-16">
          <AboutHero />
          <AboutProfessional />
          <AboutExplorer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
