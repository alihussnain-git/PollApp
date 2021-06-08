import { API } from '.';
import { Choice, Question } from '../redux/questions/types';

export function fetchQuestions(entryUrl: string) {
  return API.get<Question[]>(entryUrl).then((questions) => questions.data);
}

export function fetchQuestionDetail(questionId: string) {
  return API.get<Question>(questionId).then((questions) => questions.data);
}

export function postChoice(choice: string) {
  return API.post<Choice>(choice, {
    payload: {},
  }).then((choices) => choices.data);
}
