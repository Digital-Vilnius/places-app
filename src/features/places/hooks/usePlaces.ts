import { PlacesClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapPlace } from '../map';
import { useAppSelector } from '@core/store';

export const getQueryKey = (lang: string) => {
  return ['usePlaces', lang];
};

const usePlaces = () => {
  const { lang } = useAppSelector((state) => state.settings);

  const getPlacesFn = () => PlacesClient.getPlaces({ lang });
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(lang), getPlacesFn);

  return {
    isLoading,
    isRefetching,
    refetch,
    places: data ? data.response.map(mapPlace) : [],
  };
};

export default usePlaces;
