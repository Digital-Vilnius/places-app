import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { PlaceRoute } from '@navigation/types';
import { StatusBar } from 'react-native';
import { ScreenContainer } from '@components';
import { Place } from '../components';

const PlaceScreen: FC<StackScreenProps<RootStackParamList, PlaceRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { place } = params;

  return (
    <ScreenContainer>
      <StatusBar barStyle="dark-content" />
      <Place place={place} />
    </ScreenContainer>
  );
};

export default PlaceScreen;
