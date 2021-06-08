import { call, put, takeEvery } from 'redux-saga/effects';
import { EntryPointAPI } from '../../api';
import { addEntryPoint, setEntryPointError } from './reducer';
import { EntryPoint, FETCH_ENTRY_POINT_URL } from './types';

function* getEntryPoint() {
  try {
    const entryPointUrl: EntryPoint = yield call(EntryPointAPI.fetchEntryPoint);
    yield put(addEntryPoint(entryPointUrl));
  } catch (error) {
    yield call(setEntryPointError, error.message);
  }
}

export function* entryPointActionWatcher() {
  yield takeEvery(FETCH_ENTRY_POINT_URL, getEntryPoint);
}
