import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Notifications } from '../hoc';

const NotificationsScreen: FC = () => {
  return (
    <ScreenContainer>
      <Notifications />
    </ScreenContainer>
  );
};

export default NotificationsScreen;
