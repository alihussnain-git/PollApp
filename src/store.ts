import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './redux';
import { EntryPointState } from './redux/entryPoint/types';
import entryPointReducer from './redux/entryPoint/reducer';

export const sagaMiddleware = createSagaMiddleware();
export interface AllState {
  entryPointState: EntryPointState;
}

const store = createStore(
  combineReducers<AllState>({
    entryPointState: entryPointReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas).toPromise();

export default store;
