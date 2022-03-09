import React, { FC } from 'react';
import { SafeAreaScreenContainer } from '@components';
import { UsagePolicy } from '../components';

const UsagePolicyScreen: FC = () => {
  return (
    <SafeAreaScreenContainer>
      <UsagePolicy />
    </SafeAreaScreenContainer>
  );
};

export default UsagePolicyScreen;
