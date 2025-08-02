import { motion } from "framer-motion";

interface MiniMapNavigatorProps {
  currentChapter: number;
  totalChapters: number;
  onNavigate: (chapter: number) => void;
}

export function MiniMapNavigator({ currentChapter, totalChapters, onNavigate }: MiniMapNavigatorProps) {
  // Define colors for each section
  const getChapterColors = (index: number) => {
    switch (index) {
      case 0: // Home
        return {
          active: "bg-gradient-to-r from-blue-500 to-cyan-400",
          activeGlow: "shadow-lg shadow-blue-500/50",
          pulse: "animate-pulse-blue"
        };
      case 1: // Services
        return {
          active: "bg-gradient-to-r from-orange-500 to-pink-500",
          activeGlow: "shadow-lg shadow-orange-500/50",
          pulse: "animate-pulse-orange"
        };
      case 2: // Portfolio
        return {
          active: "bg-gradient-to-r from-cyan-400 to-green-500",
          activeGlow: "shadow-lg shadow-cyan-400/50",
          pulse: "animate-pulse-cyan"
        };
      case 3: // Clients
        return {
          active: "bg-gradient-to-r from-purple-500 to-pink-500",
          activeGlow: "shadow-lg shadow-purple-500/50",
          pulse: "animate-pulse-purple"
        };
      case 4: // About
        return {
          active: "bg-gradient-to-r from-yellow-400 to-orange-500",
          activeGlow: "shadow-lg shadow-yellow-400/50",
          pulse: "animate-pulse-yellow"
        };
      case 5: // Contact
        return {
          active: "bg-gradient-to-r from-purple-500 to-pink-500",
          activeGlow: "shadow-lg shadow-purple-500/50",
          pulse: "animate-pulse-purple"
        };
      default:
        return {
          active: "bg-gradient-to-r from-blue-500 to-cyan-400",
          activeGlow: "shadow-lg shadow-blue-500/50",
          pulse: "animate-pulse-blue"
        };
    }
  };

  const sectionNames = ['Home', 'Services', 'Portfolio', 'Clients', 'About', 'Contact'];

  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-40 md:right-8">
      <div className="flex flex-col space-y-3 md:space-y-4">
        {Array.from({ length: totalChapters }, (_, index) => {
          const colors = getChapterColors(index);
          const isActive = index === currentChapter;
          
          return (
            <motion.div
              key={index}
              className="relative cursor-pointer"
              onClick={() => onNavigate(index)}
            >
              {/* Main dot */}
              <div
                className={`rounded-full ${
                  isActive
                    ? `w-2 h-2 md:w-3 md:h-3 ${colors.active} ${colors.activeGlow} ${colors.pulse}`
                    : "w-1 h-1 md:w-2 md:h-2 bg-gray-500 opacity-15 md:opacity-60"
                }`}
              />
              
              {/* Pulse rings: expanding light waves for active */}
              {isActive && (
                <motion.div
                  className={`absolute inset-0 rounded-full ${colors.active} opacity-30`}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
