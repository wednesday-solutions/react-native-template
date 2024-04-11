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
    const actionTypes = {
      [exampleScreenTypes.REQUEST_FETCH_USER]: fetchUser(state),
      [exampleScreenTypes.SUCCESS_FETCH_USER]: successFetchUser(state, action),
      [exampleScreenTypes.FAILURE_FETCH_USER]: failureFetchUser(state, action)
    };
    if (actionTypes[action.type]) return actionTypes[action.type];
    return state;
  });
