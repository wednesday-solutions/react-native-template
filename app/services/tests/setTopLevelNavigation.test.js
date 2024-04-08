import { setTopLevelNavigator, navigatorObject } from '../NavigationService';
import { set } from 'lodash';

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
