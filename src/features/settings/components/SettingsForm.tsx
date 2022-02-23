import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { SettingsFormData } from '@features/settings/types';
import { StyleSheet, Text, View } from 'react-native';
import { Button, LanguagesChoice, Section, Switch } from '@components';
import { bottomSpacings, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { flex1, row, spaceBetween } from '@styles/styles';

interface Props {
  control: Control<SettingsFormData>;
  onSave: () => void;
}

const SettingsForm: FC<Props> = (props) => {
  const { onSave, control } = props;

  return (
    <View>
      <Section contentStyle={styles.languagesContent} style={bottomSpacings.l} title="Languages">
        <Controller
          control={control}
          name="lang"
          render={({ field }) => <LanguagesChoice onChange={field.onChange} value={field.value} />}
        />
      </Section>
      <Section style={bottomSpacings.xl} title="Notifications">
        <View style={[row, spaceBetween]}>
          <View style={[flex1, styles.notificationsDetails]}>
            <Text style={styles.notificationsTitle}>Push-notification</Text>
            <Text style={styles.notificationsDescription}>
              Get notifications about new places ant other relevant information
            </Text>
          </View>
          <Controller
            control={control}
            name="isNotificationsOn"
            render={({ field }) => <Switch onChange={field.onChange} selected={field.value} />}
          />
        </View>
      </Section>
      <Button onPress={onSave} label="Update settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  languagesContent: {
    paddingVertical: sizes.xs,
  },
  notificationsDetails: {
    paddingRight: sizes.xxl,
  },
  notificationsTitle: {
    color: colors.text.primary,
    fontFamily: fonts.secondary.semiBold,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    marginBottom: sizes.xxxs,
  },
  notificationsDescription: {
    color: colors.text.primary,
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    opacity: 0.6,
  },
});

export default SettingsForm;
