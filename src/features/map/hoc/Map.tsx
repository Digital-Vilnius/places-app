import React, { FC } from 'react';
import { usePlaces } from '@features/places/hooks';
import { Marker, Region } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { borderRadius } from '@styles/constants';
import { flex1 } from '@styles/styles';
import MapView from 'react-native-maps';
import { Place } from '@features/places/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { placeRoute } from '@navigation/types';

const initialRegion: Region = {
  longitude: 21.064835,
  latitude: 56.369305,
  latitudeDelta: 0.8922,
  longitudeDelta: 0.8421,
};

const Map: FC = () => {
  const { places } = usePlaces();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePlacePress = (place: Place) => {
    navigation.navigate(placeRoute, { place });
  };

  return (
    <View style={[flex1, styles.container]}>
      <MapView style={flex1} zoomEnabled zoomControlEnabled initialRegion={initialRegion}>
        {places.map((place) => (
          <Marker
            key={place.id}
            onPress={() => handlePlacePress(place)}
            coordinate={place.coordinates}
            image={{ uri: place.icon }}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: borderRadius.m,
    borderTopLeftRadius: borderRadius.m,
    overflow: 'hidden',
  },
});

export default Map;
