import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/* eslint-disable fp/no-mutating-assign */
/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line

const enLocaleData = require('react-intl/locale-data/en');

const enTranslationMessages = require('./translations/en.json');

addLocaleData(enLocaleData);
export const DEFAULT_LOCALE = 'en';

// prettier-ignore
export const appLocales = [
  'en',
];
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslationMessages // log this object to ensure it's correctly loaded
      }
    },
    interpolation: {
      escapeValue: true // not needed for react!!
    }
  });

export default i18n;

// Add a log to check if the initialization is successful
export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages)
};
