import {
  rootContainerReducer,
  initialState,
  rootScreenTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Tests for RootScreen reducers', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(rootContainerReducer(undefined, {})).toEqual(state);
  });

  it('should return the initial state when an action of type STARTUP is dispatched', () => {
    // since startup is called to initiate screen navigation the store should remain intact
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.STARTUP
      })
    ).toEqual(state);
  });
});
