export interface GalleryImage {
  src?: string;
  label: string;
}

export interface GalleryItem {
  title?: string;
  imgs: GalleryImage[];
}

export interface Gallery {
  [key: string]: GalleryItem;
}

export type Theme = 'light' | 'dark';

// Theme object type for colors
export interface ThemeColors {
  bg: string;
  bg2: string;
  navBg: string;
  ink: string;
  ink2: string;
  ink3: string;
  accent: string;
  btn: string;
  border: string;
}

export interface Themes {
  light: ThemeColors;
  dark: ThemeColors;
}

// Component Props
export interface HiProps {
  children: React.ReactNode;
  k?: string;
  onEnter?: (key: string, el: HTMLElement) => void;
  onLeave?: () => void;
}

export interface HoverGalleryProps {
  activeKey: string | null;
  anchorEl: HTMLElement | null;
  dark: boolean;
}
