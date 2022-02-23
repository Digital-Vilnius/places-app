import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { center } from '@styles/styles';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';

interface Props {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = (props) => {
  const { onPress, label, containerStyle, labelStyle } = props;

  return (
    <TouchableOpacity style={[center, styles.container, containerStyle]} onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.button.primary,
  },
  label: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.white,
    fontFamily: fonts.secondary.semiBold,
  },
});

export default Button;
