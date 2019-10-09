import { put, all, takeLatest } from 'redux-saga/effects'
import { ExampleActions } from 'app/containers/ExampleScreen/reducer'
import NavigationService from 'app/services/NavigationService'
import { AppTypes } from './reducer'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  yield put(ExampleActions.fetchUser())
  NavigationService.navigateAndReset('MainScreen')
}

export default function* startUpSaga() {
  yield all([takeLatest(AppTypes.STARTUP, startup)])
}
