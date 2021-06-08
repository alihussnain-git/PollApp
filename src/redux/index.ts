import { all } from 'redux-saga/effects';
import { entryPointActionWatcher } from './entryPoint/sagas';

export default function* rootSagas() {
  yield all([entryPointActionWatcher()]);
}
