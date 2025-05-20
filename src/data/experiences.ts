import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'old-town',
    title: 'Tallinn Old Town Tour',
    description: 'Walk through the medieval streets of Tallinn\'s Old Town, a UNESCO World Heritage site with well-preserved architecture.',
    category: 'historic',
    image: 'https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg',
    bestTime: 'May-September',
    duration: '2-3 hours',
    price: '€15-25',
    rating: 4.8,
    transportModes: ['foot']
  },
  {
    id: 'kadriorg-park',
    title: 'Kadriorg Park and Palace',
    description: 'Visit the baroque palace and stroll through the beautiful gardens commissioned by Peter the Great.',
    category: 'historic',
    image: 'https://images.pexels.com/photos/5829559/pexels-photo-5829559.jpeg',
    bestTime: 'April-October',
    duration: '2-4 hours',
    price: '€8-12',
    rating: 4.6,
    transportModes: ['foot', 'bike', 'public']
  },
  {
    id: 'lahemaa',
    title: 'Lahemaa National Park',
    description: 'Explore Estonia\'s largest national park with diverse landscapes including forests, bogs, and coastal areas.',
    category: 'nature',
    image: 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg',
    bestTime: 'June-September',
    duration: 'Full day',
    price: '€30-50',
    rating: 4.9,
    transportModes: ['car', 'bike']
  },
  {
    id: 'food-tour',
    title: 'Estonian Food Tour',
    description: 'Sample traditional Estonian dishes and learn about the local culinary history.',
    category: 'gastronomy',
    image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg',
    bestTime: 'Year-round',
    duration: '3-4 hours',
    price: '€45-60',
    rating: 4.7,
    transportModes: ['foot', 'public']
  },
  {
    id: 'pirita-beach',
    title: 'Pirita Beach Activities',
    description: 'Enjoy water sports, beach volleyball, and other activities at Tallinn\'s most popular beach.',
    category: 'sports',
    image: 'https://images.pexels.com/photos/1035428/pexels-photo-1035428.jpeg',
    bestTime: 'June-August',
    duration: 'Half day',
    price: '€0-25',
    rating: 4.5,
    transportModes: ['bike', 'public', 'car']
  },
  {
    id: 'song-festival',
    title: 'Song Festival Grounds',
    description: 'Visit the iconic venue of Estonia\'s famous Song Festival and learn about this important cultural tradition.',
    category: 'events',
    image: 'https://images.pexels.com/photos/2565601/pexels-photo-2565601.jpeg',
    bestTime: 'July (during festival years)',
    duration: '2-3 hours',
    price: '€0-10',
    rating: 4.7,
    transportModes: ['public', 'car']
  },
  {
    id: 'telliskivi',
    title: 'Telliskivi Creative City',
    description: 'Explore this hipster district with trendy cafes, creative studios, and regular cultural events.',
    category: 'events',
    image: 'https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg',
    bestTime: 'Year-round',
    duration: '2-4 hours',
    price: '€0-20',
    rating: 4.6,
    transportModes: ['foot', 'bike', 'public']
  },
  {
    id: 'botanical-garden',
    title: 'Tallinn Botanical Garden',
    description: 'Discover over 8,000 plant species in this beautiful garden on the outskirts of the city.',
    category: 'nature',
    image: 'https://images.pexels.com/photos/2132100/pexels-photo-2132100.jpeg',
    bestTime: 'May-September',
    duration: '2-3 hours',
    price: '€7',
    rating: 4.4,
    transportModes: ['car', 'public']
  }
];