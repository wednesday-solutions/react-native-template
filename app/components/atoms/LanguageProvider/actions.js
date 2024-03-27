import { CHANGE_LOCALE } from './constants';

/**
 * Description
 * @param {any} languageLocale
 * @returns {any}
 */
export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  };
}
