import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactsFormData } from '@features/contacts/types';
import { ContactsClient } from '@api/clients';
import { useMutation } from 'react-query';
import { ToastService } from '@core/toast';
import { useTranslation } from 'react-i18next';

const getSchema = () => {
  return yup
    .object()
    .shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      subject: yup.string().required(),
      message: yup.string().required(),
      marketingAgreement: yup.boolean(),
    })
    .required();
};

const useContactsForm = () => {
  const { t } = useTranslation();

  const { control, handleSubmit, reset } = useForm<ContactsFormData>({
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = async (data: ContactsFormData) => {
    await ContactsClient.sendMessage(data);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  const save = async (request: ContactsFormData) => {
    await mutateAsync(request);
    reset({});
    ToastService.success(t('titles.success'), t('phrases.message_successfully_send'));
  };

  return { control, handleSubmit, save, isLoading };
};

export default useContactsForm;
