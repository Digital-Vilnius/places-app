import { Location } from '@core/location/types';
import { mapPlace } from '@features/places/map';
import orderBy from 'lodash/orderBy';
import { Place as ApiPlace } from '@api/clients/places/types';

export const getPlaces = (places: ApiPlace[], currentLocation: Location) => {
  const mappedPlaces = places.map((place) => mapPlace(place, currentLocation));
  return orderBy(mappedPlaces, ['distance'], ['asc']);
};
