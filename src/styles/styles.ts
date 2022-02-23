import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';

export const flex1: StyleProp<ViewStyle> = {
  flex: 1,
};

export const row: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const center: StyleProp<ViewStyle> = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const spaceBetween: StyleProp<ViewStyle> = {
  justifyContent: 'space-between',
};

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

export const headerBackTitleStyle: StyleProp<TextStyle> = {
  fontFamily: fonts.primary.bold,
  fontSize: fontSizes.m,
};
