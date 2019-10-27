import { put, call, takeLatest } from 'redux-saga/effects'
import { get } from 'lodash'
import { getUser } from 'app/services/UserService'
import { exampleScreenActions, exampleScreenTypes } from './reducer'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  yield put(exampleScreenActions.fetchUserLoading())
  // Fetch user informations from an API
  const response = yield call(getUser)
  if (response.ok) {
    const { data } = response
    yield put(exampleScreenActions.fetchUserSuccess(get(data, '0')))
  } else {
    yield put(
      exampleScreenActions.fetchUserFailure(
        'There was an error while fetching user informations.'
      )
    )
  }
}

export default function* searchListContainerSaga() {
  yield takeLatest(exampleScreenTypes.FETCH_USER, fetchUser)
}
