import { call, put, select, takeEvery } from 'redux-saga/effects';
import { Question, FETCH_QUESTIONS, Choice } from './types';
import { addQuestions, setQuestionError, setQuestionLoading } from './reducer';
import { QuestionAPI } from '../../api';
import { AllState } from '../../store';
import { EntryPointState } from '../entryPoint/types';
import { SagaIterator } from '@redux-saga/types';

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

export function* getQuestionDetail(questionId: string): SagaIterator<Question> {
  const question: Question = yield call(QuestionAPI.fetchQuestionDetail, questionId);
  return question;
}

export function* voteOnChoice(choiceId: string): SagaIterator<Choice> {
  const choice: Choice = yield call(QuestionAPI.postChoice, choiceId);
  return choice;
}

export function* createQuestion(question: string, choices: string[]): SagaIterator<Question> {
  const entryPointState: EntryPointState = yield select(getEntryPointState);
  const { questions_url } = entryPointState.entryPointUrl;
  const questionObj: Question = yield call(
    QuestionAPI.postQuestion,
    questions_url,
    question,
    choices,
  );
  return questionObj;
}

export function* questionActionWatcher() {
  yield takeEvery(FETCH_QUESTIONS, getQuestions);
}
