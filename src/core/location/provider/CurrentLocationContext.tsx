import { createContext } from 'react';
import { Location } from '../types';

export interface LocationContextValue {
  currentLocation: Location | null;
}

const CurrentLocationContext = createContext<LocationContextValue>({
  currentLocation: null,
});

export default CurrentLocationContext;
