import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { drawerNavigator, notificationRoute, placeRoute } from './types';
import { Place } from '@features/places/types';
import DrawerNavigator from './DrawerNavigator';
import { PlaceScreen } from '@features/places/screens';
import { NotificationScreen } from '@features/notifications/screens';
import { Notification } from '@features/notifications/types';
import { headerBackTitleStyle, headerStyle } from '@styles/styles';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { sizes } from '@styles/constants';

const backIcon = require('@assets/images/back.png');

export type RootStackParamList = {
  [placeRoute]: { place: Place };
  [notificationRoute]: { notification: Notification };
  [drawerNavigator]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: true,
  headerStyle,
  headerBackTitleStyle,
  headerShadowVisible: false,
  headerBackTitleVisible: true,
  headerBackTitle: 'Back',
  headerBackImage: () => <Image style={headerBackImageStyle} source={backIcon} />,
};

const drawerOptions = {
  headerShown: false,
};

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen
          options={drawerOptions}
          name={drawerNavigator}
          component={DrawerNavigator}
        />
        <RootStack.Screen name={placeRoute} component={PlaceScreen} />
        <RootStack.Screen name={notificationRoute} component={NotificationScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export const headerBackImageStyle: StyleProp<ImageStyle> = {
  marginRight: sizes.l,
};

export default RootNavigator;
