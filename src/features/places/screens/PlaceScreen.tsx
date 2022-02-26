import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { PlaceRoute } from '@navigation/types';
import { Place } from '../components';

const PlaceScreen: FC<StackScreenProps<RootStackParamList, PlaceRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { place } = params;

  return <Place place={place} />;
};

export default PlaceScreen;
