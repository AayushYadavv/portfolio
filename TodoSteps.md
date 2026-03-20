# Code Split App.tsx - TODO Steps

## ✅ Step 1: Create folder structure
- [x] `src/components/icons/`
- [x] `src/constants/`
- [x] `src/types/` (already exists)
- [x] `src/styles/` (already exists)

## ✅ Step 2: Extract types (`src/types/index.ts`)
- [x] Move `HiProps`, `HoverGalleryProps`, and shared interfaces

## ✅ Step 3: Extract constants (`src/constants/`)
- [x] `themes.ts` → Move `THEMES` and `PALETTE`
- [x] `gallery.ts` → Move `GALLERY` object

## ✅ Step 4: Extract icons (`src/components/icons/icons.tsx`)
- [x] Move all icon components

## ✅ Step 5: Extract FontLoader (`src/styles/FontLoader.tsx`)
- [x] Move `FontLoader` component with all CSS

## ✅ Step 6: Extract Cursor (`src/components/Cursor.tsx`)
- [ ] Move custom cursor component

## ⬜ Step 7: Extract GridCanvas (`src/components/GridCanvas.tsx`)
- [ ] Move interactive grid canvas component

<!-- done -->
## ✅ Step 8: Extract HoverGallery (`src/components/HoverGallery.tsx`)
- [ ] Move hover gallery component
<!-- done -->
## ✅ Step 9: Extract Highlight (`src/components/Highlight.tsx`)
- [ ] Move `Hi` component

## ⬜ Step 10: Extract Navbar (`src/components/Navbar.tsx`)
- [ ] Move navbar markup

## ⬜ Step 11: Extract Hero (`src/components/Hero.tsx`)
- [ ] Move hero section

## ⬜ Step 12: Extract Works (`src/components/Works.tsx`)
- [ ] Move works section

## ⬜ Step 13: Clean up App.tsx
- [ ] Keep only state management
- [ ] Import all components

## ⬜ Step 14: (Optional) Add lazy loading
- [ ] Use `React.lazy()` for code splitting

---

# Code Split project1.tsx - TODO Steps

## ✅ P1-Step 1: Extract styles (`src/pages/project1/styles.ts`)
- [ ] Move the entire `styles` object out of the component into a separate file
- [ ] Import and use in `project1.tsx`

## ✅ P1-Step 2: Extract carousel (`src/pages/project1/Carousel.tsx`)
- [ ] Move carousel JSX, `carouselRef`, `hoveredImage` state, `scrollCarousel` fn
- [ ] Move carousel CSS keyframes and class definitions
- [ ] Accept slot content as props (render props or children array)

## ✅ P1-Step 3: Extract animated carousel card 2 (`src/pages/project1/CarouselCard2.tsx`)
- [ ] Move the animated composition (popup + wand + mouse) into its own component
- [ ] Keep all animation CSS scoped inside this component

## ✅ P1-Step 4: Extract `ImagePlaceholder` (`src/components/ImagePlaceholder.tsx`)
- [ ] Reusable across project pages

## ✅ P1-Step 5: Extract case study sections (`src/pages/project1/sections/`)
- [ ] `HeroSection.tsx` — tags, title, subtitle
- [ ] `ProjectDetails.tsx` — 3-col company/role/tenure grid
- [ ] `QuoteSection.tsx` — centered quote
- [ ] `CaseStudyContent.tsx` — all text sections (Context, Role, Problem, etc.)
- [ ] `ImpactSection.tsx` — Team Successes, Design Impact, Takeaways

## ⬜ P1-Step 6: Slim down `project1.tsx`
- [ ] Keep only top-level composition (import + render sections)
- [ ] Target: < 60 lines in the main file