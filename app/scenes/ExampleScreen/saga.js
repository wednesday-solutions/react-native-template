import { put, call, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import { getUser } from '@app/services/userService';
import { exampleScreenActions, exampleScreenTypes } from './reducer';

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  const response = yield call(getUser);
  if (response.ok) {
    const { data } = response;
    yield put(exampleScreenActions.successFetchUser(get(data, '0')));
  } else {
    yield put(
      exampleScreenActions.failureFetchUser(
        'There was an error while fetching user informations.'
      )
    );
  }
}
/**
 * Saga responsible for managing user search requests and fetching user data.
 * Watches for specific action types and triggers corresponding worker sagas.
 * @returns {IterableIterator<any>} An iterator for handling user search and data fetching.
 */
export default function* searchListContainerSaga() {
  yield takeLatest(exampleScreenTypes.REQUEST_FETCH_USER, fetchUser);
}
