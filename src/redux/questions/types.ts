import { Action } from 'redux';
export const QUESTION_LOADING = 'catalogue/loading';
export const QUESTION_SET_ERROR = 'catalogue/seterror';
export const FETCH_QUESTIONS = 'catalogue/fetch_questions';
export const ADD_QUESTIONS = 'catalogue/received_questions';

export interface Choice {
  choice: string;
  votes: number;
  url: string;
}

export interface Question {
  question: string;
  choices: Choice[];
  published_at: Date;
  url: string;
}

export type QuestionState = {
  questions: Question[] | undefined;
  loading: boolean;
  error: any;
};
