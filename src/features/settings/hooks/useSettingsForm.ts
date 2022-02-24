import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { SettingsFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@core/store';
import { setSettings } from '@features/settings/slice';
import { ToastService } from '@core/toast';

const getSchema = () => {
  return yup
    .object()
    .shape({
      lang: yup.string().required(),
      isNotificationsOn: yup.boolean().required(),
    })
    .required();
};

const useSettingsForm = () => {
  const dispatch = useAppDispatch();
  const { lang, isNotificationsOn } = useAppSelector((state) => state.settings);

  const { control, handleSubmit } = useForm<SettingsFormData>({
    resolver: yupResolver(getSchema()),
    defaultValues: { lang, isNotificationsOn },
  });

  const save = async (data: SettingsFormData) => {
    dispatch(setSettings(data));
    ToastService.success('Success!', 'Settings successfully updated');
  };

  return { control, handleSubmit, save };
};

export default useSettingsForm;
