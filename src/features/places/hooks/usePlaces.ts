import { PlacesClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { useContext, useMemo } from 'react';
import { CurrentLocationContext } from '@core/location/provider';
import { getPlaces } from '../utils';
import { Place } from '../types';

export const getQueryKey = (locale: string) => {
  return ['places', locale];
};

const usePlaces = () => {
  const { locale } = useAppSelector((state) => state.settings);
  const { currentLocation } = useContext(CurrentLocationContext);

  const getPlacesFn = () => PlacesClient.getPlaces({ lang: locale });
  const { isLoading, isRefetching, refetch, data } = useQuery(getQueryKey(locale), getPlacesFn);

  const places = useMemo<Place[]>(() => {
    if (!currentLocation || !data) return [];
    return getPlaces(data.response, currentLocation);
  }, [currentLocation, data]);

  return {
    isLoading,
    isRefetching,
    refetch,
    places,
  };
};

export default usePlaces;
