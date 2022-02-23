import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Place } from '../hoc';

const PlaceScreen: FC = () => {
  return (
    <ScreenContainer>
      <Place />
    </ScreenContainer>
  );
};

export default PlaceScreen;
