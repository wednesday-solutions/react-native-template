import { CHANGE_LOCALE } from './constants';

/**
 * Changes the locale/language of the application.
 * @param {string} languageLocale - The new locale/language to set.
 * @returns {object} An action object with type 'CHANGE_LOCALE' and the new locale/language.
 */
export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  };
}
