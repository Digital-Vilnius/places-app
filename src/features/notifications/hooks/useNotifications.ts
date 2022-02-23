import { NotificationsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapNotification } from '../map';
import { useAppSelector } from '@core/store';

export const getQueryKey = (lang: string) => {
  return ['notifications', lang];
};

const useNotifications = () => {
  const { lang } = useAppSelector((state) => state.settings);

  const getNotificationsFn = () => NotificationsClient.getNotifications({ lang });

  const { isLoading, data, isRefetching, refetch } = useQuery(
    getQueryKey(lang),
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
