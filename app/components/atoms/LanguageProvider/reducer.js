/*
 *
 * LanguageProvider reducer
 *
 */
import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';
import { DEFAULT_LOCALE } from '@app/i18n';

export const {
  Types: languageProviderTypes,
  Creators: languageProviderActions
} = createActions({
  changeLocale: ['locale']
});

export const initialState = fromJS({
  locale: DEFAULT_LOCALE
});

/* eslint-disable default-case, no-param-reassign */
export const languageProviderReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    const actionType = {
      [languageProviderTypes.CHANGE_LOCALE]: () =>
        state.set('locale', action.locale)
    };
    return action.type in actionType ? actionType[action.type]() : state;
  });

export default languageProviderReducer;
