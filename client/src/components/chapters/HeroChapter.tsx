import { motion } from "framer-motion";

interface HeroChapterProps {
  onNavigateToPortfolio?: () => void;
}

export function HeroChapter({ onNavigateToPortfolio }: HeroChapterProps = {}) {
  return (
    <motion.section
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-800"
      style={{ aspectRatio: "16/9" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-4xl mobile-container px-4 s25:px-6 md:px-8 pt-16 s25:pt-20 short-screen-container">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
          <h1 className="mobile-text-3xl s25:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 s25:mb-8 leading-tight short-screen-title">
            <span className="block text-white uppercase">
              Craft Your Story with Visual Impact
            </span>
            <span className="block animate-gradient-blue-purple font-bold uppercase">
              BlackStudio.ID
            </span>
          </h1>

          <motion.p
            className="mobile-text-base s25:text-lg text-gray-300 max-w-2xl mx-auto mb-8 s25:mb-12 leading-relaxed font-light short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            A creative hub based in Batu City, East Java.
            <br />
            specializing in video production, motion graphics, photography, and
            design.
            <br />
            We transform imaginative ideas into stunning reality
          </motion.p>

          <motion.button
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Navigate to portfolio section (index 2)
              if (onNavigateToPortfolio) {
                onNavigateToPortfolio();
              }
            }}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
