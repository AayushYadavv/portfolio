# React TypeScript SPA Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd portfolio-spa
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000` with hot module replacement enabled.

### 3. Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder.

## Project Architecture

### Core Technologies
- **React 18** - Latest React with Concurrent features
- **TypeScript** - Full type safety
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with custom properties

### Key Features Implemented

#### 1. **Theme System**
- Light/Dark mode toggle
- Theme persistence using localStorage
- Smooth theme transitions with CSS variables
- Located in: `src/utils/themeUtils.ts`

#### 2. **Component Architecture**
- Modular, reusable components
- Proper TypeScript typing for all props
- Clean separation of concerns

**Components:**
- `Header` - Navigation and theme toggle
- `Section` - Reusable section wrapper
- `Gallery` - Image gallery with modal view
- `Footer` - Footer with social links
- `ThemeToggle` - Theme toggle button

#### 3. **Gallery System**
- Responsive image grid
- Modal view with navigation
- Image counter and labels
- Smooth animations
- Configurable in: `src/utils/galleryData.ts`

#### 4. **Styling Approach**
- CSS-in-CSS with CSS variables
- Theme variables in: `src/styles/theme.css`
- Global styles: `src/styles/globals.css`
- Component-scoped styles in `src/styles/components/`

#### 5. **Type Safety**
- Centralized types in: `src/types/index.ts`
- Strict TypeScript configuration
- Full type coverage

## Customization Guide

### Add New Sections

1. Create a new component in `src/components/`
2. Import and use in `App.tsx`:

```tsx
<Section id="skills" title="My Skills">
  <SkillsComponent />
</Section>
```

### Add Gallery Items

Edit `src/utils/galleryData.ts`:

```typescript
'project-name': {
  title: 'Project Title',
  imgs: [
    { src: 'url', label: 'Image label' },
  ],
}
```

### Customize Colors

Edit `src/styles/theme.css`:

```css
:root {
  --c-bg: #your-color;
  --c-accent: #your-accent;
  /* ... more variables */
}
```

### Add New Fonts

Edit `src/styles/globals.css` (Google Fonts import) and use them in your components.

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with `base: '/repository-name/'`
2. Run: `npm run build`
3. Push `dist` folder to `gh-pages` branch

## File Structure Explanation

```
portfolio-spa/
├── src/
│   ├── components/          # React components
│   ├── styles/              # CSS files
│   │   ├── globals.css      # Global styles
│   │   ├── theme.css        # Theme variables
│   │   └── components/      # Component styles
│   ├── types/               # TypeScript types
│   ├── utils/               # Helper functions
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Vite type definitions
├── public/                  # Static assets
├── dist/                    # Build output (generated)
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # Documentation
```

## Development Tips

### Hot Module Replacement (HMR)
Changes are automatically reflected in the browser without page reload.

### TypeScript Strict Mode
All files use strict TypeScript checking. Fix type errors before building.

### Component Naming
- Use PascalCase for component files
- Use .tsx extension for components with JSX
- Use .ts extension for pure TypeScript files

### CSS Organization
- Global styles in `globals.css`
- Theme variables in `theme.css`
- Component-specific styles in their own CSS files

## Performance Optimization

### Already Implemented
- ✅ Code splitting with Vite
- ✅ Tree-shaking for unused code
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Source map generation (dev only)

### Additional Tips
- Use React.memo() for expensive components
- Lazy load components with React.lazy()
- Optimize images with appropriate formats/sizes
- Use CSS containment for layout optimization

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Clear Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Vite Cache
```bash
rm -rf node_modules/.vite
npm run dev
```

### TypeScript Errors
- Check `tsconfig.json` is correctly configured
- Verify all types are properly imported
- Use `npm run lint` to check for issues

## Next Steps

1. **Customize Content** - Update text, images, and sections
2. **Add More Galleries** - Expand the gallery data
3. **Deploy** - Choose a hosting platform
4. **SEO** - Add meta tags for better search visibility
5. **Analytics** - Integrate analytics tools

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**Happy coding! 🎉**
