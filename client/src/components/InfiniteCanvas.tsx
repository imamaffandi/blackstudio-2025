import { motion } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";
import { MiniMapNavigator } from "./MiniMapNavigator";
import { Header } from "./Header";
import { HeroChapter } from "./chapters/HeroChapter";
import { ServicesChapter } from "./chapters/ServicesChapter";
import { PortfolioChapter } from "./chapters/PortfolioChapter";
import { ClientsChapter } from "./chapters/ClientsChapter";
import { AboutChapter } from "./chapters/AboutChapter";
import { ContactChapter } from "./chapters/ContactChapter";

const chapters = [
  HeroChapter,
  ServicesChapter,
  PortfolioChapter,
  ClientsChapter,
  AboutChapter,
  ContactChapter,
];

export function InfiniteCanvas() {
  const { currentChapter, navigateToChapter } = useNavigation(chapters.length);

  return (
    <div className="relative w-screen h-screen bg-primary text-primary overflow-hidden">
      {/* Header Navigation */}
      <Header onNavigate={navigateToChapter} currentChapter={currentChapter} />
      
      {/* Mini-map Navigator */}
      <MiniMapNavigator
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        onNavigate={navigateToChapter}
      />



      {/* Vertical Canvas Wrapper */}
      <motion.div
        className="slide-transition"
        style={{ 
          height: `${chapters.length * 100}vh`,
        }}
        animate={{
          y: `-${currentChapter * 100}vh`
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {chapters.map((Chapter, index) => (
          <div key={index} className="w-screen h-screen">
            {index === 0 ? (
              <Chapter onNavigateToPortfolio={() => navigateToChapter(2)} />
            ) : (
              <Chapter />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
