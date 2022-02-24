import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { flex1 } from '@styles/styles';
import { useContactsForm } from '../hooks';
import { ContactsForm } from '@features/contacts/components';
import { bottomSpacings, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { useTranslation } from 'react-i18next';

const Contacts: FC = () => {
  const { control, save, handleSubmit } = useContactsForm();
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={[styles.container, flex1]}>
      <Text style={[styles.description, bottomSpacings.xl1]}>{t('phrases.contacts_help')}</Text>
      <ContactsForm control={control} save={handleSubmit(save)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.xs,
  },
  description: {
    textAlign: 'center',
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
    paddingHorizontal: sizes.xs,
  },
});

export default Contacts;
