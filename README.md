# VeloCity Rental – Airbnb-Inspired Exotic Fleet Marketplace

## Project Cover:
<img width="1920" height="991" alt="VeloCity-Luxury-Car-Rentals-01-09-2026_01_59_PM" src="https://github.com/user-attachments/assets/1e732ec5-1c9e-4a94-981c-27221fb4892a" />

## 🚀 Project Overview

VeloCity is an adapted clone that borrows the discovery flows of Airbnb and applies them to an ultra-luxury car rental marketplace. The experience mixes cinematic storytelling on the landing page with a high-density browse grid that feels familiar to anyone who has booked on Airbnb—complete with filters, wish-list cues, and pagination.

**The Goal:** Showcase how Airbnb-inspired UX patterns translate to a premium, vehicle-focused vertical while staying production-ready inside the Next.js App Router.

**Live Demo:** [velocity-rental-platform.vercel.app](https://velocity-rental-platform.vercel.app/)

## ✨ Signature Modules

| Area | What It Delivers |
| --- | --- |
| **Cinematic landing** | Bold typography, layered gradients, CTA stack, and scroll cues to set the tone. |
| **Category rail** | Fleet discovery section that mirrors Airbnb’s icon grid with hover states and deep links. |
| **Stats + testimonials** | Trust elements (animated counters, geo-tagged reviews) to support premium bookings. |
| **Browse marketplace** | `/browse` route with category & location query filters, deterministic shuffle, and pill pagination. |
| **Reusable UI kit** | Shadcn/Radix components, listing cards, and data types shared across landing + browse pages. |

## 🛠️ Tech Stack

- **Framework:** Next.js 16 App Router with React 19 server + client components
- **Styling:** Tailwind CSS v4, custom gradients, tw-animate for subtle scroll/entrance motion
- **UI Kit:** Shadcn/Radix primitives (button, dropdown, avatar) for consistent tokens
- **Data:** TypeScript-first car catalog with Unsplash-powered imagery and seeded randomization
- **Interactions:** Lucide icons, Embla carousel-ready components, IntersectionObserver counters

## 🎯 Experience Pillars

1. **Cinematic storytelling** – layered gradients, concentric rings, motion blur, and micro animations to match the brand tone.
2. **Instant discovery** – fleet cards link directly into `/browse` with persisted category filters and seeded pagination for variety.
3. **Human-proofing** – testimonials, satisfaction stats, and major city coverage create credibility for high-ticket rentals.
4. **Scalable modularity** – shared data models (`src/data/cars.ts`), reusable listing cards, and utility-heavy UI components accelerate future verticals.

## 🧠 Design Decisions

- **Bold typography:** Bebas Neue + ultra-wide tracking keeps the voice assertive without heavy assets.
- **Gradient storytelling:** radial overlays and accent reds echo the feel of luxury performance brands.
- **Seeded randomness:** browsing “All” vehicles always feels fresh thanks to deterministic shuffling that avoids hydration drift.
- **Pagination UX:** floating pill controls and keyboard-friendly buttons stay consistent across breakpoints.
- **Performance-first:** zero blocking fonts, optimized SVG assets, and minimal JS in the landing hero preserve a Lighthouse 100 ambition.

## 📂 Project Structure

```
src/
├─ app/
│  ├─ page.tsx            # Cinematic landing experience
│  ├─ (main)/browse/      # Inventory grid with filters + pagination
│  └─ globals.css         # Tailwind v4 design tokens + animations
├─ components/
│  ├─ listings/ListingCard.tsx
│  └─ navbar + ui system  # Shadcn/Radix wrappers
└─ data/cars.ts           # Type-safe catalog powering hero + browse views
```

## 🧪 Feature Highlights

- Animated stat counters triggered on view using IntersectionObserver hooks.
- Category CTA grid with hover zoom, iconography, and deep-link routing to `/browse?category=...`.
- Testimonials with rating badges, geo tags, and gradient initials to humanize the brand.
- Browse page filters via query params, deterministic shuffling, and fully client-side pagination with smooth scroll resets.
- Listing cards reuse Airbnb-style affordances (ratings, pricing, city tags, wishlist heart button ready).

## 🏁 Run the Project Locally

```bash
git clone https://github.com/renatogg-dev/velocity-rental.git
cd velocity-rental
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the landing page and `http://localhost:3000/browse` to view the full fleet experience.

## 📦 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Launches the local Next.js dev server with hot reload. |
| `npm run build` | Creates an optimized production build. |
| `npm start` | Runs the production build locally. |
| `npm run lint` | Executes ESLint using the shared Next.js config. |

## 🗺️ Roadmap Ideas

- Integrate Embla carousel for immersive vehicle detail galleries.
- Layer in Supabase or Convex for live availability + booking flows.
- Expand trust bar with insurance, delivery, and concierge highlights.
- Ship an SSR-ready `api/cars` endpoint for future mobile clients.
- Implement user accounts with wishlist persistence to mirror Airbnb hearts.

---

Inspired by the UX heuristics of Airbnb, reimagined for an exotic-car marketplace.
