import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { borderRadius, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { flex1, row, spaceBetween } from '@styles/styles';
import { useTranslation } from 'react-i18next';
import { DistanceUtils } from '@utils';
import { Place } from '@features/places/types';

interface Props {
  item: Place;
  onPress: () => void;
  onLongPress: () => void;
}

const NearPlacesListItem: FC<Props> = (props) => {
  const { item, onPress, onLongPress } = props;
  const image = item.images[0];
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={[row, spaceBetween]} onLongPress={onLongPress} onPress={onPress}>
      <View style={[row, flex1, styles.details]}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={flex1}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.type}>{item.type}</Text>
        </View>
      </View>
      <Text style={styles.type}>
        {t('units.km', { distance: DistanceUtils.formatDistance(item.distance) })}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: borderRadius.s,
    height: 50,
    width: 75,
    resizeMode: 'cover',
    marginRight: sizes.xs,
  },
  details: {
    marginRight: sizes.xl,
  },
  title: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
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

export default NearPlacesListItem;
