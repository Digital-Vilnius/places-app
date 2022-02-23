import { useAppSelector } from '@core/store';
import { AboutClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapAboutContent } from '@features/about/map';

export const getQueryKey = (lang: string) => {
  return ['about', lang];
};

const useAboutContent = () => {
  const { lang } = useAppSelector((state) => state.settings);

  const getAboutContentFn = () => AboutClient.getAboutContent({ lang });
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(lang), getAboutContentFn);

  return {
    isLoading,
    isRefetching,
    refetch,
    content: data ? mapAboutContent(data.response) : null,
  };
};

export default useAboutContent;
