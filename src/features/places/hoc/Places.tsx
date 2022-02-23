import React, { FC } from 'react';
import { usePlaces } from '@features/places/hooks';
import { Places as ControlledPlaces } from '../components';
import { useNavigation } from '@react-navigation/native';
import { Place } from '../types';
import { placeRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';

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
