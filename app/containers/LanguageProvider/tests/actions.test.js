import { changeLocale } from '../actions';
import { CHANGE_LOCALE } from '../constants';

describe('Tests for LanguageProvider actions', () => {
  it('has a type of CHANGE_LOCALE', () => {
    const expected = {
      type: CHANGE_LOCALE,
      locale: 'de'
    };
    expect(changeLocale('de')).toEqual(expected);
  });
});
