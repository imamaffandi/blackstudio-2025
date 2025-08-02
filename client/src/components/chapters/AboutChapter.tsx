import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function AboutChapter() {

  return (
    <motion.section 
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-700 via-orange-950/25 to-slate-800" 
      style={{ aspectRatio: '16/9' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mobile-container px-4 s25:px-6 md:px-8 w-full h-full flex flex-col justify-center items-center pt-12 s25:pt-16 pb-6 s25:pb-8 md:py-12 short-screen-container short-screen-center">
        <div className="w-full max-w-4xl flex flex-col items-center">
          {/* Title Area - Centered */}
          <motion.div 
            className="mb-4 md:mb-6 w-full short-screen-header short-screen-about-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="mobile-text-3xl s25:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center short-screen-title">
              <span className="block text-white md:hidden">BRINGING</span>
              <span className="block text-white md:hidden">YOUR <span className="animate-gradient-yellow-orange font-bold">VISION</span></span>
              <span className="block text-white md:hidden">TO LIFE</span>
              <span className="hidden md:block text-white">BRINGING YOUR <span className="animate-gradient-yellow-orange font-bold">VISION</span></span>
              <span className="hidden md:block text-white">TO LIFE</span>
            </h2>
          </motion.div>

          {/* Content Area - All centered */}
          <div className="w-full flex flex-col items-center space-y-3 md:space-y-6 short-screen-about-maps short-screen-about-content">
            {/* Maps Preview - Centered */}
            <motion.div 
              className="flex flex-col items-center w-full max-w-full md:max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="w-full rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl short-screen-about-map-container">
                {/* Custom Map Design */}
                <div 
                  className="relative w-full h-[200px] md:h-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 short-screen-about-map-container"
                  onClick={() => window.open('https://maps.app.goo.gl/EKNTP1cuFMwv6zEV7', '_blank')}
                >
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full h-full">
                      {/* Street patterns */}
                      <path d="M0,150 L400,150" stroke="#374151" strokeWidth="2"/>
                      <path d="M200,0 L200,300" stroke="#374151" strokeWidth="2"/>
                      <path d="M100,0 L100,300" stroke="#4b5563" strokeWidth="1"/>
                      <path d="M300,0 L300,300" stroke="#4b5563" strokeWidth="1"/>
                      <path d="M0,75 L400,75" stroke="#4b5563" strokeWidth="1"/>
                      <path d="M0,225 L400,225" stroke="#4b5563" strokeWidth="1"/>
                      
                      {/* Area blocks */}
                      <rect x="50" y="50" width="80" height="60" fill="#1f2937" opacity="0.5"/>
                      <rect x="270" y="180" width="60" height="80" fill="#1f2937" opacity="0.5"/>
                      <rect x="150" y="200" width="100" height="50" fill="#1f2937" opacity="0.5"/>
                    </svg>
                  </div>
                  
                  {/* Central Pin with BlackStudio.id */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pin Icon */}
                      <div className="relative flex flex-col items-center">
                        <motion.div
                          className="relative"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <MapPin className="w-8 h-8 md:w-12 md:h-12 text-orange-500 drop-shadow-lg" fill="#f59e0b" />
                          {/* Pulse effect */}
                          <div className="absolute inset-0 w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                        </motion.div>
                        
                        {/* Info Card */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-orange-500/30 rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-xl backdrop-blur-sm w-full max-w-full md:max-w-md mx-auto short-screen-about-address"
                        >
                          <div className="text-center">
                            {/* Mobile: 4 lines layout */}
                            <div className="block md:hidden">
                              <h4 className="text-orange-500 font-bold text-[9px] bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent leading-tight uppercase">
                                BLACKSTUDIO.ID
                              </h4>
                              <p className="text-gray-300 text-[8px] leading-tight mt-1">
                                CV. Kreasi Rumah Hitam
                              </p>
                              <p className="text-gray-400 text-[7px] leading-tight mt-1 whitespace-nowrap">
                                Jl. Suropati Gg. 9 No.20, RT.1/RW.8, Pesanggrahan
                              </p>
                              <p className="text-gray-400 text-[7px] leading-tight mt-0.5">
                                Kec. Batu, Kota Batu, Jawa Timur 65313
                              </p>
                            </div>
                            
                            {/* Desktop: 4 lines layout */}
                            <div className="hidden md:block">
                              <h4 className="text-orange-500 font-bold text-base bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent leading-tight uppercase">
                                BLACKSTUDIO.ID
                              </h4>
                              <p className="text-gray-300 text-sm leading-tight mt-1">
                                CV. Kreasi Rumah Hitam
                              </p>
                              <p className="text-gray-400 text-xs leading-tight mt-1 whitespace-nowrap">
                                Jl. Suropati Gg. 9 No.20, RT.1/RW.8, Pesanggrahan
                              </p>
                              <p className="text-gray-400 text-xs leading-tight">
                                Kec. Batu, Kota Batu, Jawa Timur 65313
                              </p>
                            </div>
                          </div>
                          
                          {/* Pointer arrow */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-700"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
                  <div className="absolute top-4 right-4 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
                  
                  {/* Location indicator in corner */}
                  <div className="absolute bottom-1 left-1 text-[8px] md:text-xs text-gray-400 font-medium bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm">
                    📍 Click to open in Maps
                  </div>
                  
                  {/* Rating badge */}
                  <div className="absolute top-2 right-2 bg-orange-500/20 border border-orange-500/30 rounded-md px-1.5 py-0.5 text-[8px] text-orange-400 font-semibold">
                    ⭐ 4.9 (38 reviews)
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content - Centered */}
            <motion.div 
              className="w-full max-w-2xl px-2 md:px-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="space-y-3 md:space-y-4 text-gray-300 text-justify md:text-center">
                <p className="text-sm md:text-sm leading-relaxed">
                  Creative production house established in 2019, based in Batu Malang, East Java. We combine 
                  innovative ideas with exceptional execution to deliver high-quality photography, videography, graphic 
                  design, and motion graphics.
                </p>
                
                <p className="text-sm md:text-sm leading-relaxed">
                  We offer a comprehensive suite of services to bring your vision to life. From stunning photography 
                  and captivating videography to impactful graphic design and dynamic motion graphics, we create 
                  visuals that tell your brand story and connect with your target audience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}