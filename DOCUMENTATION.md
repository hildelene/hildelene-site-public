# Hildelene Nautidesign Website Documentation

## Project Overview
A modern, responsive website for the Hildelene Nautidesign naval engineering team built with Next.js, React, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16.2.3 with App Router
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Geist Family

## Project Structure

```
hildelene-site/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with mobile menu
│   │   ├── Hero.tsx             # Hero section with CTA buttons
│   │   ├── NewsCarousel.tsx      # Responsive news carousel
│   │   ├── NewsCard.tsx          # Individual news card component
│   │   ├── About.tsx             # Team about section with core values
│   │   ├── Projects.tsx          # Projects grid section
│   │   ├── ProjectCard.tsx       # Individual project card component
│   │   ├── Sponsors.tsx          # Sponsors section with tiers
│   │   ├── Contact.tsx           # Contact form and info section
│   │   └── Footer.tsx            # Footer with links and social media
│   ├── data/
│   │   ├── newsData.ts           # Mock news data (API-ready)
│   │   └── projectsData.ts       # Mock projects data (API-ready)
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage combining all sections
│   └── globals.css               # Global styles and animations
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration with custom colors
├── next.config.ts                # Next.js configuration
└── tsconfig.json                 # TypeScript configuration

```

## Color Scheme
- **Primary Dark**: #0B0B0B (navy-dark)
- **Accent Gold**: #D4AF37 (gold)
- **Light/Text**: #F5F5F5 (cream)

## Pages and Sections

### 1. Navbar
- **Features**:
  - Fixed top navigation with logo
  - Desktop menu with links
  - Mobile hamburger menu (responsive)
  - "Team Area" CTA button
  - Smooth transitions and hover effects

### 2. Hero Section
- **Features**:
  - Full-screen hero with gradient background
  - Large title with brand name
  - Mission subtitle
  - Two CTA buttons: "Learn More" and "Become a Sponsor"
  - Animated scroll indicator
  - Responsive padding and typography

### 3. News Carousel
- **Features**:
  - Responsive carousel (1 card mobile, 2 tablet, 3 desktop)
  - Previous/Next navigation buttons
  - Dot indicators for navigation
  - NewsCard components with images, dates, and descriptions
  - Hover effects and smooth transitions
  - Mock data structure ready for API integration

### 4. About Section
- **Features**:
  - Team description and mission statement
  - Four core values cards (Innovation, Excellence, Collaboration, Sustainability)
  - Image with overlay
  - Floating stat box (50+ Team Members)
  - Two-column layout (responsive)

### 5. Projects Section
- **Features**:
  - 6 project cards in responsive grid (1 col mobile, 2 tablet, 3 desktop)
  - Category badges on each card
  - Project year, name, and description
  - Image hover zoom effect
  - Mock data structure ready for API integration

### 6. Sponsors Section
- **Features**:
  - Logo placeholder grid (8 slots)
  - Call-to-action box for new sponsors
  - Three sponsorship tiers with benefits:
    - Gold Sponsor
    - Silver Sponsor
    - Bronze Sponsor
  - Hover effects and borders

### 7. Contact Section
- **Features**:
  - Contact information (email, location, social media)
  - Functional contact form with fields:
    - Name
    - Email
    - Subject (dropdown)
    - Message
  - Form validation and success feedback
  - Quick links section
  - Responsive two-column layout

### 8. Footer
- **Features**:
  - Quick links organized in columns
  - Resources and navigation links
  - Social media links
  - Copyright notice with dynamic year
  - Privacy/Terms links
  - Scroll-to-top button

## Customization Features

### Colors
Edit `tailwind.config.ts` to change the primary colors:
```typescript
extend: {
  colors: {
    'navy-dark': '#0B0B0B',
    'gold': '#D4AF37',
    'cream': '#F5F5F5',
  },
}
```

### News Data
Update `app/data/newsData.ts` with your news:
```typescript
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Your Title',
    date: 'Date',
    image: 'URL',
    description: 'Description',
    link: '#',
  },
  // ... more items
];
```

### Projects Data
Update `app/data/projectsData.ts` with your projects:
```typescript
export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Project Name',
    year: '2026',
    description: 'Description',
    image: 'URL',
    category: 'Category',
  },
  // ... more items
];
```

## Features & Animations

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide In Up**: Elements sliding in from bottom
- **Hover Effects**: Scale and color transitions
- **Smooth Scroll**: Page scroll behavior
- **Bounce Effect**: Scroll indicator

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Dynamic component sizing based on viewport
- Touch-friendly buttons and spacing

### Performance Optimizations
- Next.js Image optimization ready
- Static generation where possible
- Code-splitting by route
- CSS utility classes (no inline styles)

## Running the Project

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Future Enhancements

### API Integration
The data structures are designed to easily connect to:
- REST APIs
- GraphQL
- CMS platforms (Contentful, Sanity, etc.)
- Headless CMS solutions

### Form Backend
The contact form is ready to integrate with:
- Email service (SendGrid, Mailgun)
- Backend API endpoints
- Webhooks

### Additional Features to Consider
- Dark/Light theme toggle
- Multi-language support
- Blog section with full articles
- Team member profiles
- Event calendar
- Image gallery/lightbox
- Newsletter signup
- Search functionality
- Analytics integration

## Customization Tips

### Changing Fonts
Edit font imports in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';
```

### Adding New Sections
1. Create component in `app/components/`
2. Import in `app/page.tsx`
3. Add to main render
4. Style with Tailwind utilities

### External Links
- "Team Area" button: Update href in Navbar
- Social media: Update links in Footer
- Navigation anchors: Update hrefs in Navbar

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment Options
- **Vercel** (Recommended - Zero-config)
- **Netlify**
- **AWS**
- **Docker containers**
- **Self-hosted VPS**

## SEO Features
- Meta tags (title, description)
- Open Graph tags
- Mobile-friendly viewport
- Semantic HTML structure
- Fast Core Web Vitals

## License
Created for Hildelene Nautidesign

## Support
For questions about the website, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev
