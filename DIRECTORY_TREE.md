# Project Directory Structure

```
portfolio-spa/
│
├── 📄 Configuration Files
│   ├── package.json                 # NPM dependencies and scripts
│   ├── tsconfig.json               # TypeScript configuration (strict mode)
│   ├── tsconfig.node.json          # TypeScript config for Vite
│   ├── vite.config.ts              # Vite bundler configuration
│   ├── .eslintrc.json              # ESLint rules for code quality
│   ├── .gitignore                  # Git ignore rules
│   └── index.html                  # HTML entry point
│
├── 📁 src/                          # Source code directory
│   │
│   ├── 📄 Entry Points
│   │   ├── main.tsx                # React app entry point
│   │   ├── App.tsx                 # Root component
│   │   ├── App.css                 # App component styles
│   │   └── vite-env.d.ts           # Vite type definitions
│   │
│   ├── 📁 components/              # React components
│   │   ├── Header.tsx              # Navigation & theme toggle
│   │   ├── Section.tsx             # Reusable section wrapper
│   │   ├── Gallery.tsx             # Image gallery with modal
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── ThemeToggle.tsx         # Theme toggle button
│   │   └── index.ts                # Component exports
│   │
│   ├── 📁 styles/                  # CSS styles
│   │   ├── globals.css             # Global styles & animations
│   │   ├── theme.css               # Theme variables (light/dark)
│   │   └── 📁 components/          # Component-specific styles
│   │       ├── Header.css          # Header styles
│   │       ├── Gallery.css         # Gallery styles
│   │       ├── Section.css         # Section styles
│   │       ├── Footer.css          # Footer styles
│   │       └── ThemeToggle.css     # Toggle button styles
│   │
│   ├── 📁 types/                   # TypeScript type definitions
│   │   └── index.ts                # Gallery, Image, Theme types
│   │
│   └── 📁 utils/                   # Utility functions
│       ├── themeUtils.ts           # Theme management
│       └── galleryData.ts          # Gallery configuration
│
├── 📁 public/                       # Static assets (create as needed)
│   └── [add your images here]
│
├── 📁 dist/                         # Build output (auto-generated)
│   └── [generated on build]
│
├── 📄 Documentation
│   ├── README.md                   # Project overview
│   ├── SETUP_GUIDE.md              # Detailed setup guide
│   ├── PROJECT_SUMMARY.md          # Conversion summary
│   └── DIRECTORY_TREE.md           # This file
│
└── 📄 Scripts
    └── quick-start.sh              # Quick setup script
```

## File Descriptions

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Defines dependencies, scripts, and metadata |
| `tsconfig.json` | TypeScript compiler options and path aliases |
| `vite.config.ts` | Build tool configuration and development server |
| `.eslintrc.json` | Code quality rules and checks |
| `index.html` | HTML template for the SPA |

### Source Structure

#### Components (`src/components/`)
- **Header.tsx** - Main header with logo and theme toggle
- **Section.tsx** - Wrapper for content sections with animations
- **Gallery.tsx** - Image gallery with modal and navigation
- **Footer.tsx** - Footer with social links
- **ThemeToggle.tsx** - Standalone theme toggle button

#### Styles (`src/styles/`)
- **globals.css** - Base styles, fonts, animations, global classes
- **theme.css** - CSS variables for light/dark themes
- **components/** - Modular styles for each component

#### Types (`src/types/`)
- **index.ts** - TypeScript interfaces for Gallery, Image, Theme

#### Utils (`src/utils/`)
- **themeUtils.ts** - Theme persistence and toggle logic
- **galleryData.ts** - Gallery configuration and sample data

## Key Features by Location

### 🎨 Theming
- `src/styles/theme.css` - Theme color variables
- `src/utils/themeUtils.ts` - Theme logic
- `src/components/Header.tsx` - Theme toggle UI

### 📸 Gallery System
- `src/components/Gallery.tsx` - Gallery component
- `src/styles/components/Gallery.css` - Gallery styles
- `src/utils/galleryData.ts` - Gallery data

### 🎭 Animations
- `src/styles/globals.css` - Animation definitions
- Used in all components via CSS classes

### 🌓 Dark/Light Mode
- `src/styles/theme.css` - Theme variables
- `src/utils/themeUtils.ts` - localStorage management
- Applied via `data-theme` attribute on `<html>`

## Development Workflow

```
Start Dev:
npm run dev → Vite dev server → http://localhost:3000

Edit Files:
src/App.tsx → Hot Module Reload → Browser auto-refreshes

Build:
npm run build → Vite optimizes → dist/ folder created

Deploy:
dist/ → Your hosting platform
```

## Import Paths

Using TypeScript path aliases (configured in `tsconfig.json`):

```typescript
// Instead of:
import { Gallery } from '../../../components/Gallery';

// Use:
import { Gallery } from '@components/Gallery';

// Available aliases:
@/              // src/
@components/    // src/components/
@types/         // src/types/
@styles/        // src/styles/
@utils/         // src/utils/
```

## Adding New Files

### Add a New Component
```bash
# Create component
src/components/MyComponent.tsx

# Add export
src/components/index.ts → export MyComponent

# Add styles
src/styles/components/MyComponent.css

# Import and use
import { MyComponent } from '@components';
```

### Add a New Utility
```bash
# Create utility
src/utils/myUtils.ts

# Import and use
import { myFunction } from '@utils/myUtils';
```

### Add a New Type
```bash
# Add to types
src/types/index.ts

# Import and use
import { MyType } from '@types/index';
```

## Size and Performance

```
Source Files:     ~50 KB
Dependencies:     ~300 MB (node_modules/)
Build Output:     ~100 KB (minified + gzipped)
Dev Server:       ~500 ms startup
Build Time:       < 5 seconds
```

## Best Practices

✅ Keep components small and focused
✅ Use TypeScript for type safety
✅ Organize styles by component
✅ Use path aliases for clean imports
✅ Keep utilities pure and testable
✅ Maintain consistent naming conventions

---

**Last Updated**: 2024
**Version**: 1.0.0
**Status**: Production Ready ✅
