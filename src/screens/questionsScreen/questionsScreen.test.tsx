import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import QuestionsScreen from './questionsScreen';
import * as redux from 'react-redux';
import { question } from '../../mock/mockData';
import { AllState } from '../../store';
import { QuestionState } from '../../redux/questions/types';
import { useNavigation } from '@react-navigation/core';

const setup = () => {
  return render(<QuestionsScreen />);
};
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));
const getMockState = (questionState: QuestionState): AllState => ({
  questionState,
  entryPointState: {
    error: undefined,
    entryPointUrl: {
      questions_url: 'url',
    },
  },
});
describe('QuestionsScreen', function () {
  beforeEach(() => {
    // @ts-ignore
    useNavigation.mockReset();
  });
  it('should show loading', async function () {
    const state = {
      questions: undefined,
      loading: true,
      error: undefined,
    };
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation((callback) => callback(getMockState(state)));
    const { getByTestId } = setup();
    expect(getByTestId('loadingIndicator')).not.toBeUndefined();
  });
  it('should show flatList and navigate on press', function () {
    const mockNavigate = jest.fn();
    // @ts-ignore
    useNavigation.mockImplementation(() => ({ navigate: mockNavigate }));
    const state = {
      questions: [question],
      loading: false,
      error: undefined,
    };
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation((callback) => callback(getMockState(state)));
    const { getByTestId, getByText } = setup();
    expect(getByTestId('flatList')).not.toBeUndefined();
    const itemQuestion = getByText('Best Social Media App ?');
    expect(itemQuestion).not.toBeUndefined();
    fireEvent.press(itemQuestion);
    expect(mockNavigate).toHaveBeenCalledWith('QuestionDetail', { questionId: question.url });
  });
});
