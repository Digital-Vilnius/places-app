import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  aboutProjectRoute,
  contactsRoute,
  mapRoute,
  notificationsRoute,
  placesRoute,
  settingsRoute,
} from './types';
import { PlacesScreen } from '@features/places/screens';
import Drawer from './Drawer';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';
import { Image, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SettingsScreen } from '@features/settings/screens';
import { ContactsScreen } from '@features/contacts/screens';

const menuIcon = require('@assets/images/menu.png');

export type DrawerParamList = {
  [placesRoute]: undefined;
  [settingsRoute]: undefined;
  [contactsRoute]: undefined;
  [aboutProjectRoute]: undefined;
  [notificationsRoute]: undefined;
  [mapRoute]: undefined;
};

const MainDrawer = createDrawerNavigator<DrawerParamList>();

export const drawerStyle: StyleProp<ViewStyle> = {
  width: 320,
  backgroundColor: colors.white,
  borderBottomRightRadius: 20,
  borderTopRightRadius: 20,
  paddingVertical: 50,
};

export const headerStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.background,
  elevation: 0,
};

export const headerTitleStyle: StyleProp<TextStyle> = {
  color: colors.text.primary,
  fontSize: fontSizes.m,
  lineHeight: lineHeights.m,
  fontFamily: fonts.primary.bold,
};

const screenOptions = {
  drawerStyle,
  headerStyle,
  headerTitleStyle,
  drawerIcon: () => <Image source={menuIcon} />,
};

const DrawerNavigator: FC = () => {
  return (
    <MainDrawer.Navigator drawerContent={Drawer} screenOptions={screenOptions}>
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
    </MainDrawer.Navigator>
  );
};

export default DrawerNavigator;
