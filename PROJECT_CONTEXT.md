# MairaAndShaheer.com - Project Context

## Project Overview
A romantic photo gallery website called "MairaAndShaheer.com" for displaying photos and memories with descriptions. The site features a dark, romantic theme with polaroid-style photo frames.

## Tech Stack
- **Frontend**: React 18.2.0 + Vite 7.2.6 + TypeScript 5.5.0
- **UI Library**: Material-UI (MUI) 6.2.0
- **State Management**: @tanstack/react-query 5.62.0
- **Backend**: Prisma 5.22.0 ORM
- **Database**: PostgreSQL on Supabase
  - Project: `kiqjulnouryrndxojqdh`
  - Connection: Pooler port 6543
  - Password: `ShaheerBKhan`

## Current Implementation

### Design & Styling
- **Theme**: Dark gradient background (`#000000` to `#1a0033`)
- **Accent Color**: `#e8b4f0` (light purple/pink)
- **Font**: Dancing Script for title and photo captions
- **Layout**: 100vh height, no vertical scrolling, flexbox-based
- **Title**: "For my Dearest Maira..." (centered, responsive font size)

### Photo Display
- **Polaroid Style**: White frame with 12px padding + 40px bottom margin
- **Dimensions**: 280px outer container, 256x256px square images
- **Title**: Displayed below photo in white border area (currently showing ID numbers 1-20)
- **Grid Layout**: CSS Grid with responsive columns
  - Mobile (< sm): 1 photo per row
  - Tablet (sm to lg): 2 photos per row
  - Desktop (lg+): 3 photos per row

### Navigation & Features
- **Year/Month Filters**: Styled Select dropdowns in top-left corner
  - Years: 2024 to current year (dynamically generated)
  - Months: All 12 months
- **Pagination**: 
  - Flexbox layout: Left Arrow → Photos → Right Arrow
  - Page indicator at bottom of viewport ("Page X of Y")
  - Photos per page varies by device (1/2/3)
  - Arrows only show when multiple pages exist
- **Modal**: Click photo to view enlarged version with description

### Code Architecture
```
frontend/
├── src/
│   ├── App.tsx                      # Root component with ResponsiveProvider
│   ├── components/
│   │   ├── Gallery.tsx              # Main gallery with pagination
│   │   ├── Photo.tsx                # Individual polaroid photo
│   │   └── PhotoSection.tsx         # Photo wrapper with modal
│   ├── context/
│   │   └── ResponsiveContext.tsx    # Responsive breakpoint context
│   └── services/
│       └── GalleryService.ts        # Photo data service (sample data)
database/
├── prisma/
│   └── schema.prisma                # Photo model definition
└── .env                             # Supabase connection string
```

### Responsive Context
- `ResponsiveProvider` wraps entire app in `App.tsx`
- `useResponsive()` hook provides `isMobile` and `isTablet` values
- Breakpoint detection happens once at top level

### Sample Data
- 20 photos in `GalleryService.ts` with IDs 1-20
- Titles currently set to match IDs (1, 2, 3, etc.)
- Photos span dates from Jan 2024 to Sep 2025
- Using placeholder images: `https://picsum.photos/200/300`

## Known Issues
- GalleryService.ts had syntax errors (now resolved)
- Database migration not yet run (`prisma migrate dev` exits with code 1)
- Using sample data instead of real database connection
- No photo upload functionality yet

## Next Steps / TODO
1. Fix database migration issues
2. Connect frontend to actual backend API
3. Implement photo upload functionality
4. Set up image storage (Supabase Storage or Cloudinary)
5. Replace sample data with real photos
6. Deploy to GitHub Pages
7. Add proper photo titles (currently just IDs)
8. Add authentication if needed

## Running the Project
```bash
# Frontend (http://localhost:5173)
cd frontend
npm run dev

# Database migrations (needs fixing)
cd database
npx prisma migrate dev --name init
```

## Key Design Decisions
- Fixed photo dimensions for consistent polaroid aesthetic
- No vertical scrolling - everything fits viewport
- Responsive photos per page (not just grid columns)
- Flexbox for arrow + photo layout (not absolute positioning)
- Context for responsive breakpoints (not local hooks in each component)
- Page indicator always visible at bottom

## Git Repository
- **Owner**: ShaheerBKhan
- **Repo**: MairaAndShaheer
- **Branch**: main
- Recent push successful
