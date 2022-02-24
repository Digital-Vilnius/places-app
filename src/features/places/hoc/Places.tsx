import React, { FC } from 'react';
import { usePlaces } from '@features/places/hooks';
import { useNavigation } from '@react-navigation/native';
import { placeRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { Place } from '../types';
import { Places as ControlledPlaces } from '../components';

const Places: FC = () => {
  const { places, isLoading, isRefetching, refetch } = usePlaces();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePlacePress = (place: Place) => {
    navigation.navigate(placeRoute, { place });
  };

  return (
    <ControlledPlaces
      onRefresh={refetch}
      onPlacePress={handlePlacePress}
      places={places}
      refreshing={isLoading || isRefetching}
    />
  );
};

export default Places;
