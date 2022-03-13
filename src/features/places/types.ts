export interface Place {
  id: number;
  title: string;
  type: string;
  icon: string;
  images: string[];
  description: string;
  phone: string | null;
  timetable: TimetableItem[];
  locationAddressUrl: string | null;
  coordinates: Coordinates;
  email: string | null;
  address: string;
  distance: number | null;
}

export interface TimetableItem {
  days: string;
  time: string;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface PlacesFilter {
  distanceTo: number | null;
}
