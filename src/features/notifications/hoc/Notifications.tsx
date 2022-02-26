import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { notificationRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { Notification } from '../types';
import { Notifications as ControlledNotifications } from '../components';
import { useNotifications } from '../hooks';

const Notifications: FC = () => {
  const { notifications, isRefetching, refetch } = useNotifications();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePlacePress = (notification: Notification) => {
    navigation.navigate(notificationRoute, { notification });
  };

  return (
    <ControlledNotifications
      onRefresh={refetch}
      onNotificationPress={handlePlacePress}
      notifications={notifications}
      refreshing={isRefetching}
    />
  );
};

export default Notifications;
