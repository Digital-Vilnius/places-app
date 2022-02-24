import { TFunction } from 'i18next';
import { LocaleObject } from 'yup/lib/locale';

const yupDictionary = (t: TFunction): LocaleObject => {
  return {
    mixed: {
      default: t('validations.field_is_invalid'),
      required: t('validations.field_is_required'),
      notType: t('validations.field_is_invalid'),
    },
    string: {
      email: t('validations.email_is_invalid'),
    },
  };
};

export default yupDictionary;
