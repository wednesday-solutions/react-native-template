import {
  exampleContainerReducer,
  initialState,
  exampleScreenTypes
} from '../reducer'
// import { someAction } from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('exampleContainerReducer', () => {
  let state
  beforeEach(() => {
    state = initialState
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(exampleContainerReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should return the initial state when an action of type FETCH_USER is dispatched', () => {
    // since fetch user is dispatched to call the fetch
    // user api the state should remain unchanged
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.FETCH_USER,
        user: 'Mohammed Ali Chherawalla'
      })
    ).toEqual(state)
  })

  it('should ensure that userLoading = true when FETCH_USER_LOADING is dispatched', () => {
    const expectedResult = state
      .set('userIsLoading', true)
      .set('userErrorMessage', null)
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.FETCH_USER_LOADING
      })
    ).toEqual(expectedResult)
  })

  it('should ensure that the user data is present and userLoading = false when FETCH_USER_SUCCESS is dispatched', () => {
    const expectedResult = state
      .set('user', { name: 'Mohammed Ali Chherawalla' })
      .set('userIsLoading', false)
      .set('userErrorMessage', null)
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.FETCH_USER_SUCCESS,
        user: { name: 'Mohammed Ali Chherawalla' }
      })
    ).toEqual(expectedResult)
  })

  it('should ensure that the userErrorMessage has some data and userLoading = false when FETCH_USER_FAILURE is dispatched', () => {
    const expectedResult = state
      .set('user', {})
      .set('userIsLoading', false)
      .set('userErrorMessage', 'There was some error bro')
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.FETCH_USER_FAILURE,
        errorMessage: 'There was some error bro'
      })
    ).toEqual(expectedResult)
  })
})
