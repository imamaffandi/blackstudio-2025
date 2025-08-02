import { motion } from "framer-motion";

interface HeaderProps {
  onNavigate: (chapterIndex: number) => void;
  currentChapter: number;
}

export function Header({ onNavigate, currentChapter }: HeaderProps) {
  const navItems = [
    { name: "Home", index: 0 },
    { name: "Services", index: 1 },
    { name: "Portfolio", index: 2 },
    { name: "Clients", index: 3 },
    { name: "About", index: 4 },
    { name: "Contact", index: 5 }
  ];

  // Get current section name
  const getCurrentSectionName = () => {
    const currentItem = navItems.find(item => item.index === currentChapter);
    return currentItem ? currentItem.name : "Home";
  };

  const handleNavClick = (chapterIndex: number) => {
    onNavigate(chapterIndex);
  };

  const handleLogoClick = () => {
    onNavigate(0); // Go to hero section
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-6 bg-black bg-opacity-35"
      style={{ paddingLeft: '10%', paddingRight: '10%' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-white font-bold text-lg md:text-lg text-xs tracking-wider hover:text-white/90 transition-colors duration-300"
        >
          BLACKSTUDIO.ID
        </button>
        
        {/* Mobile: Current Section Name */}
        <div className="md:hidden text-sm font-medium">
          {(() => {
            let activeClasses = "";
            
            // Define gradient colors for each section (same as desktop)
            switch (currentChapter) {
              case 0: // Home
                activeClasses = "animate-gradient-blue-cyan";
                break;
              case 1: // Services
                activeClasses = "animate-gradient-orange-pink";
                break;
              case 2: // Portfolio 
                activeClasses = "animate-gradient-cyan-green";
                break;
              case 3: // Clients
                activeClasses = "animate-gradient-purple-pink";
                break;
              case 4: // About
                activeClasses = "animate-gradient-yellow-orange";
                break;
              case 5: // Contact
                activeClasses = "animate-gradient-purple-pink";
                break;
              default:
                activeClasses = "text-white";
            }
            
            return (
              <span className={`transition-colors duration-300 ${activeClasses}`}>
                {getCurrentSectionName()}
              </span>
            );
          })()}
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = currentChapter === item.index;
            let activeClasses = "";
            
            // Define gradient colors for each section
            if (isActive) {
              switch (item.index) {
                case 0: // Home
                  activeClasses = "animate-gradient-blue-cyan";
                  break;
                case 1: // Services
                  activeClasses = "animate-gradient-orange-pink";
                  break;
                case 2: // Portfolio 
                  activeClasses = "animate-gradient-cyan-green";
                  break;
                case 3: // Clients
                  activeClasses = "animate-gradient-purple-pink";
                  break;
                case 4: // About
                  activeClasses = "animate-gradient-yellow-orange";
                  break;
                case 5: // Contact
                  activeClasses = "animate-gradient-purple-pink";
                  break;
                default:
                  activeClasses = "text-white";
              }
            }
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.index)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? activeClasses
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}