import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';

const LogoTitle: FC = () => {
  return (
    <Text style={styles.title}>
      Heritage
      <Text style={styles.highlighted}>{` 4 `}</Text>
      Life
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary.regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
  },
  highlighted: {
    color: colors.primary,
    fontFamily: fonts.primary.bold,
  },
});

export default LogoTitle;
