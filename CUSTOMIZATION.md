# Customization Guide - Hildelene Nautidesign Website

## Quick Customization Checklist

- [ ] Update company email in Contact section
- [ ] Add real social media links (LinkedIn, Twitter, Instagram)
- [ ] Replace placeholder images with real photos
- [ ] Update news with real company announcements
- [ ] Replace projects with actual engineering projects
- [ ] Update sponsor companies and logos
- [ ] Add team member information
- [ ] Set up contact form backend
- [ ] Configure analytics
- [ ] Set up custom domain

## 1. Update Contact Information

### Email Address
**File**: `app/components/Contact.tsx` (Line ~230)

Find:
```typescript
<p className="text-cream/70">info@hildelenenautidesign.com</p>
```

Replace with:
```typescript
<p className="text-cream/70">your-email@yourcompany.com</p>
```

### Physical Address
**File**: `app/components/Contact.tsx` (Line ~236)

Find:
```typescript
<p className="text-cream/70">Naval Engineering Center</p>
<p className="text-cream/50 text-sm">Maritime District</p>
```

Replace with your actual location.

## 2. Add Social Media Links

### Footer & Contact Social Links
**File**: `app/components/Footer.tsx` and `app/components/Contact.tsx`

Update the href attributes:

```typescript
// LinkedIn
<a href="https://linkedin.com/company/your-company" ...>

// Twitter
<a href="https://twitter.com/your-handle" ...>

// Instagram
<a href="https://instagram.com/your-profile" ...>

// YouTube
<a href="https://youtube.com/@your-channel" ...>
```

## 3. Customize News Section

### Add/Edit News Items
**File**: `app/data/newsData.ts`

```typescript
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Your News Title',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-xxx',  // Your image URL
    description: 'News description goes here...',
    link: '/news/article-slug',  // Optional link
  },
  // Add more items
];
```

### Replace Images
Upload your images to a service like:
- **Unsplash** (free, fast CDN)
- **Pexels** (free stock photos)
- **Your own server** (via Next.js Image component)
- **Cloudinary** (free tier available)
- **Imgur** (simple hosting)

## 4. Customize Projects Section

### Add/Edit Projects
**File**: `app/data/projectsData.ts`

```typescript
export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Boat Name 2026',
    year: '2026',
    description: 'Full description of the project and its achievements...',
    image: 'https://your-image-url.com/image.jpg',
    category: 'Racing',  // e.g., Racing, Technology, Research, etc.
  },
  // Add more projects
];
```

## 5. Change Colors

### Primary Color Scheme
**File**: `tailwind.config.ts`

```typescript
theme: {
  extend: {
    colors: {
      'navy-dark': '#0B0B0B',   // Change to your primary dark
      'gold': '#D4AF37',         // Change to your accent
      'cream': '#F5F5F5',        // Change to your light color
    },
  },
}
```

### In CSS
**File**: `app/globals.css`

```css
:root {
  --navy-dark: #0b0b0b;
  --gold: #d4af37;
  --cream: #f5f5f5;
}
```

## 6. Update Sponsors Section

### Add Sponsor Logos
**File**: `app/components/Sponsors.tsx` (Line ~30-45)

Replace the placeholder grid with actual logo images:

```typescript
{[
  { name: 'Sponsor 1', logo: 'https://...' },
  { name: 'Sponsor 2', logo: 'https://...' },
  // ... more sponsors
].map((sponsor) => (
  <div key={sponsor.name}>
    <img src={sponsor.logo} alt={sponsor.name} />
  </div>
))}
```

## 7. Update About Section

### Edit Mission & Values
**File**: `app/components/About.tsx`

Update the paragraphs with your team's actual mission and values:

```typescript
<p className="text-cream/80 text-lg mb-6 leading-relaxed">
  Your actual mission statement here...
</p>
```

### Update Core Values
Find the values grid and update:

```typescript
{
  tier: 'Innovation',
  benefits: ['Your', 'custom', 'values']
}
```

## 8. Connect Contact Form to Backend

