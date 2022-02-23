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
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Textarea: FC<Props> = (props) => {
  const { onChange, value, disabled, placeholder, onBlur, style } = props;

  return (
    <View style={style}>
      <TextInput
        style={styles.textarea}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        placeholderTextColor={hexToRgba(colors.text.primary, 0.4)}
        placeholder={placeholder}
        editable={!disabled}
        multiline
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: colors.white,
    paddingHorizontal: sizes.m,
    paddingVertical: sizes.m,
    height: 120,
    borderRadius: borderRadius.s,
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
    textAlignVertical: 'top',
  },
});

export default Textarea;
