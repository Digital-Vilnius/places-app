import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { flex1 } from '@styles/styles';
import { useContactsForm } from '../hooks';
import { ContactsForm } from '@features/contacts/components';
import { bottomSpacings, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';

const Contacts: FC = () => {
  const { control, save, handleSubmit } = useContactsForm();

  return (
    <View style={[styles.container, flex1]}>
      <Text style={[styles.description, bottomSpacings.xl1]}>
        Please fill out the form below and we will contact you shortly
      </Text>
      <ContactsForm control={control} save={handleSubmit(save)} />
    </View>
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
