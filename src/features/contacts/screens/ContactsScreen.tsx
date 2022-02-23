import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Contacts } from '../hoc';

const ContactsScreen: FC = () => {
  return (
    <ScreenContainer>
      <Contacts />
    </ScreenContainer>
  );
};

export default ContactsScreen;
