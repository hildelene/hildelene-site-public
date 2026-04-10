# Hildelene Nautidesign Website

A modern, elegant, and fully responsive website for the Hildelene Nautidesign naval engineering team.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd hildelene-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📋 Features

✅ **Responsive Design** - Mobile-first, fully responsive on all devices  
✅ **Modern Components** - Reusable React components with TypeScript  
✅ **Beautiful UI** - Premium black, gold, and white color scheme  
✅ **Smooth Animations** - Elegant transitions and hover effects  
✅ **Mobile Menu** - Hamburger navigation for mobile devices  
✅ **News Carousel** - Responsive carousel (1/2/3 items per view)  
✅ **Contact Form** - Functional form with validation  
✅ **Project Gallery** - Grid layout for showcasing projects  
✅ **Sponsor Section** - Sponsorship tier options  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Performance** - Optimized next.js with Turbopack  

## 🎨 Design

### Colors
- **Navy Dark**: `#0B0B0B` - Primary background
- **Gold**: `#D4AF37` - Accent color
- **Cream**: `#F5F5F5` - Text/Light color

### Typography
- Font Family: Geist (Google Fonts)
- Clean, modern hierarchy
- Excellent readability

## 📁 Project Structure

```
app/
├── components/      # Reusable React components
├── data/           # Mock data (newsData, projectsData)
├── globals.css     # Global styles
├── layout.tsx      # Root layout
└── page.tsx        # Homepage
```

## 🔧 Customization

### Update News
Edit `app/data/newsData.ts` - add your news items with title, date, image, and description.

### Update Projects
Edit `app/data/projectsData.ts` - showcase your naval engineering projects.

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme.

### Update Contact Info
Edit `app/components/Contact.tsx` to add real email and contact details.

### Add Social Media Links
Update `app/components/Footer.tsx` and `app/components/Contact.tsx` with social URLs.

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production build
npm run lint     # Run ESLint
```

## 🌐 Sections

- **Navbar** - Navigation with mobile menu and Team Area button
- **Hero** - Full-screen hero with CTA buttons
- **News** - Horizontal carousel displaying latest news
- **About** - Team description with core values
- **Projects** - Grid showcase of naval engineering projects
- **Sponsors** - Sponsorship opportunities with tier options
- **Contact** - Contact form and information
- **Footer** - Links, social media, and copyright

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column layouts)
- **Tablet**: 640px - 1024px (2 column layouts)
- **Desktop**: > 1024px (3 column layouts)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
The project works with any Node.js hosting:
- Netlify
- AWS
- DigitalOcean
- Heroku
- Self-hosted servers

## 🎯 Next Steps

1. **Customize Content** - Update news and projects with real data
2. **Add Real Images** - Replace placeholder images with actual photos
3. **Connect Backend** - Integrate contact form with email service
4. **Add Analytics** - Implement Google Analytics or similar
5. **Set Up Domain** - Point your domain to the deployed site
6. **SSL Certificate** - Ensure HTTPS for security

## 📚 Documentation

See `DOCUMENTATION.md` for detailed information about:
- Architecture and structure
- Component documentation
- Color customization
- API integration guides
- Future enhancement ideas

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Turbopack** - Fast build bundler

## 💡 Tips

- Use Tailwind utility classes for styling
- Components are self-contained and reusable
- Data structures are API-ready
- Smooth animations without external libraries
- Mobile-first responsive design

## 📞 Support

For help with:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

## 📄 License

Created for Hildelene Nautidesign

---

**Ready to launch your boat to success!** ⚓🚀
