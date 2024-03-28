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

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessageOptions = {
      true: defaultFormattedMessages[key],
      false: messages[key]
    };
    const formattedCondition = !messages[key] && locale !== DEFAULT_LOCALE;
    return {
      ...formattedMessages,
      [key]: formattedMessageOptions[formattedCondition]
    };
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages)
};
