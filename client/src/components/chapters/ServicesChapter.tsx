import { motion } from "framer-motion";
import { Camera, Video, Palette, Zap } from "lucide-react";

const services = [
  {
    name: "Photography",
    icon: Camera,
    description:
      "Creative photography services capturing branded images, lifestyle content, product imagery, and campaign visuals.",
    iconGradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-pink-900/30 hover:to-pink-800/20",
    cardColor: "bg-slate-800/50",
  },
  {
    name: "Videography",
    icon: Video,
    description:
      "Full-scale video production—from scripting and filming to post-production. Perfect for corporate events, social content, promos, and more",
    iconGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-blue-900/30 hover:to-purple-800/20",
    cardColor: "bg-slate-800/50",
  },
  {
    name: "Graphic Design",
    icon: Palette,
    description: "Designing visual identities that speak to your audience",
    iconGradient: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-cyan-900/30 hover:to-cyan-800/20",
    cardColor: "bg-slate-800/50",
  },
  {
    name: "Motion Graphics",
    icon: Zap,
    description:
      "Eye-catching motion graphics, branding visuals, and design assets tailored for digital and social impact",
    iconGradient: "bg-gradient-to-br from-orange-400 to-red-500",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-orange-900/30 hover:to-red-900/20",
    cardColor: "bg-slate-800/50",
  },
];

export function ServicesChapter() {
  return (
    <motion.section
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-800 via-blue-950/30 to-slate-700"
      style={{ aspectRatio: "16/9" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mobile-container px-4 s25:px-6 md:px-8 w-full pt-12 s25:pt-16 md:pt-20 short-screen-container short-screen-center">
        <div className="text-center mb-12 short-screen-header">
          <motion.h2
            className="mobile-text-2xl s25:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 s25:mb-4 md:mb-6 leading-tight px-2 short-screen-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="block text-white">
              OUR CREATIVE ARSENAL IS DIFFERENT
            </span>
            <span className="block animate-gradient-blue-purple font-bold">
              THAN ANYTHING ELSE
            </span>
          </motion.h2>

          <motion.p
            className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 font-light px-4 short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            Because we're not using everyone else's approach.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 short-screen-services">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className={`${service.cardColor} ${service.hoverGradient} border border-slate-700/50 rounded-lg md:rounded-xl p-3 md:p-6 text-center group cursor-pointer hover:border-slate-600 transition-all duration-300 aspect-square flex flex-col justify-center`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-2 md:mb-6 flex justify-center">
                <div
                  className={`w-10 h-10 md:w-16 md:h-16 ${service.iconGradient} rounded-lg md:rounded-xl flex items-center justify-center`}
                >
                  <service.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-3 text-white leading-tight">
                {service.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
