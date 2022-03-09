import React, { FC } from 'react';
import { SafeAreaScreenContainer } from '@components';
import { Settings } from '../hoc';

const SettingsScreen: FC = () => {
  return (
    <SafeAreaScreenContainer>
      <Settings />
    </SafeAreaScreenContainer>
  );
};

export default SettingsScreen;
