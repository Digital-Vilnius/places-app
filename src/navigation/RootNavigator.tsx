import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Place } from '@features/places/types';
import { PlaceScreen } from '@features/places/screens';
import { NotificationScreen } from '@features/notifications/screens';
import { Notification } from '@features/notifications/types';
import { ImageStyle, StyleProp } from 'react-native';
import { sizes } from '@styles/constants';
import { UsagePolicyScreen } from '@features/gdpr/screens';
import { useTranslation } from 'react-i18next';
import { BackButton, Language } from './components';
import {
  headerBackgroundContainerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerStyle,
  headerTitleStyle,
} from './styles';
import DrawerNavigator from './DrawerNavigator';
import { drawerNavigator, notificationRoute, placeRoute, usagePolicyRoute } from './types';

export type RootStackParamList = {
  [placeRoute]: { place: Place };
  [notificationRoute]: { notification: Notification };
  [drawerNavigator]: undefined;
  [usagePolicyRoute]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: true,
  headerStyle,
  headerShadowVisible: false,
  headerRightContainerStyle,
  headerLeftContainerStyle,
  title: '',
  headerTitleAlign: 'center',
  headerTitleStyle,
  headerRight: () => <Language />,
  headerLeft: ({ canGoBack }) => (canGoBack ? <BackButton /> : undefined),
};

const drawerOptions = {
  headerShown: false,
};

const RootNavigator: FC = () => {
  const { t } = useTranslation();

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
            headerBackgroundContainerStyle,
            headerLeft: () => <BackButton isWhite />,
          }}
          name={placeRoute}
          component={PlaceScreen}
        />
        <RootStack.Screen name={notificationRoute} component={NotificationScreen} />
        <RootStack.Screen
          options={{ title: t('titles.usage_policy') }}
          name={usagePolicyRoute}
          component={UsagePolicyScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export const headerBackImageStyle: StyleProp<ImageStyle> = {
  marginRight: sizes.l,
};

export default RootNavigator;
