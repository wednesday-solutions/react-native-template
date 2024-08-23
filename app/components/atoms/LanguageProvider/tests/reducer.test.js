import {
  initialState,
  languageProviderTypes,
  languageProviderReducer
} from '../reducer';
const setupMockedState = state => ({ mockedState: state });
/* eslint-disable default-case, no-param-reassign */
describe('Tests for LanguageProvider actions', () => {
  it('returns the initial state', () => {
    const { mockedState } = setupMockedState(initialState);
    expect(languageProviderReducer(undefined, {})).toEqual(mockedState);
  });

  it('changes the locale', () => {
    const locale = 'de';
    const { mockedState } = setupMockedState(
      initialState.set('locale', locale)
    );
    expect(
      languageProviderReducer(undefined, {
        type: languageProviderTypes.CHANGE_LOCALE,
        locale
      })
    ).toEqual(mockedState);
  });
});
