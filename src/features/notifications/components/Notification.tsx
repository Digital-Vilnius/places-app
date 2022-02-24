import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Section } from '@components';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';
import { Notification as NotificationType } from '../types';

interface Props {
  notification: NotificationType;
}

const Notification: FC<Props> = (props) => {
  const { notification } = props;

  return (
    <View style={styles.container}>
      <Section title={notification.date}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.content}>{notification.content}</Text>
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.xs,
  },
  title: {
    fontFamily: fonts.secondary.regular,
    color: colors.text.primary,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    marginBottom: sizes.l,
  },
  content: {
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.xl,
    color: hexToRgba(colors.text.primary, 0.6),
  },
});

export default Notification;
