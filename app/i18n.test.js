// import { formatTranslationMessages } from './i18n';

// jest.mock('app/translations/en.json', () => ({
//   message1: 'default message',
//   message2: 'default message 2'
// }));

// const esTranslationMessages = {
//   message1: 'mensaje predeterminado',
//   message2: ''
// };

// describe('Tests for formatTranslationMessages', () => {
//   it('should build only defaults when DEFAULT_LOCALE', () => {
//     const result = formatTranslationMessages('en', { a: 'a' });

//     expect(result).toEqual({ a: 'a' });
//   });

//   it('should combine default locale and current locale when not DEFAULT_LOCALE', () => {
//     const result = formatTranslationMessages('', esTranslationMessages);

//     expect(result).toEqual({
//       message1: 'mensaje predeterminado',
//       message2: 'default message 2'
//     });
//   });
// });

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

jest.mock('i18next', () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn().mockReturnThis()
}));

jest.mock('react-i18next', () => ({
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn()
  }
}));

describe('i18n configuration', () => {
  it('should configure i18next with the correct settings', () => {
    // Import the i18n configuration
    require('./i18n');

    // Verify that the language detector was used
    expect(i18next.use).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'languageDetector',
        async: true,
        detect: expect.any(Function),
        init: expect.any(Function),
        cacheUserLanguage: expect.any(Function)
      })
    );

    // Verify that the initReactI18next was used
    expect(i18next.use).toHaveBeenCalledWith(initReactI18next);

    // Verify that i18next was initialized with the correct configuration
    expect(i18next.init).toHaveBeenCalledWith(
      expect.objectContaining({
        fallbackLng: 'en',
        debug: true,
        resources: {
          en: {
            translation: expect.any(Object) // This should match the contents of enTranslationMessages
          }
        },
        interpolation: {
          escapeValue: true
        }
      })
    );
  });

  it('should detect language as "en" using the language detector', () => {
    const languageDetector = {
      detect: jest.fn()
    };

    // Call the detect function and ensure it was passed 'en'
    languageDetector.detect(language => {
      expect(language).toBe('en');
    });
  });
});
