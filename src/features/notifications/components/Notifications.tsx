import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { ListSeparator } from '@components';
import { sizes } from '@styles/constants';
import { flex1 } from '@styles/styles';
import EmptyList from './EmptyList';
import NotificationsListItem from './NotificationsListItem';
import { Notification } from '../types';

interface Props {
  refreshing: boolean;
  onRefresh: () => void;
  notifications: Notification[];
  onNotificationPress: (notification: Notification) => void;
}

const Notifications: FC<Props> = (props) => {
  const { refreshing, onRefresh, notifications, onNotificationPress } = props;

  const renderItem = (item: ListRenderItemInfo<Notification>) => {
    const notification = item.item;
    return (
      <NotificationsListItem
        onPress={() => onNotificationPress(notification)}
        item={notification}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={[styles.content, flex1]}
      ItemSeparatorComponent={ListSeparator}
      ListEmptyComponent={EmptyList}
      refreshing={refreshing}
      onRefresh={onRefresh}
      data={notifications}
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

export default Notifications;
