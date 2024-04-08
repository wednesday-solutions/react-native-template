import { changeLocale } from '../actions';
import { CHANGE_LOCALE } from '../constants'; // Import your action creator and action type

// Test suite for the changeLocale action creator
describe('changeLocale action creator', () => {
  it('should create an action to change the locale', () => {
    // Define the expected language locale
    const languageLocale = 'fr';
    // Expected action object to be returned
    const expectedAction = {
      type: CHANGE_LOCALE,
      locale: languageLocale
    };
    // Call the changeLocale action creator with a languageLocale argument
    const action = changeLocale(languageLocale);
    // Assert that the action creator returns the correct action
    expect(action).toEqual(expectedAction);
  });
});
