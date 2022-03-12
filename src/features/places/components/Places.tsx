import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { ListSeparator } from '@components';
import { sizes } from '@styles/constants';
import PlacesListItem from './PlacesListItem';
import { Place } from '../types';

interface Props {
  isRefreshing: boolean;
  onRefresh: () => void;
  places: Place[];
  onPlacePress: (place: Place) => void;
}

const Places: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, places, onPlacePress } = props;

  const renderItem = (item: ListRenderItemInfo<Place>) => {
    const place = item.item;
    return <PlacesListItem onPress={() => onPlacePress(place)} item={place} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={ListSeparator}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    padding: sizes.xs,
  },
});

export default Places;
