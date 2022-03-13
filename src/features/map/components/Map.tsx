import React, { forwardRef } from 'react';
import { MapViewProps, Marker, Region } from 'react-native-maps';
import { flex1 } from '@styles/styles';
import MapView from 'react-native-maps';
import { Place } from '@features/places/types';

const initialRegion: Region = {
  longitude: 21.064835,
  latitude: 56.369305,
  latitudeDelta: 0.8922,
  longitudeDelta: 0.8421,
};

type Props = Omit<
  MapViewProps,
  'onMarkerPress' | 'initialRegion' | 'zoomEnabled' | 'zoomControlEnabled' | 'showsUserLocation'
> & {
  places: Place[];
  onMarkerPress: (place: Place) => void;
};

const Map = forwardRef<MapView, Props>((props, ref) => {
  const { places, onMarkerPress, ...rest } = props;

  return (
    <MapView
      showsUserLocation={true}
      ref={ref}
      style={flex1}
      zoomEnabled
      zoomControlEnabled
      initialRegion={initialRegion}
      {...rest}
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          onPress={() => onMarkerPress(place)}
          coordinate={place.coordinates}
          image={{ uri: place.icon }}
        />
      ))}
    </MapView>
  );
});

Map.displayName = 'Map';

export default Map;
