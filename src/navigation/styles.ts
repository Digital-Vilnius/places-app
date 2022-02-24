import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';

export const headerStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.background,
};

export const headerTitleStyle: StyleProp<TextStyle> = {
  color: colors.text.primary,
  fontSize: fontSizes.m,
  lineHeight: lineHeights.m,
  fontFamily: fonts.primary.bold,
};

export const drawerStyle: StyleProp<ViewStyle> = {
  width: 320,
  backgroundColor: colors.white,
  borderBottomRightRadius: 20,
  borderTopRightRadius: 20,
  paddingVertical: 50,
};

export const headerRightContainerStyle: StyleProp<ViewStyle> = {
  paddingRight: sizes.l,
};

export const headerLeftContainerStyle: StyleProp<ViewStyle> = {
  paddingLeft: sizes.l,
};

export const headerBackgroundContainerStyle: StyleProp<ViewStyle> = {
  backgroundColor: hexToRgba(colors.transparentHeaderBackground, 0.2),
};
