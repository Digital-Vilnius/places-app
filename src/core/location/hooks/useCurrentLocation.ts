import Geolocation from '@react-native-community/geolocation';
import { useCallback, useEffect, useState } from 'react';
import { Location } from '../types';

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const getCurrentLocationCallback = useCallback(() => {
    Geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [setCurrentLocation]);

  useEffect(() => {
    getCurrentLocationCallback();
  }, [getCurrentLocationCallback]);

  return currentLocation;
};

export default useCurrentLocation;
