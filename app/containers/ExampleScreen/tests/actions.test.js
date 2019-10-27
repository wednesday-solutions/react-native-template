import { exampleScreenTypes, exampleScreenActions } from '../reducer'

describe('ExampleScreen actions', () => {
  it('should fire action of type FETCH_USER', () => {
    const expected = {
      type: exampleScreenTypes.FETCH_USER
    }
    expect(exampleScreenActions.fetchUser()).toEqual(expected)
  })
  it('should fire action of type FETCH_USER_LOADING', () => {
    const expected = {
      type: exampleScreenTypes.FETCH_USER_LOADING
    }
    expect(exampleScreenActions.fetchUserLoading()).toEqual(expected)
  })
  it('should fire action of type FETCH_USER_SUCCESS', () => {
    const expected = {
      type: exampleScreenTypes.FETCH_USER_SUCCESS
    }
    expect(exampleScreenActions.fetchUserSuccess()).toEqual(expected)
  })
  it('should fire action of type FETCH_USER_FAILURE', () => {
    const expected = {
      type: exampleScreenTypes.FETCH_USER_FAILURE
    }
    expect(exampleScreenActions.fetchUserFailure()).toEqual(expected)
  })
})
