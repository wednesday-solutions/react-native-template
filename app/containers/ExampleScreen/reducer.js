import { createActions, createReducer } from 'reduxsauce'
import { fromJS } from 'immutable'

export const { Types: ExampleTypes, Creators: ExampleActions } = createActions({
  // Fetch user informations
  fetchUser: null,
  // The operation has started and is loading
  fetchUserLoading: null,
  // User informations were successfully fetched
  fetchUserSuccess: ['user'],
  // An error occurred
  fetchUserFailure: ['errorMessage']
})

export const initialState = fromJS({
  user: {},
  userIsLoading: false,
  userErrorMessage: null
})

export const fetchUserLoading = state => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user,
  userIsLoading: false,
  userErrorMessage: null
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const exampleContainerReducer = createReducer(initialState, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure
})
