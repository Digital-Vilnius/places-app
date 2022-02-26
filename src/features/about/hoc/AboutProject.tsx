import React, { FC } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { sizes } from '@styles/constants';
import { AboutProject as ControlledAboutProject } from '../components';
import { useAboutContent } from '../hooks';

const AboutProject: FC = () => {
  const { content, refetch, isRefetching } = useAboutContent();

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
    >
      {!!content && <ControlledAboutProject content={content} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: sizes.xs,
  },
});

export default AboutProject;
