import {
  setTopLevelNavigator,
  navigatorObject,
  navigate
} from './NavigationService';
import { set } from 'lodash';
import { NavigationActions } from '@react-navigation/compat';

jest.mock('lodash', () => ({
  set: jest.fn()
}));

describe('setTopLevelNavigator', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sets the navigator object with the provided reference', () => {
    const navigatorRef = { goBack: 'goBack' };
    setTopLevelNavigator(navigatorRef);
    expect(set).toHaveBeenCalledWith(
      navigatorObject,
      'navigator',
      navigatorRef
    );
  });
});

const mockDispatch = jest.fn();

// Mock the NavigationActions.navigate function
jest.mock('@react-navigation/compat', () => ({
  NavigationActions: {
    navigate: jest.fn()
  }
}));

describe('navigate', () => {
  beforeEach(() => {
    // eslint-disable-next-line fp/no-mutation
    navigatorObject.navigator = { dispatch: mockDispatch };
  });

  afterEach(() => {
    // Reset mocks after each test
    jest.clearAllMocks();
  });

  it('dispatches navigation action with the correct routeName and params', () => {
    const routeName = '/home';
    const params = { screen: 'exampleScreen' };
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
