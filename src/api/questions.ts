import { API } from '.';
import { Choice, Question } from '../redux/questions/types';

export function fetchQuestions(entryUrl: string) {
  return API.get<Question[]>(entryUrl).then((questions) => questions.data);
}
