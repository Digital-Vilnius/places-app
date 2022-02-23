import React, { FC } from 'react';
import { useAboutContent } from '../hooks';
import { AboutProject as ControlledAboutProject } from '../components';

const AboutProject: FC = () => {
  const { content, refetch, isRefetching, isLoading } = useAboutContent();

  return <ControlledAboutProject />;
};

export default AboutProject;
