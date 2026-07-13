# L'Encore — Premium Dessert Café Website

Ahmedabad's most elegant dessert destination. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

### Core
- **Luxury Hero** — Full-screen animated hero with premium typography
- **Brand Story** — Elegant philosophy section with feature cards
- **Featured Menu** — Filterable menu with categories, search, and WhatsApp ordering
- **Masonry Gallery** — Pinterest-style gallery with lightbox
- **Instagram Feed** — Live-style feed with hover effects
- **Customer Reviews** — Animated testimonial slider
- **Why Choose Us** — Six-reason feature grid
- **Visit Us** — Google Maps embed with contact details
- **FAQ** — Animated accordion
- **Blog** — SEO-optimized blog section
- **Footer** — Premium multi-column footer

### Premium Features
- **AI Chatbot** — FAQ and reservation chatbot
- **Exit-Intent Popup** — Discount capture on exit
- **Floating WhatsApp Button** — One-click WhatsApp ordering
- **Floating Reservation CTA** — Persistent booking prompt
- **Today's Bestseller** — Daily highlight section
- **Dessert of the Week** — Spotlight section
- **Customer Photo Wall** — Social proof section
- **Quick Actions** — Digital menu, download, Swiggy/Zomato, gift cards
- **Newsletter Signup** — Email capture
- **Multi-Language** — English, Hindi, Gujarati
- **PWA Support** — Installable on mobile devices
- **Dark Mode** — Premium dark theme with CSS variables
- **Admin Panel** — Manage menu, reviews, blog posts

### SEO & Performance
- **Schema.org** — Restaurant, Review, FAQ, Breadcrumb, LocalBusiness schemas
- **OpenGraph & Twitter Cards** — Social sharing optimization
- **Dynamic Sitemap** — Auto-generated sitemap
- **robots.txt** — Search engine directives
- **Security Headers** — CSP, HSTS, X-Frame-Options, etc.
- **Image Optimization** — Next.js Image with AVIF/WebP
- **Code Splitting** — Dynamic imports for non-critical components
- **Lighthouse 95+** — Optimized for performance

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | React animations |
| GSAP | Scroll animations |
| Lucide React | Icons |
| React Icons | Brand icons |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SITE_URL=https://lencore.in
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_CLARITY_ID=
```

## Project Structure

```
lencore/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Tailwind + custom styles
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   ├── menu/page.tsx       # Full menu page
│   │   ├── blog/page.tsx       # Blog listing
│   │   ├── gallery/page.tsx    # Gallery page
│   │   ├── reservation/page.tsx # Reservation form
│   │   ├── admin/page.tsx      # Admin panel
│   │   └── api/
│   │       ├── menu/route.ts   # Menu API
│   │       ├── reservation/route.ts
│   │       └── chat/route.ts   # Chatbot API
│   ├── components/
│   │   ├── Navigation.tsx      # Premium navbar
│   │   ├── Hero.tsx            # Luxury hero section
│   │   ├── BrandStory.tsx      # Brand philosophy
│   │   ├── FeaturedMenu.tsx    # Menu with filtering
│   │   ├── Gallery.tsx         # Masonry gallery
│   │   ├── InstagramFeed.tsx   # Instagram section
│   │   ├── Testimonials.tsx    # Review slider
│   │   ├── WhyChooseUs.tsx     # Features grid
│   │   ├── VisitUs.tsx         # Map & contact
│   │   ├── FAQ.tsx             # Accordion FAQ
│   │   ├── BlogPreview.tsx     # Blog preview
│   │   ├── Footer.tsx          # Premium footer
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp
│   │   ├── ReservationModal.tsx # Reservation popup
│   │   ├── ExitPopup.tsx       # Exit-intent offer
│   │   ├── ChatBot.tsx         # AI chatbot
│   │   ├── TodayBestseller.tsx # Daily highlight
│   │   ├── DessertOfTheWeek.tsx # Weekly spotlight
│   │   ├── CustomerPhotoWall.tsx # Social proof
│   │   ├── QuickActions.tsx    # Quick action cards
│   │   ├── Newsletter.tsx      # Email signup
│   │   ├── CTASection.tsx      # Final CTA
│   │   └── FloatingReservation.tsx
│   └── lib/
│       ├── utils.ts            # Utilities & constants
│       ├── data.ts             # Menu, reviews, FAQ, blog data
│       ├── schema.ts           # Schema.org structured data
│       └── translations.ts     # Multi-language support
├── public/
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # Robots file
├── next.config.ts              # Next.js config
└── next-sitemap.config.js      # Sitemap config
```

## Deployment (Vercel)

1. Push to GitHub
2. Import on [vercel.com/new](https://vercel.com/new)
3. Add environment variables
4. Deploy

Or use CLI:
```bash
npm i -g vercel
vercel --prod
```

## Customization

### Menu Items
Edit `src/lib/data.ts` → `menuItems` array

### Reviews
Edit `src/lib/data.ts` → `reviews` array

### Blog Posts
Edit `src/lib/data.ts` → `blogPosts` array

### FAQ
Edit `src/lib/data.ts` → `faqs` array

### Colors
Edit `src/app/globals.css` → CSS custom properties

### Fonts
Edit `src/app/layout.tsx` → Google Fonts imports

## License

© 2024 L'Encore. All rights reserved.
