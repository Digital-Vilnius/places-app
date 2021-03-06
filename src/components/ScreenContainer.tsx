import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@styles/constants';
import { flex1 } from '@styles/styles';

export interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = (props) => {
  const { children } = props;

  return <View style={[flex1, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

export default ScreenContainer;
