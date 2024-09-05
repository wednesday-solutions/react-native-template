import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageDetector } from './i18n';

describe('i18n configuration', () => {
  it('should configure i18next with the correct settings', () => {
    // Import the i18n configuration

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
        debug: false,
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
    // Call the detect function and ensure it was passed 'en'
    languageDetector.detect(language => {
      expect(language).toBe('en');
    });
  });
});
