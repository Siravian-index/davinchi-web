import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeSwitcher } from "@/components/ui/theme-switcher"; // uncomment to use V1
import { ThemeSwitcherV2 } from "@/components/ui/theme-switcher-v2";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero, AboutProfessional, AboutExplorer } from "@/features/about";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen">
        <Navbar />
        <main>
          <AboutHero />
          <AboutProfessional />
          <AboutExplorer />
        </main>
        <Footer />

        {/* Theme Switcher — comment/uncomment to compare versions */}

        {/* V1 (original) */}
        {/* <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
          <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant opacity-50">v1</span>
          <ThemeSwitcher />
        </div> */}

        {/* V2 (improved) */}
        <ThemeSwitcherV2 />
      </div>
    </ThemeProvider>
  );
}

export default App;
