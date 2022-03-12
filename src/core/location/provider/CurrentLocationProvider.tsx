import React, { FC, useMemo } from 'react';
import CurrentLocationContext, { LocationContextValue } from './CurrentLocationContext';
import { useCurrentLocation } from '../hooks';

const CurrentLocationProvider: FC = (props) => {
  const { children } = props;
  const currentLocation = useCurrentLocation();
  const memoizedValue = useMemo<LocationContextValue>(
    () => ({ currentLocation }),
    [currentLocation]
  );

  return (
    <CurrentLocationContext.Provider value={memoizedValue}>
      {children}
    </CurrentLocationContext.Provider>
  );
};

export default CurrentLocationProvider;
