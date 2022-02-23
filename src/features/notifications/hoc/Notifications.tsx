import React, { FC } from 'react';
import { Notifications as ControlledNotifications } from '../components';
import { useNavigation } from '@react-navigation/native';
import { Notification } from '../types';
import { notificationRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { useNotifications } from '../hooks';

const Notifications: FC = () => {
  const { notifications, isLoading, isRefetching, refetch } = useNotifications();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePlacePress = (notification: Notification) => {
    navigation.navigate(notificationRoute, { notification });
  };

  return (
    <ControlledNotifications
      onRefresh={refetch}
      onNotificationPress={handlePlacePress}
      notifications={notifications}
      refreshing={isLoading || isRefetching}
    />
  );
};

export default Notifications;
