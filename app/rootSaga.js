import { fork } from 'redux-saga/effects';
import exampleSaga from 'app/containers/ExampleScreen/saga';
import startupSaga from 'app/containers/RootScreen/saga';

export default function* root() {
  yield fork(exampleSaga);
  yield fork(startupSaga);
}
