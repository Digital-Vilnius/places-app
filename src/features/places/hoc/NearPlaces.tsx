import React, { FC } from 'react';
import { usePlaces } from '@features/places/hooks';
import { useNavigation } from '@react-navigation/native';
import { placeRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizes } from '@styles/constants';
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
  const { bottom } = useSafeAreaInsets();

  const handlePlacePress = (place: Place) => {
    navigation.navigate(placeRoute, { place });
  };

  return (
    <ControlledNearPlaces
      onRefresh={refetch}
      contentStyle={{ paddingBottom: bottom + sizes.xs }}
      onPlaceLongPress={onPlaceLongPress}
      onPlacePress={onPlacePress ?? handlePlacePress}
      places={places}
      isRefreshing={isRefetching}
    />
  );
};

export default NearPlaces;
