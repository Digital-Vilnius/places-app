import React, { FC, useCallback } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { flex1 } from '@styles/styles';
import { ContactsForm } from '@features/contacts/components';
import { bottomSpacings, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useContactsForm } from '../hooks';

const Contacts: FC = () => {
  const { control, save, handleSubmit, isLoading, reset } = useContactsForm();
  const { t } = useTranslation();

  const onFocus = useCallback(() => {
    return () => reset({});
  }, [reset]);

  useFocusEffect(onFocus);

  return (
    <ScrollView contentContainerStyle={[styles.container, flex1]}>
      <Text style={[styles.description, bottomSpacings.xl1]}>{t('phrases.contacts_help')}</Text>
      <ContactsForm isLoading={isLoading} control={control} save={handleSubmit(save)} />
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
