import React, { ComponentType, useContext } from 'react';
import { Location } from '../types';
import { CurrentLocationContext } from '../provider';

export interface WithCurrentLocationProps {
  currentLocation: Location | null;
}

const withCurrentLocation = <T extends WithCurrentLocationProps = WithCurrentLocationProps>(
  Component: ComponentType<T>
) => {
  const ComponentWithLocation = (props: Omit<T, keyof WithCurrentLocationProps>) => {
    const { currentLocation } = useContext(CurrentLocationContext);
    return <Component {...{ currentLocation }} {...(props as T)} />;
  };

  const displayName = Component.displayName || Component.name || 'Component';
  ComponentWithLocation.displayName = `withCurrentLocation(${displayName})`;
  return ComponentWithLocation;
};

export default withCurrentLocation;
