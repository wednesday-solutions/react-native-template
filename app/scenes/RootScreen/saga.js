import { takeLatest } from 'redux-saga/effects';
import { navigateAndReset } from '@app/services/NavigationService';
import { rootScreenTypes } from './reducer';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  setTimeout(() => navigateAndReset('MainScreen'), 1000);
}

/**
 * Saga responsible for handling application startup actions.
 * Watches for the STARTUP action and triggers the startup process.
 * @returns {IterableIterator<any>} An iterator for managing application startup logic.
 */
export default function* startUpSaga() {
  yield takeLatest(rootScreenTypes.STARTUP, startup);
}
