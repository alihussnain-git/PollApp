import { all } from 'redux-saga/effects';
import { entryPointActionWatcher } from './entryPoint/sagas';
import { questionActionWatcher } from './questions/sagas';

export default function* rootSagas() {
  yield all([entryPointActionWatcher(), questionActionWatcher()]);
}
