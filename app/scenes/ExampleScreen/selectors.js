import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectExampleDomain = state =>
  (state.example || initialState).toJS();

export const selectUser = () =>
  createSelector(
    selectExampleDomain,
    substate => get(substate, 'user', null)
  );

export const selectUserIsLoading = () =>
  createSelector(
    selectExampleDomain,
    substate => get(substate, 'userIsLoading', null)
  );

export const selectUserErrorMessage = () =>
  createSelector(
    selectExampleDomain,
    substate => get(substate, 'userErrorMessage', null)
  );
