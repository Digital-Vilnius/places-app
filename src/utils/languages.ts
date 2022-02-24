const lithuanianIcon = require('@assets/images/lt.png');
const russianIcon = require('@assets/images/ru.png');
const englishIcon = require('@assets/images/en.png');

export const languagesChoices = [
  { icon: englishIcon, value: 'en', label: 'English' },
  { icon: russianIcon, value: 'ru', label: 'Русский' },
  { icon: lithuanianIcon, value: 'lt', label: 'Lietuvių' },
];

export const getIcon = (lang: string) => {
  if (lang === 'lt') return lithuanianIcon;
  if (lang === 'ru') return russianIcon;
  return englishIcon;
};
