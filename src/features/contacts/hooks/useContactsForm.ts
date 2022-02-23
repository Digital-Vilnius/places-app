import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactsFormData } from '@features/contacts/types';

const getSchema = () => {
  return yup
    .object()
    .shape({
      fullName: yup.string().required(),
      email: yup.string().email().required(),
      subject: yup.string().required(),
      message: yup.string().required(),
      marketingAgreement: yup.boolean().required(),
    })
    .required();
};

const useContactsForm = () => {
  const { control, handleSubmit } = useForm<ContactsFormData>({
    resolver: yupResolver(getSchema()),
  });

  const save = async (data: ContactsFormData) => {
    console.log(data);
  };

  return { control, handleSubmit, save };
};

export default useContactsForm;
