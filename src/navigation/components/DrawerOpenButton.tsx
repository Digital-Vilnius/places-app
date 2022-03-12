import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../DrawerNavigator';

const menuIcon = require('@assets/images/menu.png');

const DrawerOpenButton: FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image source={menuIcon} />
    </TouchableOpacity>
  );
};

export default DrawerOpenButton;