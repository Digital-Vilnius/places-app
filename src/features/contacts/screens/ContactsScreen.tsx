import React, { FC } from 'react';
import { SafeAreaScreenContainer } from '@components';
import { Contacts } from '../hoc';

const ContactsScreen: FC = () => {
  return (
    <SafeAreaScreenContainer>
      <Contacts />
    </SafeAreaScreenContainer>
  );
};

export default ContactsScreen;
