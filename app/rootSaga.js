import { fork } from 'redux-saga/effects';
import exampleSaga from '@scenes/ExampleScreen/saga';
import startupSaga from '@scenes/RootScreen/saga';

export default function* root() {
  yield fork(exampleSaga);
  yield fork(startupSaga);
}
