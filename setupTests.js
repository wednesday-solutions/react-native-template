import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { LogBox } from 'react-native';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers)
  };
});
jest.mock('i18next', () => {
  const originalI18next = jest.requireActual('i18next');

  return {
    ...originalI18next,
    use: jest.fn().mockReturnThis(),
    init: jest.fn().mockImplementation((options, callback) => {
      if (callback) callback();
      return Promise.resolve();
    }),
    t: jest.fn().mockImplementation(key => key), // Simple mock implementation for translations
    language: 'en'
  };
});

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn()
  },
  useTranslation: () => ({
    t: jest.fn().mockImplementation(key => key),
    i18n: {
      changeLanguage: jest.fn().mockResolvedValue('en'),
      language: 'en'
    }
  })
}));

LogBox.ignoreAllLogs();
