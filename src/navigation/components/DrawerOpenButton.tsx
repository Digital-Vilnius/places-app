import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { sizes } from '@styles/constants';
import { DrawerParamList } from '../DrawerNavigator';

const menuIcon = require('@assets/images/menu.png');

const DrawerOpenButton: FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const handleOnPress = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image source={menuIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.xxs1,
  },
});

export default DrawerOpenButton;
