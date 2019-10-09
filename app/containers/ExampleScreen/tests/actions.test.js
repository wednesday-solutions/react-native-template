import { ExampleTypes, ExampleActions } from '../reducer'

describe('ExampleScreen actions', () => {
  it('should fire action of type FETCH_USER', () => {
    const expected = {
      type: ExampleTypes.FETCH_USER
    }
    expect(ExampleActions.fetchUser()).toEqual(expected)
  })
  it('should fire action of type FETCH_USER_LOADING', () => {
    const expected = {
      type: ExampleTypes.FETCH_USER_LOADING
    }
    expect(ExampleActions.fetchUserLoading()).toEqual(expected)
  })
  it('should fire action of type FETCH_USER_SUCCESS', () => {
    const expected = {
      type: ExampleTypes.FETCH_USER_SUCCESS
    }
    expect(ExampleActions.fetchUserSuccess()).toEqual(expected)
  })
  it('should fire action of type FETCH_USER_FAILURE', () => {
    const expected = {
      type: ExampleTypes.FETCH_USER_FAILURE
    }
    expect(ExampleActions.fetchUserFailure()).toEqual(expected)
  })
})
