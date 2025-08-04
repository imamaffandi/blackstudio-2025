import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";

const portfolioItems = [
  {
    title: "COMPRO PT MAKMUR BERKAH AMANDA",
    category: "Video Production | Company Profile",
    videoId: "lnMqEmce-wc",
  },
  {
    title: "COMPRO ADMEDIKA",
    category: "Video Production | Company Profile",
    videoId: "4yzYw9hmZ9Y",
  },
  {
    title: "TUTORIAL QRIS TAP",
    category: "Video Production | Digital Ads",
    videoId: "_q1tDspTp_M",
  },
  {
    title: "Digital Ads Book Cabin Call Center",
    category: "Video Production | Digital Ads",
    videoId: "IWDNJrSd0Yo",
  },
  {
    title: "PT. Garuda Yamato Steel (GYS)",
    category: "Motion Graphic | Company Profile",
    videoId: "IAG684g8Tv0",
  },
  {
    title: "PARIVARTANA RASA",
    category: "Event Documentation | Documentary Film",
    videoId: "2dRLw5zRaTI",
  },
  {
    title: "GRAND LAUNCHING PME BILATERAL",
    category: "Motion Graphic | Event Documentation",
    videoId: "6T-_9gsyFb8",
  },
  {
    title: "Kemakmuran Semesta - Film Dokumenter 15 Tahun Bantengan Nuswantara",
    category: "Event Documentation | Documentary Film",
    videoId: "PnHfKOg3fI0",
  },
];

export function PortfolioChapter() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <motion.section
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-700 via-cyan-950/25 to-slate-700"
      style={{ aspectRatio: "16/9" }}
      data-section="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mobile-container px-4 s25:px-6 md:px-8 w-full h-full flex flex-col justify-center pt-12 s25:pt-16 md:pt-20 short-screen-container short-screen-center">
        <div className="text-center mb-6 short-screen-header">
          <motion.h2
            className="mobile-text-3xl s25:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 s25:mb-4 leading-tight short-screen-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="block text-white">OUR CREATIVE </span>
            <span className="animate-gradient-cyan-green font-bold">MAGIC</span>
          </motion.h2>

          <motion.p
            className="mobile-text-base s25:text-base text-gray-300 max-w-2xl mx-auto mb-6 s25:mb-8 font-light short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            A glimpse into the creative magic we create
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 flex-1 max-h-[450px] short-screen-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ y: -2, scale: 1.01 }}
              onClick={() => {
                setSelectedVideo(item.videoId);
                setSelectedTitle(item.title);
              }}
            >
              <div
                className="aspect-video overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Hover Overlay with View Project */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      View Project
                    </span>
                    <Play className="w-12 h-12 text-white mb-2 mx-auto" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Pop-up - Positioned within portfolio section area */}
      {selectedVideo && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          />
          <motion.div
            className="relative bg-slate-900 rounded-lg md:rounded-xl overflow-hidden border border-slate-700 w-[calc(100%-2rem)] md:w-[65%] max-w-[800px] aspect-video"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>

            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              title={selectedTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Video Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4 pointer-events-none">
              <h3 className="text-white font-bold text-sm md:text-lg">
                {selectedTitle}
              </h3>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
