import React, { FC } from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import {
  aboutProjectRoute,
  contactsRoute,
  mapRoute,
  notificationRoute,
  notificationsRoute,
  placesRoute,
  settingsRoute,
} from './types';
import { PlacesScreen } from '@features/places/screens';
import { SettingsScreen } from '@features/settings/screens';
import { ContactsScreen } from '@features/contacts/screens';
import { AboutProjectScreen } from '@features/about/screens';
import { NotificationsScreen } from '@features/notifications/screens';
import { Notification } from '@features/notifications/types';
import {
  drawerStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerStyle,
  headerTitleStyle,
} from './styles';
import { MapScreen } from '@features/map/screens';
import { Language, Drawer, DrawerToggleButton, LogoTitle } from './components';

export type DrawerParamList = {
  [placesRoute]: undefined;
  [settingsRoute]: undefined;
  [contactsRoute]: undefined;
  [aboutProjectRoute]: undefined;
  [notificationsRoute]: undefined;
  [mapRoute]: undefined;
  [notificationRoute]: { notification: Notification };
};

const MainDrawer = createDrawerNavigator<DrawerParamList>();

const screenOptions: DrawerNavigationOptions = {
  drawerStyle,
  headerStyle,
  headerTitleStyle,
  headerRightContainerStyle,
  headerLeftContainerStyle,
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerRight: () => <Language />,
  headerLeft: () => <DrawerToggleButton />,
};

const DrawerNavigator: FC = () => {
  return (
    <MainDrawer.Navigator drawerContent={Drawer} screenOptions={screenOptions}>
      <MainDrawer.Screen
        name={mapRoute}
        options={{ headerTitle: LogoTitle }}
        component={MapScreen}
      />
      <MainDrawer.Screen
        name={placesRoute}
        options={{ title: 'Discover' }}
        component={PlacesScreen}
      />
      <MainDrawer.Screen
        name={settingsRoute}
        options={{ title: 'Settings', headerRight: undefined }}
        component={SettingsScreen}
      />
      <MainDrawer.Screen
        name={contactsRoute}
        options={{ title: 'Contact us' }}
        component={ContactsScreen}
      />
      <MainDrawer.Screen
        name={aboutProjectRoute}
        options={{ title: 'About project' }}
        component={AboutProjectScreen}
      />
      <MainDrawer.Screen
        name={notificationsRoute}
        options={{ title: 'Notifications' }}
        component={NotificationsScreen}
      />
    </MainDrawer.Navigator>
  );
};

export default DrawerNavigator;
