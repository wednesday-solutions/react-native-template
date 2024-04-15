import { takeLatest } from 'redux-saga/effects';
import { navigateAndReset } from '@app/services/navigationService';
import { rootScreenTypes } from './reducer';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  setTimeout(() => navigateAndReset('MainScreen'), 1000);
}

export default function* startUpSaga() {
  yield takeLatest(rootScreenTypes.STARTUP, startup);
}
