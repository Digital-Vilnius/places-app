import { Place as ApiPlace } from '@api/clients/places/types';
import { Place } from '@features/places/types';

export const mapPlace = (place: ApiPlace): Place => ({
  id: place.id,
  title: place.place_title,
  type: place.place_type,
  icon: place.place_icon,
  images: place.place_images,
  description: place.place_description,
  phone: place.place_phone,
  timetable: place.place_timetable,
  locationAddressUrl: place.place_locationAddressUrl,
  coordinates: place.coordinate,
  email: place.email,
  address: place.address,
});
