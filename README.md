# BlackStudio.id - Creative Production House Website

## Overview
Website modern untuk BlackStudio.id (CV. KREASI RUMAH HITAM), sebuah creative production house yang mengkhususkan diri dalam videografi, fotografi, desain grafis, dan motion graphics. Website ini menampilkan sistem navigasi infinite canvas yang inovatif dengan beberapa chapter yang menampilkan berbagai aspek bisnis.

## Tech Stack
- **Frontend**: React 18 dengan TypeScript
- **Build Tool**: Vite untuk development cepat dan build yang dioptimalkan
- **Styling**: Tailwind CSS dengan sistem desain custom
- **UI Components**: Shadcn/ui component library berdasarkan Radix UI primitives
- **Animations**: Framer Motion untuk transisi dan interaksi yang smooth
- **State Management**: TanStack Query untuk server state management
- **Routing**: Wouter untuk client-side routing yang ringan
- **Backend**: Node.js dengan Express.js
- **Database**: PostgreSQL dengan Drizzle ORM

## Installation

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Setup
1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
```bash
# Copy example env file
cp .env.example .env

# Add your database URL if using PostgreSQL
DATABASE_URL="your_database_url_here"
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start production server:
```bash
npm start
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── chapters/   # Section components (Hero, Portfolio, etc.)
│   │   │   ├── ui/         # Shadcn UI components
│   │   │   └── ...
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Page components
│   │   └── index.css       # Global styles
│   └── ...
├── server/                 # Backend Express.js application
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Storage interface
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema dan types
├── package.json            # Dependencies dan scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## Key Features

### Navigation System
- **Infinite Canvas**: Horizontal scrolling navigation antar chapter
- **Chapter-based Structure**: Lima section utama (Hero, Services, Portfolio, Clients, Contact)
- **Mini-map Navigator**: Navigasi visual dots di sisi kanan
- **Keyboard Controls**: Arrow keys untuk navigasi
- **Mouse Drag**: Drag-to-navigate functionality

### UI Design System
- **Color Palette**: Custom black, charcoal, dan gold theme
- **Typography**: Montserrat font family
- **Dark Theme**: Primary dark mode dengan elegant color scheme
- **Responsive Design**: Mobile-first approach dengan Tailwind breakpoints
- **Samsung S25 Standard**: Mobile layout standard untuk konsistensi responsive

### Form Handling
- **Contact Form**: Full-stack contact submission dengan validasi
- **WhatsApp Integration**: Direct WhatsApp messaging functionality
- **Toast Notifications**: User feedback untuk form submissions
- **Input Validation**: Zod schemas untuk type-safe form validation

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build untuk production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Database schema push

## Responsive Design

### Breakpoints
- **Mobile**: Default (Samsung S25 standard)
- **S25**: 375px+ (Samsung S25 specific)
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Short Screen**: max-height 667px (untuk landscape mobile/tablet)

### Mobile Optimization
- Consistent spacing dan text sizing
- Touch-friendly navigation
- Optimized untuk Samsung S25 sebagai mobile standard
- Full responsive grid layouts

## Components Documentation

### Portfolio Section
Lihat `PORTFOLIO_SECTION_GUIDE.md` untuk dokumentasi lengkap implementasi Portfolio section yang dapat direplikasi untuk project lain.

### Key Components
- `InfiniteCanvas` - Main navigation wrapper
- `MiniMapNavigator` - Right-side navigation dots
- `HeroChapter` - Landing section
- `PortfolioChapter` - Portfolio grid dengan video modal
- `AboutChapter` - Company info dengan interactive map
- `ContactChapter` - Contact form dan WhatsApp integration

## Customization

### Colors
Edit `tailwind.config.ts` dan `client/src/index.css` untuk mengubah color scheme.

### Content
Update content di masing-masing chapter component di `client/src/components/chapters/`.

### Animations
Modify Framer Motion animations di component files atau CSS animations di `index.css`.

## Deployment

### Replit Deployment
Project ini sudah dikonfigurasi untuk Replit. Click tombol Deploy di Replit interface.

### Manual Deployment
1. Build project: `npm run build`
2. Upload `dist/` folder ke hosting provider
3. Configure environment variables
4. Setup database connection jika diperlukan

## Environment Variables

```bash
# Database (optional, fallback ke in-memory storage)
DATABASE_URL="postgresql://..."

# Development
NODE_ENV="development"
```

## Support

Untuk pertanyaan atau support, silakan hubungi:
- Website: [blackstudio.id](https://blackstudio.id)
- Email: info@blackstudio.id
- WhatsApp: +62 xxx xxxx xxxx

## License

© 2025 BlackStudio.id - CV. Kreasi Rumah Hitam. All rights reserved.