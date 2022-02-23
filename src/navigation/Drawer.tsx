import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import {
  aboutProjectRoute,
  contactsRoute,
  mapRoute,
  notificationsRoute,
  placesRoute,
  settingsRoute,
} from '@navigation/types';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';
import { center, flex1 } from '@styles/styles';

const closeIcon = require('@assets/images/icon_close.png');
const logo = require('@assets/images/logo.png');

const Drawer: FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <View style={flex1}>
      <View style={[center, styles.header]}>
        <TouchableOpacity style={styles.closeIcon} onPress={navigation.closeDrawer}>
          <Image source={closeIcon} />
        </TouchableOpacity>
        <Image source={logo} />
      </View>
      <View style={[flex1, styles.items]}>
        <Text onPress={() => navigation.navigate(mapRoute)} style={styles.item}>
          Map
        </Text>
        <Text onPress={() => navigation.navigate(placesRoute)} style={styles.item}>
          Discover
        </Text>
        <Text onPress={() => navigation.navigate(notificationsRoute)} style={styles.item}>
          Notifications
        </Text>
        <Text onPress={() => navigation.navigate(aboutProjectRoute)} style={styles.item}>
          About project
        </Text>
        <Text onPress={() => navigation.navigate(contactsRoute)} style={styles.item}>
          Contact us
        </Text>
        <Text onPress={() => navigation.navigate(settingsRoute)} style={styles.item}>
          Settings
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    left: 20,
    paddingBottom: 4,
  },
  items: {
    justifyContent: 'center',
    paddingHorizontal: 80,
  },
  item: {
    paddingVertical: 30,
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
});

export default Drawer;
