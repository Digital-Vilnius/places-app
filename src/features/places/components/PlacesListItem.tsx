import React, { FC } from 'react';
import { Place } from '@features/places/types';
import { Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { borderRadius, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';

const { width } = Dimensions.get('window');
const imageHeight = (width - sizes.xs) * 0.45;

interface Props {
  item: Place;
  onPress: () => void;
}

const PlacesListItem: FC<Props> = (props) => {
  const { item, onPress } = props;
  const image = item.images[0];

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.type}>{item.type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: borderRadius.s,
    height: imageHeight,
    marginBottom: sizes.xs,
  },
  title: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
    marginBottom: sizes.xxxs,
    fontFamily: fonts.primary.bold,
  },
  type: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    color: colors.text.secondary,
    fontFamily: fonts.primary.regular,
  },
});

export default PlacesListItem;
