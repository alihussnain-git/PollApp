import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './redux';
import { EntryPointState } from './redux/entryPoint/types';
import questionReducer from './redux/questions/reducer';
import entryPointReducer from './redux/entryPoint/reducer';
import { QuestionState } from './redux/questions/types';

export const sagaMiddleware = createSagaMiddleware();
export interface AllState {
  questionState: QuestionState;
  entryPointState: EntryPointState;
}

const store = createStore(
  combineReducers<AllState>({
    questionState: questionReducer,
    entryPointState: entryPointReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas).toPromise();

export default store;
