import { navigatorObject } from '../NavigationService';
import set from 'lodash/set';
import NavigationService from '@app/services/NavigationService';
jest.mock('lodash/set', () => jest.fn());
describe('setTopLevelNavigator', () => {
  const { setTopLevelNavigator } = NavigationService;
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
