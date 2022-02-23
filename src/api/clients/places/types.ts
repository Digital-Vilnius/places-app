export interface Place {
  id: number;
  place_title: string;
  place_type: string;
  place_icon: string;
  place_images: string[];
  place_description: string;
  place_phone: string;
  place_timetable: TimetableItem[];
  place_locationAddressUrl: string;
  coordinate: Coordinates;
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
