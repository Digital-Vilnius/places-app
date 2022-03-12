import { getDistance } from 'geolib';
import { LatLng } from 'react-native-maps';

export const getDistanceBetweenCoords = (pointA: LatLng, pointB: LatLng): number => {
  return getDistance(pointA, pointB);
};

export const formatDistance = (distanceInMeters: number): string => {
  return (distanceInMeters / 1000).toFixed(0);
};
