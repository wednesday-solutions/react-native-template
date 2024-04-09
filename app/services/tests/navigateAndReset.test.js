import { navigatorObject } from '../NavigationService';
import NavigationService from '@app/services/NavigationService';
import { set } from 'lodash';
import { StackActions } from '@react-navigation/compat';

jest.mock('@react-navigation/compat', () => ({
  StackActions: {
    replace: jest.fn()
  }
}));
const mockDispatch = jest.fn();
describe('test navigateAndReset', () => {
  const { navigateAndReset } = NavigationService;
  beforeEach(() => {
    set(navigatorObject, 'navigator', { dispatch: mockDispatch });
  });

  afterEach(() => {
    // Reset mocks after each test
    jest.clearAllMocks();
  });

  it('dispatches stack action with the correct routeName and params', () => {
    const routeName = '/test';
    const params = { screen: 'MainScreen' };
    StackActions.replace.mockReturnValueOnce({
      type: 'NAVIGATE_ACTION',
      payload: { routeName, params }
    });
    navigateAndReset(routeName, params);
    expect(StackActions.replace).toHaveBeenCalledWith({
      routeName,
      params
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'NAVIGATE_ACTION',
      payload: { routeName, params }
    });
  });
});
