import { rootContainerReducer, initialState, rootScreenTypes } from '../reducer'
// import { someAction } from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('rootContainerReducer', () => {
  let state
  beforeEach(() => {
    state = initialState
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(rootContainerReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should return the initial state when an action of type STARTUP is dispatched', () => {
    // since startup is called to initiate screen navigation the store should remain intact
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.STARTUP
      })
    ).toEqual(state)
  })
})
