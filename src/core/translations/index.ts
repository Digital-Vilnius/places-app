import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import * as yup from 'yup';
import { initReactI18next } from 'react-i18next';
import enDictionary from './dictionaries/en.json';
import ruDictionary from './dictionaries/ru.json';
import ltDictionary from './dictionaries/lt.json';
import yupDictionary from './dictionaries/yupDictionary';
import { Locales } from './constants';
import { store } from '@core/store';
import { setLocale as setUserLocale } from '@features/settings/slice';
import { NativeModules, Platform } from 'react-native';

const resources = {
  [Locales.lt]: { translation: ltDictionary },
  [Locales.en]: { translation: enDictionary },
  [Locales.ru]: { translation: ruDictionary },
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    const locale = store.getState().settings.locale;
    if (locale) {
      callback(locale);
      return;
    }

    const deviceLocale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    const formattedDeviceLocale = deviceLocale.split('_')[0];
    callback(formattedDeviceLocale);
  },
  cacheUserLanguage: async (locale) => {
    store.dispatch(setUserLocale({ locale }));
  },
};

export const setupTranslations = () => {
  const supportedLocales = [Locales.en, Locales.lt, Locales.ru];

  i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
      resources,
      fallbackLng: Locales.en,
      supportedLngs: supportedLocales,
      interpolation: { escapeValue: false },
      compatibilityJSON: 'v3',
    });

  yup.setLocale(yupDictionary(i18n.t));
  i18n.on('languageChanged', () => yup.setLocale(yupDictionary(i18n.t)));
};
