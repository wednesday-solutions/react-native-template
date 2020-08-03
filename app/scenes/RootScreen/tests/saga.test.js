/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects';
import NavigationService from 'app/services/NavigationService';
import { timeout } from 'app/utils/testUtils';
import rootScreenSaga, { startup } from '../saga';
import { rootScreenTypes } from '../reducer';

describe('Tests for RootScreen sagas', () => {
  let generator;
  let submitSpy;

  beforeEach(() => {
    generator = rootScreenSaga();
    submitSpy = jest.fn();
  });

  it('should start task to watch for STARTUP action', () => {
    expect(generator.next().value).toEqual(
      takeLatest(rootScreenTypes.STARTUP, startup)
    );
  });

  it('should ensure that the navigation service is called after waiting for 1000ms', async () => {
    const method = startup();
    NavigationService.navigateAndReset = submitSpy;
    method.next();
    await timeout(1000);
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should ensure that the navigation service is called after waiting for 1000ms', async () => {
    const method = startup();
    NavigationService.navigateAndReset = submitSpy;
    method.next();
    await timeout(650);
    expect(submitSpy).not.toHaveBeenCalled();
    await timeout(200);
    expect(submitSpy).not.toHaveBeenCalled();
  });
});
