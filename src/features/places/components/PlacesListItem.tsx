import React, { FC } from 'react';
import { Place } from '@features/places/types';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { borderRadius, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { useTranslation } from 'react-i18next';
import { DistanceUtils } from '@utils';
import { center } from '@styles/styles';

const { width } = Dimensions.get('window');
const imageHeight = (width - sizes.xs) * 0.45;

interface Props {
  item: Place;
  onPress: () => void;
}

const PlacesListItem: FC<Props> = (props) => {
  const { item, onPress } = props;
  const image = item.images[0];
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.imageContainer}>
        {item.distance && (
          <View style={[styles.distanceContainer, center]}>
            <Text style={styles.distance}>
              {t('units.km', { distance: DistanceUtils.formatDistance(item.distance) })}
            </Text>
          </View>
        )}
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
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
  imageContainer: {
    position: 'relative',
  },
  distanceContainer: {
    position: 'absolute',
    top: sizes.xs,
    left: sizes.xs,
    height: 24,
    borderRadius: borderRadius.s,
    paddingHorizontal: sizes.m,
    backgroundColor: colors.text.primary,
    zIndex: 99,
  },
  distance: {
    color: colors.white,
    fontFamily: fonts.primary.regular,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.s,
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
    fontFamily: fonts.secondary.regular,
  },
});

export default PlacesListItem;
