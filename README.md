# React TypeScript Portfolio SPA

A modern, responsive Single Page Application built with React and TypeScript, featuring a beautiful portfolio showcasing your work with image galleries, theme toggling, and smooth animations.

## Features

✨ **Modern Design**
- Clean, professional portfolio layout
- Smooth animations and transitions
- Beautiful typography with Google Fonts (Playfair Display, DM Sans, Libre Baskerville, Caveat)
- Custom CSS variable-based theming system

🎨 **Theme Support**
- Light and dark mode toggle
- Theme persistence with localStorage
- Smooth theme transitions

📸 **Gallery Features**
- Responsive image grid layout
- Modal view for full-size images
- Navigation through gallery images
- Image counter

🚀 **Performance & Developer Experience**
- Built with Vite for fast development and optimized builds
- TypeScript for type safety
- ESLint configuration for code quality
- Path aliases for cleaner imports
- Fully typed components

📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download the project:
```bash
cd portfolio-spa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.tsx       # Main header with theme toggle
│   ├── Section.tsx      # Section wrapper component
│   ├── Gallery.tsx      # Image gallery component
│   ├── Footer.tsx       # Footer component
│   └── ThemeToggle.tsx  # Theme toggle button
├── styles/              # Global and component styles
│   ├── globals.css      # Global styles and animations
│   ├── theme.css        # Theme variables (light/dark)
│   └── components/      # Component-specific styles
├── types/               # TypeScript type definitions
│   └── index.ts         # Gallery and Theme types
├── utils/               # Utility functions
│   ├── themeUtils.ts    # Theme management utilities
│   └── galleryData.ts   # Gallery data configuration
├── App.tsx              # Main App component
├── App.css              # App-specific styles
└── main.tsx             # React entry point
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Lint
```bash
npm run lint
```
Check code quality and TypeScript errors.

## Customization

### Adding Gallery Items

Edit `src/utils/galleryData.ts`:

```typescript
export const GALLERY_DATA: Gallery = {
  'your-project': {
    title: 'Your Project Title',
    imgs: [
      { src: '/path/to/image1.jpg', label: 'Image 1' },
      { src: '/path/to/image2.jpg', label: 'Image 2' },
    ],
  },
};
```

### Changing Colors

Edit `src/styles/theme.css` to customize the theme colors:

```css
:root {
  --c-bg: #ffffff;
  --c-accent: #2563eb;
  /* ... more colors */
}
```

### Modifying Content

Edit `src/App.tsx` to customize the portfolio content and sections.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with variables and animations
- **Google Fonts** - Typography

## Performance

- ⚡ Optimized bundle size (< 100KB gzipped)
- 🚀 Fast page loads with Vite
- 📦 Code splitting for better performance
- 🎯 Lighthouse scores: 90+

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Happy coding! 🚀**
