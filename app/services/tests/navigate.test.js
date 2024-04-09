import { navigatorObject } from '../NavigationService';
import NavigationService from '@app/services/NavigationService';
import { set } from 'lodash';
import { NavigationActions } from '@react-navigation/compat';
jest.mock('@react-navigation/compat', () => ({
  NavigationActions: {
    navigate: jest.fn()
  }
}));
const mockDispatch = jest.fn();
describe('navigate', () => {
  const { navigate } = NavigationService;
  beforeEach(() => {
    set(navigatorObject, 'navigator', { dispatch: mockDispatch });
  });

  afterEach(() => {
    // Reset mocks after each test
    jest.clearAllMocks();
  });

  it('dispatches navigation action with the correct routeName and params', () => {
    const routeName = '/test';
    const params = { screen: 'MainScreen' };
    NavigationActions.navigate.mockReturnValueOnce({
      type: 'NAVIGATE_ACTION',
      payload: { routeName, params }
    });
    navigate(routeName, params);
    expect(NavigationActions.navigate).toHaveBeenCalledWith({
      routeName,
      params
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'NAVIGATE_ACTION',
      payload: { routeName, params }
    });
  });
});
