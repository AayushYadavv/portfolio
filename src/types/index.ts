export interface GalleryImage {
  src: string;
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
