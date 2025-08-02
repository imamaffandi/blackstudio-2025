# Portfolio Section - Complete Implementation Guide

## Overview
Dokumentasi lengkap untuk membuat section portfolio dengan grid layout responsive, video modal popup, dan animasi Framer Motion. Section ini memiliki layout 16:9 aspect ratio dengan navigasi horizontal dan sistem responsive yang konsisten.

## Dependencies Required
```bash
npm install framer-motion lucide-react
```

## CSS Classes Required (Tailwind CSS)

### Responsive Utilities
```css
/* Mobile-first responsive system */
.mobile-container {
  padding: 0 1rem;
}

.mobile-text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.mobile-text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

/* Samsung S25 breakpoint */
@media (min-width: 375px) {
  .s25\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .s25\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .s25\:mb-4 { margin-bottom: 1rem; }
  .s25\:mb-8 { margin-bottom: 2rem; }
  .s25\:pt-16 { padding-top: 4rem; }
}

/* Short screen utilities (max-height: 667px) */
@media (max-height: 667px) {
  .short-screen-container {
    padding-top: 70px !important;
    padding-bottom: 30px !important;
  }
  
  .short-screen-center {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
  }
  
  .short-screen-title {
    font-size: clamp(1.5rem, 4vw, 2rem) !important;
    line-height: 1.2 !important;
    margin-bottom: 8px !important;
  }
  
  .short-screen-header {
    margin-bottom: 6px !important;
  }
  
  .short-screen-text {
    font-size: clamp(0.75rem, 2vw, 0.875rem) !important;
    line-height: 1.3 !important;
  }
  
  .short-screen-spacing {
    margin-bottom: 12px !important;
  }
  
  .short-screen-grid {
    max-height: 300px !important;
    gap: 8px !important;
  }
}

/* Gradient animations */
@keyframes gradient-cyan-green {
  0%, 100% { color: #06b6d4; }
  50% { color: #10b981; }
}

.animate-gradient-cyan-green {
  animation: gradient-cyan-green 3s ease-in-out infinite;
}
```

## Component Structure

### 1. Data Structure
```typescript
const portfolioItems = [
  {
    title: "Project Title",
    image: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    category: "Category Name",
    videoId: "YOUTUBE_VIDEO_ID"
  },
  // Add more items...
];
```

### 2. State Management
```typescript
import { useState } from "react";

const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
const [selectedTitle, setSelectedTitle] = useState<string>("");
```

### 3. Main Section Structure
```tsx
<motion.section 
  className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-700 via-cyan-950/25 to-slate-700" 
  style={{ aspectRatio: '16/9' }} 
  data-section="portfolio"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
```

### 4. Header Section
```tsx
<div className="text-center mb-6 short-screen-header">
  <motion.h2 
    className="mobile-text-3xl s25:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 s25:mb-4 leading-tight short-screen-title"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: false }}
  >
    <span className="block text-white">YOUR TITLE </span>
    <span className="animate-gradient-cyan-green font-bold">
      HIGHLIGHT
    </span>
  </motion.h2>
  
  <motion.p 
    className="mobile-text-base s25:text-base text-gray-300 max-w-2xl mx-auto mb-6 s25:mb-8 font-light short-screen-text short-screen-spacing"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: false }}
  >
    Your description text here
  </motion.p>
</div>
```

### 5. Portfolio Grid
```tsx
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
      <div className="aspect-video overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <Play className="w-12 h-12 text-white mb-2 mx-auto" />
            <span className="text-white font-semibold text-lg">View Project</span>
          </div>
        </div>
      </div>
      
      {/* Item Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
        <p className="text-gray-300 text-xs">{item.category}</p>
      </div>
    </motion.div>
  ))}
</div>
```

### 6. Video Modal Popup
```tsx
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
        <h3 className="text-white font-bold text-sm md:text-lg">{selectedTitle}</h3>
      </div>
    </motion.div>
  </div>
)}
```

## Complete Component Code

```tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";

const portfolioItems = [
  {
    title: "Project Title 1",
    image: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    category: "Category 1",
    videoId: "VIDEO_ID_1"
  },
  {
    title: "Project Title 2",
    image: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    category: "Category 2",
    videoId: "VIDEO_ID_2"
  },
  // Add more items as needed...
];

export function PortfolioChapter() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <motion.section 
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-700 via-cyan-950/25 to-slate-700" 
      style={{ aspectRatio: '16/9' }} 
      data-section="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mobile-container px-4 s25:px-6 md:px-8 w-full h-full flex flex-col justify-center pt-12 s25:pt-16 md:pt-20 short-screen-container short-screen-center">
        {/* Header Section */}
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
            <span className="animate-gradient-cyan-green font-bold">
              MAGIC
            </span>
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
              <div className="aspect-video overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Hover Overlay with View Project */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-white mb-2 mx-auto" />
                    <span className="text-white font-semibold text-lg">View Project</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-300 text-xs">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Pop-up */}
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
              <h3 className="text-white font-bold text-sm md:text-lg">{selectedTitle}</h3>
            </div>
          </motion.div>
        </div>
      )}

    </motion.section>
  );
}
```

## Key Features

1. **Responsive Grid Layout**: 2 kolom mobile, 3 kolom tablet, 4 kolom desktop
2. **YouTube Video Integration**: Menggunakan YouTube embed dengan autoplay
3. **Modal Popup System**: Video player dengan overlay dan close button
4. **Framer Motion Animations**: Smooth transitions dan hover effects
5. **Short Screen Support**: Optimized untuk layar pendek (≤667px)
6. **Samsung S25 Breakpoint**: Custom breakpoint untuk konsistensi mobile
7. **16:9 Aspect Ratio**: Maintained across all screen sizes
8. **Hover Effects**: Scale, translate, dan opacity transitions
9. **Gradient Text Animation**: CSS keyframes untuk animated text
10. **Touch-Friendly**: Mobile-optimized dengan proper touch targets

## Customization Tips

1. **Change Colors**: Ubah `from-slate-700 via-cyan-950/25 to-slate-700` untuk background gradient
2. **Modify Grid**: Sesuaikan `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` untuk layout grid
3. **Update Animation**: Customize `animate-gradient-cyan-green` untuk warna text berbeda
4. **Adjust Spacing**: Modify short-screen classes untuk spacing yang berbeda
5. **Video Source**: Ganti YouTube dengan video source lain jika diperlukan

## Usage Instructions for AI

**Prompt untuk AI lain:**

"Buatkan portfolio section dengan spesifikasi berikut: Grid layout responsive (2-3-4 kolom), YouTube video modal popup, Framer Motion animations, dark theme dengan gradient cyan-green text, aspect ratio 16:9, Samsung S25 mobile standard, short screen support (max-height 667px), hover effects dengan scale dan play button overlay. Gunakan exact code structure dari dokumentasi ini dan sesuaikan konten sesuai kebutuhan project."

**Critical Implementation Notes:**
- Pastikan semua CSS utilities ada di index.css
- Import framer-motion dan lucide-react
- Gunakan useState untuk video modal state
- Implement proper YouTube embed dengan autoplay
- Responsive breakpoints harus exact sesuai dokumentasi
- Short screen utilities wajib untuk konsistensi mobile
