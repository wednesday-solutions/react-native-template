import { NavigationActions } from '@react-navigation/compat';
import { navigate, setTopLevelNavigator } from '../NavigationService';
jest.mock('@react-navigation/compat', () => ({
  NavigationActions: {
    navigate: jest.fn()
  }
}));
const navigatorRef = { goBack: 'goBack', dispatch: jest.fn() };
setTopLevelNavigator(navigatorRef);
describe('navigate', () => {
  afterEach(() => {
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
    expect(navigatorRef.dispatch).toHaveBeenCalledWith({
      type: 'NAVIGATE_ACTION',
      payload: { routeName, params }
    });
  });
});
