import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Notification } from '../components';
import { StackScreenProps } from '@react-navigation/stack';
import { NotificationRoute } from '@navigation/types';
import { RootStackParamList } from '@navigation/RootNavigator';

const NotificationScreen: FC<StackScreenProps<RootStackParamList, NotificationRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { notification } = params;

  return (
    <ScreenContainer>
      <Notification notification={notification} />
    </ScreenContainer>
  );
};

export default NotificationScreen;
