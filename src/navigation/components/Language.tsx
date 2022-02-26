import React, { FC } from 'react';
import { useAppSelector } from '@core/store';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Image, TouchableOpacity } from 'react-native';
import { LanguagesUtils } from '@utils';
import { DrawerParamList } from '../DrawerNavigator';
import { settingsRoute } from '../types';

const Language: FC = () => {
  const { locale } = useAppSelector((state) => state.settings);
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const handleOnPress = () => {
    navigation.navigate(settingsRoute);
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Image source={LanguagesUtils.getIcon(locale)} />
    </TouchableOpacity>
  );
};

export default Language;
