import React, { FC, useCallback, useEffect, useRef } from 'react';
import { LatLng } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
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
import { Map as ControlledMap } from '../components';

const Map: FC<WithCurrentLocationProps> = (props) => {
  const { currentLocation } = props;
  const { places } = usePlaces();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const mapRef = useRef<MapView>(null);
  const sheetRef = useRef<BottomSheet>(null);

  const setLocation = useCallback((latLng: LatLng) => {
    if (mapRef && mapRef.current) {
      mapRef.current.animateCamera({ center: latLng, zoom: 11 });
    }
  }, []);

  const setSnapPointIndex = useCallback(
    (index: number) => {
      if (sheetRef && sheetRef.current) {
        sheetRef.current.snapToIndex(index);
      }
    },
    [sheetRef]
  );

  useEffect(() => {
    if (currentLocation) setLocation(currentLocation);
  }, [currentLocation, setLocation]);

  const handlePlacePress = (place: Place) => {
    setSnapPointIndex(0);
    setLocation(place.coordinates);
  };

  const navigateToPlace = (place: Place) => {
    navigation.navigate(placeRoute, { place });
  };

  return (
    <View style={flex1}>
      <ControlledMap
        onMarkerPress={navigateToPlace}
        ref={mapRef}
        places={places}
        style={styles.map}
      />
      <BottomSheet backgroundStyle={styles.sheet} ref={sheetRef} snapPoints={[165, 375]}>
        <NearPlaces onPlacePress={handlePlacePress} onPlaceLongPress={navigateToPlace} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    marginBottom: 80 - borderRadius.s,
  },
  sheet: {
    borderTopRightRadius: borderRadius.s,
    borderTopLeftRadius: borderRadius.s,
  },
});

export default withCurrentLocation(Map);
