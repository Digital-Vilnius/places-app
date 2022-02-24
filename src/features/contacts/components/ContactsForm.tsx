import React, { FC } from 'react';
import { View } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { ContactsFormData } from '@features/contacts/types';
import { Button, Input, Radio, Textarea } from '@components';
import { bottomSpacings } from '@styles/constants';
import { useTranslation } from 'react-i18next';

interface Props {
  control: Control<ContactsFormData>;
  save: () => void;
  isLoading: boolean;
}

const ContactsForm: FC<Props> = (props) => {
  const { save, control, isLoading } = props;
  const { t } = useTranslation();

  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('titles.name')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Input
            keyboardType="email-address"
            style={bottomSpacings.xs}
            placeholder={t('titles.email_address')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="subject"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('titles.subject')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="message"
        render={({ field, fieldState: { error } }) => (
          <Textarea
            style={bottomSpacings.m}
            placeholder={t('titles.message')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="marketingAgreement"
        render={({ field, fieldState: { error } }) => (
          <Radio
            label={t('phrases.contacts_agreement')}
            style={bottomSpacings.xl}
            onChange={field.onChange}
            checked={field.value}
            error={error?.message}
          />
        )}
      />
      <Button isLoading={isLoading} label={t('buttons.send')} onPress={save} />
    </View>
  );
};

export default ContactsForm;
