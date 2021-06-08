import {
  Question,
  QuestionState,
  ADD_QUESTIONS,
  FETCH_QUESTIONS,
  QUESTION_LOADING,
  QUESTION_SET_ERROR,
} from './types';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState: QuestionState = {
  questions: undefined,
  loading: false,
  error: undefined,
};

export const setQuestionLoading = createAction<boolean>(QUESTION_LOADING);
export const setQuestionError = createAction<Error>(QUESTION_SET_ERROR);
export const addQuestions = createAction<Question[]>(ADD_QUESTIONS);

export const fetchQuestions = createAction(FETCH_QUESTIONS);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuestionLoading, (state, action) => {
      state.loading = action.payload;
      state.error = undefined;
    })
    .addCase(setQuestionError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(fetchQuestions, (state) => {
      state.loading = true;
      state.error = undefined;
    })
    .addCase(addQuestions, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
