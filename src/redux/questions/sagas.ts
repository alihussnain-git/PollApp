import { call, put, select, takeEvery } from 'redux-saga/effects';
import { Question, FETCH_QUESTIONS } from './types';
import { addQuestions, setQuestionError, setQuestionLoading } from './reducer';
import { QuestionAPI } from '../../api';
import { AllState } from '../../store';
import { EntryPointState } from '../entryPoint/types';

const getEntryPointState = ({ entryPointState }: AllState) => entryPointState;

function* getQuestions() {
  try {
    setQuestionLoading(true);
    const entryPointState: EntryPointState = yield select(getEntryPointState);
    const { questions_url } = entryPointState.entryPointUrl;
    const questions: Question[] = yield call(QuestionAPI.fetchQuestions, questions_url);
    yield put(addQuestions(questions));
  } catch (error) {
    yield call(setQuestionError, error.message);
  }
}

export function* questionActionWatcher() {
  yield takeEvery(FETCH_QUESTIONS, getQuestions);
}
