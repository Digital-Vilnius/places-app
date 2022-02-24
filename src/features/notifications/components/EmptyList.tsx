import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { center, flex1 } from '@styles/styles';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';
import { useTranslation } from 'react-i18next';

const bell = require('@assets/images/bell-on.png');

const EmptyList: FC = () => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, flex1, center]}>
      <Image style={styles.image} source={bell} />
      <Text style={styles.title}>{t('phrases.no_notifications_title')}</Text>
      <Text style={styles.description}>{t('phrases.no_notifications_description')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
  },
  image: {
    marginBottom: sizes.xxxl,
    width: 80,
  },
  title: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    marginBottom: sizes.xs,
    color: colors.text.primary,
    fontFamily: fonts.secondary.regular,
  },
  description: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.xl,
    fontFamily: fonts.secondary.regular,
    color: hexToRgba(colors.text.primary, 0.6),
  },
});

export default EmptyList;
