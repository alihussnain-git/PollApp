import reducer, {
  addQuestions,
  fetchQuestions,
  initialState,
  setQuestionError,
  setQuestionLoading,
} from './reducer';
import { question } from '../../mock/mockData';

describe('questions reducer', function () {
  it('should return the loading state', function () {
    expect(reducer(initialState, setQuestionLoading(true))).toEqual({
      ...initialState,
      loading: true,
      error: undefined,
    });
  });
  it('should return the error state', function () {
    expect(reducer(initialState, setQuestionError(Error('error')))).toEqual({
      ...initialState,
      loading: false,
      error: Error('error'),
    });
  });
  it('should return loading true on fetchQuestions', function () {
    expect(reducer(initialState, fetchQuestions())).toEqual({
      ...initialState,
      loading: true,
      error: undefined,
    });
  });
  it('should return the addQuestion state', function () {
    expect(reducer(initialState, addQuestions([question]))).toEqual({
      ...initialState,
      loading: false,
      questions: [question],
    });
  });
});
