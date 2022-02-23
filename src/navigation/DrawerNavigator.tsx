import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import Drawer from './Drawer';
import { Image } from 'react-native';
import { SettingsScreen } from '@features/settings/screens';
import { ContactsScreen } from '@features/contacts/screens';
import { AboutProjectScreen } from '@features/about/screens';
import { NotificationsScreen } from '@features/notifications/screens';
import { Notification } from '@features/notifications/types';
import { drawerStyle, headerStyle, headerTitleStyle } from '@styles/styles';
import { MapScreen } from '@features/map/screens';

const menuIcon = require('@assets/images/menu.png');

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

const screenOptions = {
  drawerStyle,
  headerStyle,
  headerTitleStyle,
  headerShadowVisible: false,
  drawerIcon: () => <Image source={menuIcon} />,
};

const DrawerNavigator: FC = () => {
  return (
    <MainDrawer.Navigator drawerContent={Drawer} screenOptions={screenOptions}>
      <MainDrawer.Screen name={mapRoute} options={{ title: 'Map' }} component={MapScreen} />
      <MainDrawer.Screen
        name={placesRoute}
        options={{ title: 'Discover' }}
        component={PlacesScreen}
      />
      <MainDrawer.Screen
        name={settingsRoute}
        options={{ title: 'Settings' }}
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
