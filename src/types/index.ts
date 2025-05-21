export type ExperienceCategory = 'historic' | 'nature' | 'gastronomy' | 'sports' | 'events';

export type TransportMode = 'foot' | 'bike' | 'car' | 'public';

export interface Venue {
  id: string;
  name: string;
  type: ExperienceCategory;
  address?: {
    street?: string;
    housenumber?: string;
    city?: string;
    postcode?: string;
    country?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours?: string;
  phone?: string;
  website?: string;
  amenities?: {
    outdoorSeating?: boolean;
    driveThrough?: boolean;
    highchair?: boolean;
    internetAccess?: string;
  };
}

export interface Category {
  id: ExperienceCategory;
  title: string;
  description: string;
  image: string;
}

export interface HostQuestionnaire {
  // Step 1: Self Assessment
  interests: string;
  venue: string;
  skills: string;
  languageComfort: string;
  hostingExperience: string;
  communityInterest: string;

  // Step 2: Experience Details
  introduction: string;
  languages: string[];
  mainActivity: string;
  location: string;
  maxGuests: number;
  duration: string;
  targetAudience: 'adults' | 'families' | 'anyone';
  uniqueElement: string;
  regenerativeImpact: string;
  requiredItems: string[];
  availability: {
    days: string[];
    times: string[];
  } | string;
  accessibility: string;
  food: {
    offered: boolean;
    details: string;
    dietaryOptions: string[];
  };
  partners: string;
  photos: string[];
  videoInvitation?: string;
  pricing: {
    amount: number;
    currency: string;
  };
  rules: string[];
  meetingPoint: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  highlights: string;
  needDescriptionHelp: boolean;
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