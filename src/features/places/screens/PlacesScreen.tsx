import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Places } from '../hoc';

const PlacesScreen: FC = () => {
  return (
    <ScreenContainer>
      <Places />
    </ScreenContainer>
  );
};

export default PlacesScreen;
