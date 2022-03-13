import React, { FC } from 'react';
import { ListRenderItemInfo, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ListSeparator } from '@components';
import { sizes } from '@styles/constants';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import NearPlacesListItem from './NearPlacesListItem';
import { Place } from '../types';

interface Props {
  isRefreshing: boolean;
  onRefresh: () => void;
  places: Place[];
  onPlacePress: (place: Place) => void;
  onPlaceLongPress: (place: Place) => void;
  contentStyle?: StyleProp<ViewStyle>;
}

const NearPlaces: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, places, onPlacePress, onPlaceLongPress, contentStyle } = props;

  const renderItem = (item: ListRenderItemInfo<Place>) => {
    const place = item.item;

    return (
      <NearPlacesListItem
        onLongPress={() => onPlaceLongPress(place)}
        onPress={() => onPlacePress(place)}
        item={place}
      />
    );
  };

  return (
    <BottomSheetFlatList
      data={places}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={ListSeparator}
      contentContainerStyle={[styles.content, contentStyle]}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    padding: sizes.xs,
  },
});

export default NearPlaces;
