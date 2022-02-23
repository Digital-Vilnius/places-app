import React, { FC } from 'react';
import { View } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { ContactsFormData } from '@features/contacts/types';
import { Button, Input, Radio, Textarea } from '@components';
import { bottomSpacings } from '@styles/constants';

interface Props {
  control: Control<ContactsFormData>;
  save: () => void;
}

const ContactsForm: FC<Props> = (props) => {
  const { save, control } = props;

  return (
    <View>
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder="Full name"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            keyboardType="email-address"
            style={bottomSpacings.xs}
            placeholder="Email address"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="subject"
        render={({ field }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder="Subject"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <Textarea
            style={bottomSpacings.m}
            placeholder="Message"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="marketingAgreement"
        render={({ field }) => (
          <Radio
            label="I agree that my filed information can be used and collected for future cummunication and merketing purposes"
            style={bottomSpacings.xl}
            onChange={field.onChange}
            checked={field.value}
          />
        )}
      />
      <Button label="Send" onPress={save} />
    </View>
  );
};

export default ContactsForm;
