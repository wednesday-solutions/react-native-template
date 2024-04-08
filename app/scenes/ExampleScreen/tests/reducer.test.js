import {
  exampleContainerReducer,
  initialState,
  exampleScreenTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
const setupState = () => ({
  state: initialState,
  user: 'Mohammed Ali Chherawalla'
});
describe('Tests for reducers used in the ExampleScreen', () => {
  it('should return the initial state', () => {
    const { state } = setupState();
    expect(exampleContainerReducer(undefined, {})).toEqual(state);
  });

  it('should ensure that userLoading = true when an action of type REQUEST_FETCH_USER is dispatched', () => {
    const { state, user } = setupState();
    const expectedResult = state
      .set('userIsLoading', true)
      .set('userErrorMessage', null);
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.REQUEST_FETCH_USER,
        user
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the user data is present and userLoading = false when SUCCESS_FETCH_USER is dispatched', () => {
    const { state, user } = setupState();
    const expectedResult = state
      .set('user', { name: user })
      .set('userIsLoading', false)
      .set('userErrorMessage', null);
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.SUCCESS_FETCH_USER,
        user: { name: user }
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the userErrorMessage has some data and userLoading = false when FAILURE_FETCH_USER is dispatched', () => {
    const { state } = setupState();
    const expectedResult = state
      .set('user', {})
      .set('userIsLoading', false)
      .set('userErrorMessage', 'There was some error');
    expect(
      exampleContainerReducer(state, {
        type: exampleScreenTypes.FAILURE_FETCH_USER,
        errorMessage: 'There was some error'
      })
    ).toEqual(expectedResult);
  });
});
