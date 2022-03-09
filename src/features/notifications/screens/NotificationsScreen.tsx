import React, { FC } from 'react';
import { SafeAreaScreenContainer } from '@components';
import { Notifications } from '../hoc';

const NotificationsScreen: FC = () => {
  return (
    <SafeAreaScreenContainer>
      <Notifications />
    </SafeAreaScreenContainer>
  );
};

export default NotificationsScreen;
