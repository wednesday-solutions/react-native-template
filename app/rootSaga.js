import { fork } from 'redux-saga/effects';
import exampleSaga from '@scenes/ExampleScreen/saga';
import startupSaga from '@scenes/RootScreen/saga';

/**
 * Root saga generator function that orchestrates other sagas.
 * This function sets up and manages the execution of multiple sagas using fork effects.
 * @returns {IterableIterator<any>} An iterator for managing the execution of sagas.
 */
export default function* root() {
  yield fork(exampleSaga);
  yield fork(startupSaga);
}
