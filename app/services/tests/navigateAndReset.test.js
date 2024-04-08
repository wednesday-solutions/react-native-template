import { navigatorObject, navigateAndReset } from '../NavigationService';
import { set } from 'lodash';
import { StackActions } from '@react-navigation/compat';

jest.mock('@react-navigation/compat', () => ({
  StackActions: {
    replace: jest.fn()
  }
}));
const mockDispatch = jest.fn();
describe('test navigateAndReset', () => {
  beforeEach(() => {
    set(navigatorObject, 'navigator', { dispatch: mockDispatch });
  });

  afterEach(() => {
    // Reset mocks after each test
    jest.clearAllMocks();
  });

  it('dispatches stack action with the correct routeName and params', () => {
    const routeName = '/home';
    const params = { screen: 'exampleScreen' };
    StackActions.replace.mockReturnValueOnce({
      type: 'homeScreen',
      payload: { routeName, params }
    });
    navigateAndReset(routeName, params);
    expect(StackActions.replace).toHaveBeenCalledWith({
      routeName,
      params
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'homeScreen',
      payload: { routeName, params }
    });
  });
});
