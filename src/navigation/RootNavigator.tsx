import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { drawerNavigator, notificationRoute, placeRoute } from './types';
import { Place } from '@features/places/types';
import DrawerNavigator from './DrawerNavigator';
import { PlaceScreen } from '@features/places/screens';
import { NotificationScreen } from '@features/notifications/screens';
import { Notification } from '@features/notifications/types';
import { headerLeftContainerStyle, headerRightContainerStyle, headerStyle } from './styles';
import { ImageStyle, StyleProp } from 'react-native';
import { sizes } from '@styles/constants';
import { BackButton, Language } from './components';

export type RootStackParamList = {
  [placeRoute]: { place: Place };
  [notificationRoute]: { notification: Notification };
  [drawerNavigator]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: true,
  headerStyle,
  headerShadowVisible: false,
  headerRightContainerStyle,
  headerLeftContainerStyle,
  title: '',
  headerRight: () => <Language />,
  headerLeft: ({ canGoBack }) => (canGoBack ? <BackButton /> : undefined),
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
        <RootStack.Screen
          options={{
            headerRight: undefined,
            headerTransparent: true,
            headerLeft: () => <BackButton isWhite />,
          }}
          name={placeRoute}
          component={PlaceScreen}
        />
        <RootStack.Screen name={notificationRoute} component={NotificationScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export const headerBackImageStyle: StyleProp<ImageStyle> = {
  marginRight: sizes.l,
};

export default RootNavigator;
