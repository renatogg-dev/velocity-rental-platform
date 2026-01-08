# VeloCity - Luxury Car Rental Platform

## Project Overview
A high-fidelity, Airbnb-inspired luxury car rental browsing interface built with Next.js 14, featuring a sophisticated design system and interactive filtering capabilities.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Icons:** Lucide React
- **Image Carousel:** embla-carousel-react
- **URL Management:** query-string

## Current Implementation Status

### ✅ Completed Features

#### 1. **Layout & Navigation**
- **Sticky Header** (`components/navbar/Header.tsx`)
  - VeloCity logo with home link
  - Interactive search bar with location filtering
  - User profile dropdown menu
  - Responsive design with backdrop blur

- **Sticky Category Filter Bar** (`components/navbar/Categories.tsx`)
  - Horizontal scrollable category list
  - 6 categories: Supercars, SUVs, Electric, Convertible, Classic, Track Day
  - Active state highlighting
  - URL-based filtering

#### 2. **Search & Filtering**
- **Interactive Search Bar** (`components/navbar/Search.tsx`)
  - Location input with dropdown
  - Quick-select cities (Los Angeles, Miami, Las Vegas, New York)
  - URL parameter-based filtering
  - Clear button when location is active
  - Placeholder sections for Dates and Passengers (visual only)

- **Category Filtering**
  - Filter by car category via URL parameters
  - "All" view shows randomized car order
  - Specific categories maintain original order
  - Real-time filtering without page reload

#### 3. **Car Listings**
- **Listing Card** (`components/listings/ListingCard.tsx`)
  - Image carousel with navigation controls
  - High-quality Unsplash photos (unoptimized for redirect handling)
  - Floating heart "Save" button
  - Car details: title, location, rating, price per day
  - Hover effects and smooth transitions

- **Main Grid** (`app/page.tsx`)
  - Responsive grid layout (1-5 columns based on screen size)
  - 24 luxury vehicles across all categories
  - Pagination (15 cars per page)
  - Results counter
  - Randomized order on "All" filter
  - Filtered by category and/or location

#### 4. **Car Database** (`data/cars.ts`)
**Total: 24 vehicles**

**Supercars (5):**
- Porsche 911 GT3 RS - $1,200/day
- Lamborghini Huracán EVO - $1,500/day
- McLaren 720S - $1,400/day
- Lamborghini Aventador SVJ - $2,500/day
- Bugatti Chiron - $5,000/day

**Track Day (4):**
- Ferrari SF90 Stradale - $2,200/day
- Nissan GT-R Nismo - $800/day
- Ferrari 488 Pista - $1,900/day
- Porsche 911 GT2 RS - $1,800/day

**Classic (3):**
- Aston Martin DBS Superleggera - $1,300/day
- Ferrari California T - $1,100/day
- Aston Martin DB11 - $1,050/day

**SUVs (6):**
- Bentley Bentayga - $1,100/day
- Rolls-Royce Cullinan - $1,800/day
- Mercedes-AMG G63 - $900/day
- Range Rover SV Autobiography - $850/day
- Lamborghini Urus - $1,350/day
- Porsche Cayenne Turbo GT - $750/day

**Electric (2):**
- Tesla Model S Plaid - $750/day
- Porsche Taycan Turbo S - $950/day

**Convertible (4):**
- BMW i8 Roadster - $650/day
- Audi R8 Spyder - $1,050/day
- McLaren 720S Spider - $1,600/day
- Lamborghini Huracán Spyder - $1,700/day

#### 5. **Design System**
- **Color Scheme:**
  - Background: White
  - Text: Black
  - Primary: Black
  - Accent: Red (for search button and highlights)
  - Borders: Light gray

- **Typography:**
  - Font: Geist Sans (primary), Geist Mono (monospace)
  - Clean, modern hierarchy

- **Components:**
  - Rounded corners (xl radius)
  - Smooth transitions and hover effects
  - Shadow system (md, lg)
  - Backdrop blur on sticky elements

#### 6. **Image Handling**
- Unsplash photos via download redirect URLs
- Unoptimized images to handle Unsplash redirects
- Proper aspect ratio (1:1) for all car photos
- Carousel with multiple photos per car
- Lazy loading with priority on first image

#### 7. **Pagination**
- 15 cars per page
- Page number buttons
- Previous/Next navigation
- URL parameter-based (`?page=2`)
- Smooth scroll to top on page change
- Results counter showing current range

### 🎨 UI/UX Features
- Airbnb-inspired design language
- Smooth scrolling and transitions
- Responsive grid (mobile to desktop)
- Interactive hover states
- Loading states with Suspense
- Empty state messaging
- Accessible navigation

### 🔧 Technical Implementation
- Client-side rendering for interactivity
- URL-based state management
- Fisher-Yates shuffle algorithm for randomization
- Memoized shuffle for consistent session order
- TypeScript for type safety
- Modular component architecture

## File Structure
```
velocity-rental/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & CSS variables
│   │   ├── layout.tsx            # Root layout with Header & Categories
│   │   └── page.tsx              # Home page with listings grid
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── Header.tsx        # Main header component
│   │   │   ├── Logo.tsx          # VeloCity logo
│   │   │   ├── Search.tsx        # Interactive search bar
│   │   │   ├── UserMenu.tsx      # User dropdown menu
│   │   │   └── Categories.tsx    # Category filter bar
│   │   ├── listings/
│   │   │   ├── ListingCard.tsx   # Car card with carousel
│   │   │   └── HeartButton.tsx   # Save/favorite button
│   │   └── ui/                   # Shadcn UI components
│   ├── data/
│   │   └── cars.ts               # Car database (24 vehicles)
│   └── lib/
│       └── utils.ts              # Utility functions
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies
```

## Dependencies
```json
{
  "next": "^16.1.1",
  "react": "^19.0.0",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.468.0",
  "embla-carousel-react": "^8.5.2",
  "query-string": "^9.1.1",
  "@radix-ui/react-avatar": "^1.1.2",
  "@radix-ui/react-dropdown-menu": "^2.1.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

## Known Configuration
- **Dev Server:** `npm run dev` (runs on port 3000)
- **Image Optimization:** Disabled for Unsplash URLs (using `unoptimized` prop)
- **Remote Patterns:** Configured for `unsplash.com` and `images.unsplash.com`

## Future Enhancements (Not Implemented)
- Date picker functionality
- Guest/passenger counter
- Individual car detail pages
- Booking system
- User authentication
- Favorites/saved cars persistence
- Advanced filters (price range, features, etc.)
- Map view
- Reviews and ratings system
- Backend API integration
- Database integration
- Payment processing

## Current State Summary
The project is a **fully functional front-end prototype** with:
- ✅ Complete UI/UX implementation
- ✅ Interactive filtering and search
- ✅ Responsive design
- ✅ 24 curated luxury vehicles with real photos
- ✅ Pagination system
- ✅ URL-based state management
- ✅ Production-ready component architecture

**Ready for:** Demo, portfolio showcase, or backend integration.

**Not included:** Backend, database, authentication, actual booking functionality.
