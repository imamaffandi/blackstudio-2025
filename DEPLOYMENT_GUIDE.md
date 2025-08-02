# Deployment Guide - BlackStudio.id Website

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Edit .env file dengan database URL jika diperlukan
# DATABASE_URL="your_database_url_here"
```

### 3. Development
```bash
npm run dev
```

### 4. Production Build
```bash
npm run build
npm start
```

## Deployment Options

### 1. Replit Deployment (Recommended)
1. Upload semua files ke Replit project
2. Install dependencies otomatis
3. Click Deploy button
4. Configure environment variables di Secrets tab

### 2. Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
```

### 3. Netlify Deployment
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables di Netlify dashboard

### 4. VPS/Server Deployment
```bash
# Clone repository
git clone <repository_url>
cd blackstudio-website

# Install dependencies
npm install

# Build
npm run build

# Start dengan PM2
pm2 start npm --name "blackstudio" -- start
```

## Environment Variables

### Required
- `NODE_ENV` - Environment (development/production)

### Optional
- `DATABASE_URL` - PostgreSQL connection string
- `VITE_GA_MEASUREMENT_ID` - Google Analytics measurement ID

## Database Setup

### PostgreSQL (Production)
```sql
-- Create database
CREATE DATABASE blackstudio;

-- Run migrations (jika ada)
npm run db:push
```

### In-Memory (Development)
Project akan otomatis menggunakan in-memory storage jika DATABASE_URL tidak ada.

## Troubleshooting

### Common Issues

1. **Build Error - Missing Dependencies**
```bash
npm install
npm run build
```

2. **Database Connection Error**
- Check DATABASE_URL format
- Ensure database server running
- Fallback ke in-memory storage akan otomatis

3. **Port Already in Use**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=3000 npm start
```

4. **TypeScript Errors**
```bash
npm run check
```

## Performance Optimization

### 1. Image Optimization
- Gunakan WebP format untuk images
- Implement lazy loading untuk portfolio items
- Optimize image sizes untuk different screen sizes

### 2. Code Splitting
- Vite otomatis handle code splitting
- Consider dynamic imports untuk large components

### 3. Caching
- Implement service worker untuk caching
- Use CDN untuk static assets

## Monitoring

### 1. Analytics
- Setup Google Analytics dengan VITE_GA_MEASUREMENT_ID
- Track user interactions dan page views

### 2. Error Tracking
- Implement Sentry untuk error monitoring
- Setup alerts untuk production errors

### 3. Performance
- Use Lighthouse untuk performance audits
- Monitor Core Web Vitals

## Maintenance

### 1. Dependencies Update
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Update major versions carefully
npm install package@latest
```

### 2. Security
```bash
# Audit vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### 3. Backup
- Regular database backups
- Code repository backups
- Configuration backups

## Support

Untuk technical support:
1. Check documentation
2. Review error logs
3. Contact development team
4. Create GitHub issue (jika open source)