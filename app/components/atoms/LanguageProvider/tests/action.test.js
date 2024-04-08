import { changeLocale } from '../actions';
import { CHANGE_LOCALE } from '../constants';

// Test suite for the changeLocale action creator
describe('changeLocale action creator', () => {
  it('should create an action to change the locale', () => {
    const languageLocale = 'en';
    const expectedAction = {
      type: CHANGE_LOCALE,
      locale: languageLocale
    };
    const action = changeLocale(languageLocale);
    expect(action).toEqual(expectedAction);
  });
});
