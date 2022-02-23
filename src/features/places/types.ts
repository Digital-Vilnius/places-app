export interface Place {
  id: number;
  title: string;
  type: string;
  icon: string;
  images: string[];
  description: string;
  phone: string;
  timetable: TimetableItem[];
  locationAddressUrl: string;
  coordinates: Coordinates;
  email: string;
  address: string;
}

export interface TimetableItem {
  days: string;
  time: string;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}
