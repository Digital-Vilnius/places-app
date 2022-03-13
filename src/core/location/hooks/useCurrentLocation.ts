import Geolocation from '@react-native-community/geolocation';
import { useCallback, useEffect, useState } from 'react';
import { Location } from '../types';

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const getCurrentLocationCallback = useCallback(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      console.log,
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, [setCurrentLocation]);

  useEffect(() => {
    getCurrentLocationCallback();
  }, [getCurrentLocationCallback]);

  return currentLocation;
};

export default useCurrentLocation;
