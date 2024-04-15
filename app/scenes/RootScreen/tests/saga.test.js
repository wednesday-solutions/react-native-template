/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects';
import { navigateAndReset } from '@app/services/navigationService';
import { timeout } from 'app/utils/testUtils';
import rootScreenSaga, { startup } from '../saga';
import { rootScreenTypes } from '../reducer';

jest.mock('@app/services/navigationService', () => ({
  ...jest.requireActual('@app/services/navigationService'),
  navigateAndReset: jest.fn()
}));
describe('Tests for RootScreen sagas', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start task to watch for STARTUP action', () => {
    const generator = rootScreenSaga();
    expect(generator.next().value).toEqual(
      takeLatest(rootScreenTypes.STARTUP, startup)
    );
  });

  it('should ensure that the navigation service is called after waiting for 1000ms', async () => {
    const method = startup();
    method.next();
    await timeout(1000);
    expect(navigateAndReset).toHaveBeenCalled();
    expect(navigateAndReset).toHaveBeenCalledWith('MainScreen');
  });

  it('should ensure that the navigation service is called after waiting for 1000ms', async () => {
    const method = startup();
    method.next();
    await timeout(650);
    expect(navigateAndReset).not.toHaveBeenCalled();
    await timeout(200);
    expect(navigateAndReset).not.toHaveBeenCalled();
  });
});
