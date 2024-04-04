import {
  initialState,
  languageProviderTypes,
  languageProviderReducer
} from '../reducer';
const setupMockedState = () => ({ mockedState: initialState });
/* eslint-disable default-case, no-param-reassign */
describe('Tests for LanguageProvider actions', () => {
  it('returns the initial state', () => {
    const { mockedState } = setupMockedState();
    expect(languageProviderReducer(undefined, {})).toEqual(mockedState);
  });

  it('changes the locale', () => {
    const { mockedState } = setupMockedState();
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
