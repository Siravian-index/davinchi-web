import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
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
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
