import {
  rootContainerReducer,
  initialState,
  rootScreenTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Tests for RootScreen reducers', () => {
  const setupTests = () => ({ state: initialState });

  it('should return the initial state', () => {
    const { state } = setupTests();
    expect(rootContainerReducer(undefined, {})).toEqual(state);
  });

  it('should return the initial state when an action of type STARTUP is dispatched', () => {
    const { state } = setupTests();
    // since startup is called to initiate screen navigation the store should remain intact
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.STARTUP
      })
    ).toEqual(state);
  });

  it('should return the initial state when an action of type NONEXIST is dispatched', () => {
    const { state } = setupTests();
    // since startup is called to initiate screen navigation the store should remain intact
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.NONEXIST
      })
    ).toEqual(state);
  });
});
