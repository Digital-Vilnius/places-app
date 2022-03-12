import React, { FC } from 'react';
import { usePlaces } from '@features/places/hooks';
import { useNavigation } from '@react-navigation/native';
import { placeRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { NearPlaces as ControlledNearPlaces } from '../components';
import { Place } from '../types';

interface Props {
  onPlacePress?: (place: Place) => void;
  onPlaceLongPress: (place: Place) => void;
}

const NearPlaces: FC<Props> = (props) => {
  const { onPlacePress, onPlaceLongPress } = props;
  const { places, isRefetching, refetch } = usePlaces();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePlacePress = (place: Place) => {
    navigation.navigate(placeRoute, { place });
  };

  return (
    <ControlledNearPlaces
      onRefresh={refetch}
      onPlaceLongPress={onPlaceLongPress}
      onPlacePress={onPlacePress ?? handlePlacePress}
      places={places}
      isRefreshing={isRefetching}
    />
  );
};

export default NearPlaces;
