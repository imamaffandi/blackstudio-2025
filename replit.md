# BlackStudio.id - Creative Production House Portfolio

## Overview

This is a modern web application for BlackStudio.id (CV. KREASI RUMAH HITAM), a creative production house specializing in videography, photography, graphic design, and motion graphics. The application features an innovative infinite canvas navigation system with multiple chapters showcasing different aspects of the business.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints for contact form and WhatsApp integration
- **Development**: Hot reload with Vite integration in development mode

### Database & Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (via Neon Database)
- **Schema**: Type-safe database schema with Zod validation
- **Development Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Navigation System
- **Infinite Canvas**: Horizontal scrolling navigation between chapters
- **Chapter-based Structure**: Five main sections (Hero, Services, Portfolio, Clients, Contact)
- **Mini-map Navigator**: Visual navigation dots on the right side
- **Keyboard Controls**: Arrow keys for navigation
- **Mouse Drag**: Drag-to-navigate functionality

### UI Design System
- **Color Palette**: Custom black, charcoal, and gold theme
- **Typography**: Montserrat font family
- **Dark Theme**: Primary dark mode with elegant color scheme
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Form Handling
- **Contact Form**: Full-stack contact submission with validation
- **WhatsApp Integration**: Direct WhatsApp messaging functionality
- **Toast Notifications**: User feedback for form submissions
- **Input Validation**: Zod schemas for type-safe form validation

## Data Flow

1. **Client Request**: React components fetch data using TanStack Query
2. **API Layer**: Express.js handles RESTful API endpoints
3. **Data Validation**: Zod schemas validate incoming data
4. **Storage Layer**: Abstract storage interface with in-memory fallback
5. **Database**: Drizzle ORM manages PostgreSQL interactions
6. **Response**: JSON responses with proper error handling

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)
- `POST /api/whatsapp` - Generate WhatsApp message URL

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **framer-motion**: Animation library
- **wouter**: Lightweight routing
- **zod**: Runtime type validation

### UI Components
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library
- **lucide-react**: Icon library

### Development Tools
- **typescript**: Static type checking
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Type Checking**: TypeScript compilation check before build
4. **Asset Optimization**: Vite handles code splitting and optimization

### Environment Configuration
- **Development**: Hot reload with Vite middleware
- **Production**: Static file serving with Express
- **Database**: Environment-based DATABASE_URL configuration
- **Error Handling**: Runtime error overlays in development

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run check`: TypeScript type checking
- `npm run db:push`: Database schema push

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for DATABASE_URL
- Static file serving capability for frontend assets