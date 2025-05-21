import { Venue } from '../types';

export const venues: Venue[] = [
  {
    id: "way/211907102",
    name: "Mummi Trahter",
    type: "restaurant",
    address: {
      street: "Kolmiku",
      housenumber: "2/1",
      city: "Muraste küla",
      postcode: "76905",
      country: "EE"
    },
    coordinates: {
      lat: 59.4545873,
      lng: 24.4458692
    },
    openingHours: "Mo-Su 12:00-21:00"
  },
  {
    id: "node/8928588117",
    name: "Jõesuu Lounge",
    type: "cafe",
    address: {
      street: "Päästejaama tee",
      housenumber: "6",
      city: "Vääna-Jõesuu küla",
      postcode: "76909"
    },
    coordinates: {
      lat: 59.4258558,
      lng: 24.3444649
    },
    amenities: {
      outdoorSeating: true,
      driveThrough: false,
      highchair: false
    }
  },
  {
    id: "node/1594546751",
    name: "The Greenhouse Café",
    type: "cafe",
    coordinates: {
      lat: 59.4332919,
      lng: 24.3671992
    }
  },
  {
    id: "node/4306509391",
    name: "Pakri Parun",
    type: "cafe",
    coordinates: {
      lat: 59.387155,
      lng: 24.036454
    },
    openingHours: "Mo-Su 10:00-22:00",
    phone: "+37255538880",
    website: "https://www.pakri.eu/",
    amenities: {
      internetAccess: "wlan"
    }
  }
];