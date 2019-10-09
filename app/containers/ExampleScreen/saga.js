import { put, call, takeLatest } from 'redux-saga/effects'
import { get } from 'lodash'
import { getUser } from 'app/services/UserService'
import { ExampleActions, ExampleTypes } from './reducer'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  yield put(ExampleActions.fetchUserLoading())

  // Fetch user informations from an API
  const response = yield call(getUser)
  if (response.ok) {
    const { data } = response
    yield put(ExampleActions.fetchUserSuccess(get(data, '0')))
  } else {
    yield put(
      ExampleActions.fetchUserFailure(
        'There was an error while fetching user informations.'
      )
    )
  }
}

export default function* searchListContainerSaga() {
  yield takeLatest(ExampleTypes.FETCH_USER, fetchUser)
}
