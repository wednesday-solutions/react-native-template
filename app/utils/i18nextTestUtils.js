import i18next from 'i18next';
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
// // const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line

// // const enLocaleData = require('react-intl/locale-data/en');

const enTranslationMessages = require('@app/translations/en.json');

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18next
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
