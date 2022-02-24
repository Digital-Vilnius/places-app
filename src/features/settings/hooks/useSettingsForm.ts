import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@core/store';
import { setIsNotificationsOn } from '@features/settings/slice';
import { ToastService } from '@core/toast';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { SettingsFormData } from '../types';

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
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { locale, isNotificationsOn } = useAppSelector((state) => state.settings);

  const { control, handleSubmit } = useForm<SettingsFormData>({
    resolver: yupResolver(getSchema()),
    defaultValues: { lang: locale, isNotificationsOn },
  });

  const save = async (data: SettingsFormData) => {
    dispatch(setIsNotificationsOn({ isNotificationsOn: data.isNotificationsOn }));
    await i18n.changeLanguage(data.lang);
    ToastService.success(t('titles.success'), t('phrases.settings_successfully_updated'));
  };

  return { control, handleSubmit, save };
};

export default useSettingsForm;
