import React, { FC } from 'react';
import { useSettingsForm } from '@features/settings/hooks';
import { SettingsForm } from '@features/settings/components';
import { StyleSheet, Text, View } from 'react-native';
import { flex1 } from '@styles/styles';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { usagePolicyRoute } from '@navigation/types';

const Settings: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { control, save, handleSubmit } = useSettingsForm();

  const handleUsagePolicyPress = () => {
    navigation.navigate(usagePolicyRoute);
  };

  return (
    <View style={[flex1, styles.container]}>
      <SettingsForm control={control} onSave={handleSubmit(save)} />
      <Text onPress={handleUsagePolicyPress} style={styles.link}>
        {t('titles.usage_policy')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.xs,
    justifyContent: 'space-between',
    paddingBottom: sizes.xl,
  },
  link: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
    textAlign: 'center',
    fontFamily: fonts.secondary.regular,
  },
});

export default Settings;
