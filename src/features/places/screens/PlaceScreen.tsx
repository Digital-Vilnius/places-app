import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Place } from '../components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { PlaceRoute } from '@navigation/types';

const PlaceScreen: FC<StackScreenProps<RootStackParamList, PlaceRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { place } = params;

  return (
    <ScreenContainer>
      <Place place={place} />
    </ScreenContainer>
  );
};

export default PlaceScreen;
