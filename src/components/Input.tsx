import React, { FC } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { borderRadius, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';

interface Props {
  onChange: (value: string) => void;
  value: string;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Input: FC<Props> = (props) => {
  const { onChange, value, disabled, placeholder, onBlur, style, keyboardType } = props;

  return (
    <View style={style}>
      <TextInput
        keyboardType={keyboardType}
        style={styles.input}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        placeholderTextColor={hexToRgba(colors.text.primary, 0.4)}
        placeholder={placeholder}
        editable={!disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    paddingHorizontal: sizes.m,
    height: 48,
    borderRadius: borderRadius.s,
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
  },
});

export default Input;
