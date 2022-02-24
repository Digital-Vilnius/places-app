import { PlacesClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { mapPlace } from '../map';

export const getQueryKey = (locale: string) => {
  return ['places', locale];
};

const usePlaces = () => {
  const { locale } = useAppSelector((state) => state.settings);

  const getPlacesFn = () => PlacesClient.getPlaces({ lang: locale });
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(locale), getPlacesFn);

  return {
    isLoading,
    isRefetching,
    refetch,
    places: data ? data.response.map(mapPlace) : [],
  };
};

export default usePlaces;
