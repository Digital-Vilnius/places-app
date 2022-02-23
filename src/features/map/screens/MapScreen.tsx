import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Map } from '../hoc';

const MapScreen: FC = () => {
  return (
    <ScreenContainer>
      <Map />
    </ScreenContainer>
  );
};

export default MapScreen;
