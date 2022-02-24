import { NotificationsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { mapNotification } from '../map';

export const getQueryKey = (locale: string) => {
  return ['notifications', locale];
};

const useNotifications = () => {
  const { locale } = useAppSelector((state) => state.settings);

  const getNotificationsFn = () => NotificationsClient.getNotifications({ lang: locale });

  const { isLoading, data, isRefetching, refetch } = useQuery(
    getQueryKey(locale),
    getNotificationsFn
  );

  return {
    isLoading,
    isRefetching,
    refetch,
    notifications: data ? data.response.map(mapNotification) : [],
  };
};

export default useNotifications;
