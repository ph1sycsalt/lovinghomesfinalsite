export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'boarding' | 'grooming' | 'play' | 'training';
}

export enum PageState {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  PACKAGES = 'PACKAGES',
  GALLERY = 'GALLERY',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  LOGIN = 'LOGIN'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}