### Option 1: EmailJS (Free)
1. Sign up at https://emailjs.com
2. Create an email service
3. Update Contact.tsx:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

### Option 2: FormSubmit.co (Free, No Backend)
```typescript
<form action="https://formsubmit.co/your@email.com" method="POST">
  {/* form fields */}
</form>
```

### Option 3: Custom Backend
Update the handleSubmit function in `app/components/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    // Handle response
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 9. Update Navigation Links

### Team Area Button
**File**: `app/components/Navbar.tsx` (Line ~57)

Find:
```typescript
<a href="#" className="...">Team Area</a>
```

Replace:
```typescript
<a href="https://yourteamsite.com" className="...">Team Area</a>
```

### Update Navigation Links
Update hrefs in Navbar.tsx to point to actual pages.

## 10. Customize Metadata

### Page Title & Description
**File**: `app/layout.tsx` (Line ~9-16)

```typescript
export const metadata: Metadata = {
  title: 'Your Team Name - Naval Engineering',
  description: 'Your custom description here...',
  keywords: 'your, custom, keywords',
  authors: [{ name: 'Your Team Name' }],
};
```

## 11. Update Sponsor Tiers

### Customize Benefits
**File**: `app/components/Sponsors.tsx` (Line ~85-120)

```typescript
{
  tier: 'Gold Sponsor',
  price: 'Custom',
  benefits: [
    'Your benefit here',
    'Another benefit',
    // ... more benefits
  ],
}
```

## 12. Add Team Members

### Create New Component
**File**: `app/components/Team.tsx` (new file)

```typescript
export default function Team() {
  return (
    <section className="py-20 bg-navy-dark">
      {/* Team member cards */}
    </section>
  );
}
```

Then import and add to `app/page.tsx`.

## 13. Configure Analytics

### Google Analytics
1. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 14. Add Blog/News Section

### Create Blog Component
Create `app/components/Blog.tsx` for full articles.

Then update `app/data/newsData.ts` to include article slugs:

```typescript
link: '/blog/article-title'
```

## 15. Mobile Optimization Tips

### Test on Different Devices
```bash
npm run dev
# Open browser DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M)
```

### Monitor Core Web Vitals
- Install Lighthouse (Chrome DevTools)
- Check Performance, Accessibility, Best Practices

### Images
- Use Next.js Image component for optimization
- Compress images before uploading
- Use modern formats (WebP)

## 16. Performance Optimization

### Replace Placeholder Images
Images from Unsplash work but are slower. Optimize by:

1. Download images locally
2. Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image 
  src="/images/my-image.jpg" 
  alt="Description"
  width={400}
  height={300}
  priority
/>
```

## 17. Build for Production

```bash
npm run build
npm start
```

Verify no errors appear during build.

## 18. Deploy Online

### On Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### On Other Platforms
- Push to GitHub
- Connect to Netlify or other hosting
- Configure domain and SSL

## 19. SEO Checklist

- [ ] Custom title and meta description
- [ ] Mobile responsive (test on actual phones)
- [ ] Fast loading (Lighthouse score >90)
- [ ] No broken links
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Open Graph image

## 20. Common Customizations

### Change Font
Edit `app/layout.tsx` and `tailwind.config.ts`

### Add Dark/Light Mode
Tailwind CSS supports this natively

### Multi-language Support
Use `next-intl` library

### Add Search
Integrate with Algolia or similar

### Add Blog/CMS
Integrate with Contentful, Sanity, etc.

---

## Quick Reference

| What to Change | Where | File |
|---|---|---|
| Email address | Contact section | `Contact.tsx` |
| News items | News carousel | `newsData.ts` |
| Projects | Projects grid | `projectsData.ts` |
| Colors | Everywhere | `tailwind.config.ts` |
| Social links | Footer | `Footer.tsx` |
| Team Area link | Navbar | `Navbar.tsx` |
| Page title | Browser tab | `layout.tsx` |
| Sponsor info | Sponsors section | `Sponsors.tsx` |
| About text | About section | `About.tsx` |

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

Happy customizing! ⚓
