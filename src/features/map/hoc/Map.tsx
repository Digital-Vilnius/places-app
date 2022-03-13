import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LatLng } from 'react-native-maps';
import { Dimensions, StyleSheet, View } from 'react-native';
import { flex1 } from '@styles/styles';
import MapView from 'react-native-maps';
import { Place } from '@features/places/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { placeRoute } from '@navigation/types';
import { withCurrentLocation } from '@core/location/hoc';
import { WithCurrentLocationProps } from '@core/location/hoc/withCurrentLocation';
import { usePlaces } from '@features/places/hooks';
import { borderRadius } from '@styles/constants';
import { NearPlaces } from '@features/places/hoc';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Map as ControlledMap } from '../components';

const halfScreenHeight = Dimensions.get('window').height / 2;

const Map: FC<WithCurrentLocationProps> = (props) => {
  const { currentLocation } = props;
  const { places } = usePlaces();
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [snapIndex, setSnapIndex] = useState<number>(0);
  const mapRef = useRef<MapView>(null);

  const snapPoints = useMemo(() => {
    return [165 + bottom, halfScreenHeight + bottom];
  }, [bottom]);

  const setLocation = useCallback((latLng: LatLng) => {
    if (mapRef && mapRef.current) {
      mapRef.current.animateCamera({ center: latLng, zoom: 17 });
    }
  }, []);

  useEffect(() => {
    if (currentLocation) setLocation(currentLocation);
  }, [currentLocation, setLocation]);

  const navigateToPlace = (place: Place) => {
    navigation.navigate(placeRoute, { place });
  };

  return (
    <View style={flex1}>
      <ControlledMap
        mapPadding={{ top: 0, bottom: snapPoints[snapIndex] - bottom, left: 0, right: 0 }}
        onMarkerPress={navigateToPlace}
        ref={mapRef}
        places={places}
      />
      <BottomSheet
        index={snapIndex}
        onChange={setSnapIndex}
        backgroundStyle={styles.sheet}
        snapPoints={snapPoints}
      >
        <NearPlaces
          onPlacePress={(place) => setLocation(place.coordinates)}
          onPlaceLongPress={navigateToPlace}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  sheet: {
    borderTopRightRadius: borderRadius.m,
    borderTopLeftRadius: borderRadius.m,
  },
});

export default withCurrentLocation(Map);
