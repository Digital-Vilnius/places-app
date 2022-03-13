import { Location } from '@core/location/types';
import { mapPlace } from '@features/places/map';
import orderBy from 'lodash/orderBy';
import { Place as ApiPlace } from '@api/clients/places/types';

export const getPlaces = (places: ApiPlace[], currentLocation: Location | null) => {
  const mappedPlaces = places.map((place) => mapPlace(place, currentLocation));
  if (!currentLocation) return mappedPlaces;
  return orderBy(mappedPlaces, ['distance'], ['asc']);
};
