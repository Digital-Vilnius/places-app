import React, { FC } from 'react';
import { useAppSelector } from '@core/store';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../DrawerNavigator';
import { settingsRoute } from '../types';
import { Image, TouchableOpacity } from 'react-native';
import { LanguagesUtils } from '@utils';

const Language: FC = () => {
  const { lang } = useAppSelector((state) => state.settings);
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const handleOnPress = () => {
    navigation.navigate(settingsRoute);
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Image source={LanguagesUtils.getIcon(lang)} />
    </TouchableOpacity>
  );
};

export default Language;
