# Component Reference Guide

## Overview
This guide provides quick reference information for all components in the Hildelene Nautidesign website.

---

## 1. Navbar Component
**File**: `app/components/Navbar.tsx`  
**Type**: Client Component (`'use client'`)

### Features
- Fixed position header with semi-transparent background
- Responsive navigation (desktop menu + mobile hamburger)
- Logo link to home
- Navigation links: Home, About, Projects, News, Contact
- "Team Area" CTA button with hover scale effect
- Mobile menu toggle with smooth animations

### Props
None (standalone navigation)

### Key Methods
- `useState` - Manage mobile menu open/close
- `useEffect` - Handle window resize for responsive behavior

### Styling
- Fixed top positioning (z-50)
- Tailwind classes: navy-dark, gold, cream colors
- Hover transitions on all links

---

## 2. Hero Component
**File**: `app/components/Hero.tsx`  
**Type**: Server Component

### Features
- Full-screen hero section (min-h-screen)
- Gradient background effect with blurred gold circles
- Large animated title with brand name
- Mission subtitle
- Two CTA buttons: "Learn More" and "Become a Sponsor"
- Animated scroll indicator at bottom

### Props
None

### Styling
- Background gradient with opacity effects
- Flexbox centering
- Animation: `animate-fade-in` and `animate-bounce`

### CTA Buttons
- Primary: Solid gold background with hover scale
- Secondary: Gold border with hover fill

---

## 3. NewsCard Component
**File**: `app/components/NewsCard.tsx`  
**Type**: Server Component

### Props
```typescript
interface NewsCardProps {
  news: NewsItem;
}
```

### Features
- Image with hover zoom effect
- News date in gold text
- Title with hover color change
- Description text (truncated to 3 lines)
- "Read more" link with arrow animation

### NewsItem Interface
```typescript
interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  link?: string;
}
```

### Styling
- Border: gold/20 opacity (hover: gold)
- Image hover: scale-110 transition
- Gradient overlay on hover

---

## 4. NewsCarousel Component
**File**: `app/components/NewsCarousel.tsx`  
**Type**: Client Component

### Features
- Responsive carousel (1 mobile, 2 tablet, 3 desktop)
- Previous/Next navigation arrows
- Dot indicators for carousel position
- Auto-responsive based on window size
- Smooth slide transitions (500ms)

### Props
None

### Data
- Uses `newsData` from `app/data/newsData.ts`
- Typically shows 4 news items

### State Management
- `currentIndex` - Current slide position
- `itemsPerView` - Items visible based on screen size

### Breakpoints
- Mobile: 1 item (< 768px)
- Tablet: 2 items (768px - 1024px)
- Desktop: 3 items (> 1024px)

---

## 5. About Component
**File**: `app/components/About.tsx`  
**Type**: Server Component

### Features
- Two-column layout (text & image)
- Team description and mission
- Four core value cards:
  - Innovation
  - Excellence
  - Collaboration
  - Sustainability
- Image with overlay and floating stat box
- Responsive grid layout

### Styling
- Grid: `grid-cols-1 lg:grid-cols-2`
- Value cards: border gold/20, hover border-gold
- Floating stat: absolute positioning with shadow

---

## 6. ProjectCard Component
**File**: `app/components/ProjectCard.tsx`  
**Type**: Server Component

### Props
```typescript
interface ProjectCardProps {
  project: Project;
}
```

### Features
- Image with hover zoom
- Category badge in gold
- Project year in small text
- Project name and description
- "Learn more" link with arrow

### Project Interface
```typescript
interface Project {
  id: number;
  name: string;
  year: string;
  description: string;
  image: string;
  category: string;
}
```

### Styling
- Similar to NewsCard
- Category badge: `bg-gold text-navy-dark`
- Image hover: scale-110

---

## 7. Projects Component
**File**: `app/components/Projects.tsx`  
**Type**: Server Component

### Features
- Responsive grid layout (1/2/3 columns)
- Section header with gold underline
- 6 project cards from ProjectCard component
- Uses `projectsData` from `app/data/projectsData.ts`

### Grid Breakpoints
- Mobile: 1 column (md:grid-cols-2)
- Tablet: 2 columns (lg:grid-cols-3)
- Desktop: 3 columns

---

## 8. Sponsors Component
**File**: `app/components/Sponsors.tsx`  
**Type**: Server Component

### Features
- Logo placeholder grid (8 slots)
- Call-to-action section for new sponsors
- Three sponsorship tier cards:
  1. Gold Sponsor (highest tier)
  2. Silver Sponsor (mid tier)
  3. Bronze Sponsor (entry tier)
- Each tier displays custom benefits with checkmarks

### Tier Information
Each tier has:
- Tier name
- Price (Custom)
- List of benefits
- Hover effects

### Styling
- Logo grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Placeholder style: dashed border, hover to solid gold

---

## 9. Contact Component
**File**: `app/components/Contact.tsx`  
**Type**: Client Component

### Features
- Contact information section:
  - Email address
  - Physical location
  - Social media links
  - Quick links
