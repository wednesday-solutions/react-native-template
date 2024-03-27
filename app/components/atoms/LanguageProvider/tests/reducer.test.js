import {
  initialState,
  languageProviderTypes,
  languageProviderReducer
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Tests for LanguageProvider actions', () => {
  const mockedState = initialState;
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(mockedState);
  });

  it('changes the locale', () => {
    const locale = 'de';
    const UpdateMockedState = mockedState.set('locale', locale);
    expect(
      languageProviderReducer(undefined, {
        type: languageProviderTypes.CHANGE_LOCALE,
        locale
      })
    ).toEqual(UpdateMockedState);
  });
});
