import { createActions } from 'reduxsauce'
import { fromJS } from 'immutable'
import produce from 'immer'
export const { Types: ExampleTypes, Creators: ExampleActions } = createActions({
  // Fetch user informations
  fetchUser: null,
  // The operation has started and is loading
  fetchUserLoading: null,
  // User information was successfully fetched
  fetchUserSuccess: ['user'],
  // An error occurred
  fetchUserFailure: ['errorMessage']
})

export const initialState = fromJS({
  user: {},
  userIsLoading: false,
  userErrorMessage: null
})

export const fetchUserLoading = state =>
  state.set('userIsLoading', true).set('userErrorMessage', null)

export const fetchUserSuccess = (state, { user }) =>
  state
    .set('user', user)
    .set('userIsLoading', false)
    .set('userErrorMessage', null)

export const fetchUserFailure = (state, { errorMessage }) =>
  state
    .set('user', {})
    .set('userIsLoading', false)
    .set('userErrorMessage', errorMessage)

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const exampleContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case ExampleTypes.FETCH_USER_LOADING:
        return fetchUserLoading(state, action)
      case ExampleTypes.FETCH_USER_SUCCESS:
        return fetchUserSuccess(state, action)
      case ExampleTypes.FETCH_USER_FAILURE:
        return fetchUserFailure(state, action)
      default:
        return state
    }
  })
