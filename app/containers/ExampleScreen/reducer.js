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

export const fetchUserLoading = state => {
  state = state.set('userIsLoading', true)
  state = state.set('userErrorMessage', null)
  return state
}

export const fetchUserSuccess = (state, { user }) => {
  state = state.set('user', user)
  state = state.set('userIsLoading', false)
  state = state.set('userErrorMessage', null)
  return state
}

export const fetchUserFailure = (state, { errorMessage }) => {
  state = state.set('user', {})
  state = state.set('userIsLoading', false)
  state = state.set('userErrorMessage', errorMessage)
  return state
}

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