- Contact form with validation:
  - Name input
  - Email input
  - Subject dropdown (sponsorship, partnership, technical, media, other)
  - Message textarea
  - Submit button
- Form success feedback
- Auto-reset after 3 seconds

### Form State
```typescript
{
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

### Form Features
- Required field validation
- Success message display
- 5-second auto-reset
- Focus styles on inputs

### Contact Info
- Email: info@hildelenenautidesign.com (placeholder)
- Location: Naval Engineering Center
- Social: LinkedIn, Twitter, Instagram, Facebook

---

## 10. Footer Component
**File**: `app/components/Footer.tsx`  
**Type**: Server Component

### Features
- Four-column footer layout:
  1. Brand description
  2. Navigation links
  3. Resources links
  4. Social media connect
- Gradient divider line
- Copyright notice with dynamic year
- Bottom links: Privacy, Terms, Sitemap
- Scroll-to-top button

### Sections
- **Quick Links**: Home, About, Projects, News
- **Resources**: Team Area, Documentation, Blog, Careers
- **Connect**: LinkedIn, Twitter, Instagram, YouTube

### Styling
- Grid layout responsive
- Links: cream/50 hover to gold
- Scroll-to-top: gold background with hover scale

---

## 11. Page Component
**File**: `app/page.tsx`  
**Type**: Server Component (Root)

### Structure
```
<div> (flex col, min-h-screen)
  <Navbar />
  <main>
    <Hero />
    <NewsCarousel />
    <About />
    <Projects />
    <Sponsors />
    <Contact />
  </main>
  <Footer />
</div>
```

### Props
None

---

## Data Files

### newsData.ts
**File**: `app/data/newsData.ts`

```typescript
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  link?: string;
}

export const newsData: NewsItem[] = [...]
```

Contains 4 sample news items with:
- IDs (1-4)
- Titles and dates
- Images from Unsplash
- Descriptions
- Optional links

### projectsData.ts
**File**: `app/data/projectsData.ts`

```typescript
export interface Project {
  id: number;
  name: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

export const projectsData: Project[] = [...]
```

Contains 6 sample projects with:
- IDs (1-6)
- Names and years
- Categories (Racing, Technology, Sustainability, Research, Engineering, Innovation)
- Descriptions
- Images from Unsplash

---

## Styling Patterns

### Color Usage
- **Navy Dark (#0B0B0B)**: Backgrounds
- **Gold (#D4AF37)**: Highlights, accents, buttons
- **Cream (#F5F5F5)**: Text, light elements

### Common Classes
- Text: `text-cream`, `text-gold`, `text-cream/70`, `text-cream/50`
- Borders: `border-gold/20`, `border-gold` (hover)
- Background: `bg-navy-dark`, `bg-navy-dark/50`
- Hover: `hover:text-gold`, `hover:scale-105`, `hover:bg-gold`

### Animations
- `animate-fade-in` - Opacity transition
- `animate-slide-in-up` - Slide up from bottom
- `animate-bounce` - Bouncing scroll indicator
- `-translate-y-1/2` - Vertical centering
- `transition-all duration-300` - General transitions

---

## Component Dependencies

```
page.tsx
├── Navbar (client)
├── Hero (server)
├── NewsCarousel (client)
│   └── NewsCard (server) x4
├── About (server)
├── Projects (server)
│   └── ProjectCard (server) x6
├── Sponsors (server)
├── Contact (client)
│   └── Contact form logic
└── Footer (server)

Data Layer:
├── newsData.ts
└── projectsData.ts
```

---

## Performance Considerations

### Optimizations Already Implemented
- ✅ Static generation (Server components by default)
- ✅ No external UI libraries (pure Tailwind)
- ✅ Responsive images (use URLs, can upgrade to Next.js Image)
- ✅ CSS utilities only (no inline styles)
- ✅ Lazy carousel (only processes visible items)

### Recommended Future Optimizations
- [ ] Convert image URLs to Next.js Image component
- [ ] Add image lazy-loading
- [ ] Implement caching strategy for newsData/projectsData
- [ ] Add dynamic imports for below-fold components
- [ ] Enable ISR (Incremental Static Regeneration)

---

## Testing the Components

### Test Mobile Responsiveness
```bash
npm run dev
# Open DevTools (F12) > Device Toolbar (Ctrl+Shift+M)
# Resize to test breakpoints
```

### Test Carousel
- Click left/right arrows
- Click dot indicators
- Resize window to test responsive behavior

### Test Form
- Fill out contact form
- Test required field validation
- Submit and check success message

### Test Animations
- Hover over buttons
- Scroll page
- Observe smooth transitions

---

## Troubleshooting

### Component Not Showing
1. Check if imported in `page.tsx`
2. Verify file names match imports
3. Check for CSS class typos

### Styling Not Applied
1. Ensure `globals.css` is imported
2. Check for conflicting Tailwind classes
3. Verify tailwind.config.ts includes component files

### Layout Issues
1. Check responsive breakpoints
2. Test on actual mobile device
3. Use DevTools to inspect element styles

---

This reference guide helps developers quickly understand each component's purpose, props, and implementation details.
