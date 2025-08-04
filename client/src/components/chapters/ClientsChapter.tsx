import { motion } from "framer-motion";
import { Users, Trophy, Star, Target, Video, Camera } from "lucide-react";
import { brand } from "../../assets/brands";

import { useState, useEffect } from "react";

const stats = [
  {
    icon: Users,
    number: 45,
    suffix: "+",
    label: "Digital Campaigns",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Video,
    number: 15,
    suffix: "+",
    label: "Corporate Films",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Camera,
    number: 720,
    suffix: "+",
    label: "Event Coverage",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: Trophy,
    number: 90,
    suffix: "+",
    label: "Brand Identities",
    color: "from-yellow-400 to-orange-500",
  },
];

// Counter component with counting animation
function CounterComponent({
  targetNumber,
  suffix = "",
  duration = 2000,
  inView,
}: {
  targetNumber: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targetNumber, duration, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Create array of 20 placeholder client logos (2 rows x 10 columns)
// const clientLogos = Array.from({ length: 20 }, (_, index) => ({
//   id: index + 1,
//   name: `Client ${index + 1}`,
//   // Using placeholder squares for now - can be replaced with actual logos
//   logo: `https://via.placeholder.com/80x80/ffffff/cccccc?text=${index + 1}`
// }));

export function ClientsChapter() {
  const [statsInView, setStatsInView] = useState(false);

  return (
    <motion.section
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-700 via-purple-900/20 to-slate-700"
      style={{ aspectRatio: "16/9" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mobile-container px-4 s25:px-6 md:px-8 w-full h-full flex flex-col justify-center pt-12 s25:pt-16 md:pt-20 pb-6 s25:pb-8 md:py-16 short-screen-container short-screen-center">
        {/* Header - Area Kuning */}
        <div className="text-center mb-12 md:mb-16 short-screen-header">
          <motion.h2
            className="mobile-text-2xl s25:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 s25:mb-4 leading-tight short-screen-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="text-white">TRUSTED BY </span>
            <span className="animate-gradient-purple-pink font-bold">
              AMAZING CLIENTS
            </span>
          </motion.h2>

          <motion.p
            className="mobile-text-base s25:text-base text-gray-300 max-w-2xl mx-auto font-light short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            Brands that believe in our creative vision
          </motion.p>
        </div>

        {/* Stats - Area Merah */}
        <motion.div
          className="grid grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16 max-w-4xl mx-auto short-screen-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => setStatsInView(true)}
          onViewportLeave={() => setStatsInView(false)}
          viewport={{ once: false, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="mb-2 md:mb-3 flex justify-center">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2">
                <CounterComponent
                  targetNumber={stat.number}
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                  inView={statsInView}
                />
              </div>
              <div className="text-xs md:text-sm text-gray-300 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Grid */}
        <div className="w-full">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2 max-w-4xl mx-auto">
            {brand.map((client, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white/2 rounded-lg flex items-center justify-center hover:bg-white/15 transition-colors duration-300 cursor-pointer border border-white/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-20 h-20 object-contain p-1.5"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
