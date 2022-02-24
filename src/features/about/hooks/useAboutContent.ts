import { useAppSelector } from '@core/store';
import { AboutClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapAboutContent } from '@features/about/map';

export const getQueryKey = (locale: string) => {
  return ['about', locale];
};

const useAboutContent = () => {
  const { locale } = useAppSelector((state) => state.settings);

  const getAboutContentFn = () => AboutClient.getAboutContent({ lang: locale });
  const { isLoading, data, isRefetching, refetch } = useQuery(
    getQueryKey(locale),
    getAboutContentFn
  );

  return {
    isLoading,
    isRefetching,
    refetch,
    content: data ? mapAboutContent(data.response) : null,
  };
};

export default useAboutContent;
