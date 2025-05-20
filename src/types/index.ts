export type ExperienceCategory = 'historic' | 'nature' | 'gastronomy' | 'sports' | 'events';

export type TransportMode = 'foot' | 'bike' | 'car' | 'public';

export interface Category {
  id: ExperienceCategory;
  title: string;
  description: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  image: string;
  bestTime: string;
  duration: string;
  price: string;
  rating: number;
  transportModes: TransportMode[];
}