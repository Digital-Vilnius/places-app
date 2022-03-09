import React, { FC } from 'react';
import { SafeAreaScreenContainer } from '@components';
import { AboutProject } from '../hoc';

const AboutProjectScreen: FC = () => {
  return (
    <SafeAreaScreenContainer>
      <AboutProject />
    </SafeAreaScreenContainer>
  );
};

export default AboutProjectScreen;
