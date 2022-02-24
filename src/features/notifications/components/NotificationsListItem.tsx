import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { Section } from '@components';
import hexToRgba from 'hex-to-rgba';
import { Notification } from '../types';

interface Props {
  item: Notification;
  onPress: () => void;
}

const NotificationsListItem: FC<Props> = (props) => {
  const { item, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Section title={item.date}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </Section>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
    marginBottom: sizes.xxs1,
    fontFamily: fonts.secondary.semiBold,
  },
  content: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.m,
    color: hexToRgba(colors.text.primary, 0.6),
    fontFamily: fonts.primary.regular,
  },
});

export default NotificationsListItem;
