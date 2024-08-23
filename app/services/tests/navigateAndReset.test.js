import { StackActions } from '@react-navigation/compat';
import {
  setTopLevelNavigator,
  navigateAndReset
} from '@services/navigationService';

jest.mock('@react-navigation/compat', () => ({
  StackActions: {
    replace: jest.fn()
  }
}));
const navigatorRef = { goBack: 'goBack', dispatch: jest.fn() };
setTopLevelNavigator(navigatorRef);
describe('test navigateAndReset', () => {
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
    expect(navigatorRef.dispatch).toHaveBeenCalledWith({
      type: 'NAVIGATE_ACTION',
      payload: { routeName, params }
    });
  });
});
