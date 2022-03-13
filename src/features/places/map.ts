import { Place as ApiPlace } from '@api/clients/places/types';
import { Location } from '@core/location/types';
import { DistanceUtils } from '@utils';
import { Place } from './types';

export const mapPlace = (place: ApiPlace, location: Location | null): Place => ({
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
  distance: location ? DistanceUtils.getDistanceBetweenCoords(place.coordinate, location) : null,
});
