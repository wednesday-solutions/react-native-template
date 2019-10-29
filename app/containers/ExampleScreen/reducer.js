import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';
export const {
  Types: exampleScreenTypes,
  Creators: exampleScreenActions
} = createActions({
  // Fetch user informations
  requestFetchUser: null,
  // User information was successfully fetched
  successFetchUser: ['user'],
  // An error occurred
  failureFetchUser: ['errorMessage']
});

export const initialState = fromJS({
  user: {},
  userIsLoading: false,
  userErrorMessage: null
});

export const fetchUser = state =>
  state.set('userIsLoading', true).set('userErrorMessage', null);

export const successFetchUser = (state, { user }) =>
  state
    .set('user', user)
    .set('userIsLoading', false)
    .set('userErrorMessage', null);

export const failureFetchUser = (state, { errorMessage }) =>
  state
    .set('user', {})
    .set('userIsLoading', false)
    .set('userErrorMessage', errorMessage);

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const exampleContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case exampleScreenTypes.REQUEST_FETCH_USER:
        return fetchUser(state, action);
      case exampleScreenTypes.SUCCESS_FETCH_USER:
        return successFetchUser(state, action);
      case exampleScreenTypes.FAILURE_FETCH_USER:
        return failureFetchUser(state, action);
      default:
        return state;
    }
  });
