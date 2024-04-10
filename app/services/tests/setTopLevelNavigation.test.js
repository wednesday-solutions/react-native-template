import set from 'lodash/set';
import { setTopLevelNavigator } from '../NavigationService';
jest.mock('lodash/set', () => jest.fn());
describe('setTopLevelNavigator', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sets the navigator object with the provided reference', () => {
    const navigatorObject = {
      navigator: null
    };
    const navigatorRef = { goBack: 'goBack' };
    setTopLevelNavigator(navigatorRef);
    expect(set).toHaveBeenCalledWith(
      navigatorObject,
      'navigator',
      navigatorRef
    );
  });
});
