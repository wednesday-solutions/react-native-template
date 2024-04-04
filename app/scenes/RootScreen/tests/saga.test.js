/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects';
import NavigationService from 'app/services/NavigationService';
import { timeout } from 'app/utils/testUtils';
import rootScreenSaga, { startup } from '../saga';
import { rootScreenTypes } from '../reducer';
const _ = require('lodash');
describe('Tests for RootScreen sagas', () => {
  const setupTests = () => ({
    generator: rootScreenSaga(),
    submitSpy: jest.fn()
  });

  it('should start task to watch for STARTUP action', () => {
    const { generator } = setupTests();
    expect(generator.next().value).toEqual(
      takeLatest(rootScreenTypes.STARTUP, startup)
    );
  });

  it('should ensure that the navigation service is called after waiting for 1000ms', async () => {
    const method = startup();
    NavigationService.setTopLevelNavigator({ dispatch: () => {} });
    const navigateAndResetSpy = jest.spyOn(
      NavigationService,
      'navigateAndReset'
    );
    method.next();
    await timeout(1000);
    expect(navigateAndResetSpy).toHaveBeenCalled();
    expect(navigateAndResetSpy).toHaveBeenCalledWith('MainScreen');
  });

  it('should ensure that the navigation service is called after waiting for 1000ms', async () => {
    const { submitSpy } = setupTests();
    const method = startup();
    _.set(NavigationService, 'navigateAndReset', submitSpy);
    method.next();
    await timeout(650);
    expect(submitSpy).not.toHaveBeenCalled();
    await timeout(200);
    expect(submitSpy).not.toHaveBeenCalled();
  });
});
