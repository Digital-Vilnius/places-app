import React, { FC, useMemo } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import {
  aboutProjectRoute,
  contactsRoute,
  DrawerNavigationItem,
  mapRoute,
  notificationsRoute,
  placesRoute,
  settingsRoute,
} from '@navigation/types';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';
import { center, flex1 } from '@styles/styles';
import { useTranslation } from 'react-i18next';

const closeIcon = require('@assets/images/icon_close.png');
const logo = require('@assets/images/logo.png');

const Drawer: FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const items = useMemo<DrawerNavigationItem[]>(() => {
    return [
      {
        label: t('titles.map'),
        route: mapRoute,
      },
      {
        label: t('titles.discover'),
        route: placesRoute,
      },
      {
        label: t('titles.notifications'),
        route: notificationsRoute,
      },
      {
        label: t('titles.about_project'),
        route: aboutProjectRoute,
      },
      {
        label: t('titles.contact_us'),
        route: contactsRoute,
      },
      {
        label: t('titles.settings'),
        route: settingsRoute,
      },
    ];
  }, [t]);

  const renderItem = (item: DrawerNavigationItem) => (
    <TouchableOpacity
      key={item.label}
      style={styles.item}
      onPress={() => navigation.navigate(item.route)}
    >
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={flex1}>
      <SafeAreaView style={flex1}>
        <View style={[center, styles.header]}>
          <TouchableOpacity style={styles.closeIcon} onPress={navigation.closeDrawer}>
            <Image source={closeIcon} />
          </TouchableOpacity>
          <Image source={logo} />
        </View>
        <View style={[flex1, styles.items]}>{items.map(renderItem)}</View>
      </SafeAreaView>
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
  },
  label: {
    fontSize: fontSizes.l,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
  },
});

export default Drawer;
