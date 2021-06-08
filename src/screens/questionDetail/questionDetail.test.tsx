import { fireEvent, render, waitFor } from '@testing-library/react-native';
import QuestionDetail from './questionDetail';
import { QuestionDetailProps } from './types';
import React from 'react';
import { QuestionAPI } from '../../api';
import { question } from '../../mock/mockData';
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));
const props: QuestionDetailProps = {
  // @ts-ignore
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  route: {
    name: 'QuestionDetail',
    params: { questionId: 'id' },
    key: '423fwa',
  },
};
describe('QuestionDetail', function () {
  it('should render', async function () {
    QuestionAPI.fetchQuestionDetail = jest.fn().mockImplementation(() => question);
    const { getByText, getByTestId } = render(<QuestionDetail {...props} />);
    expect(getByTestId('loading')).toBeTruthy();
    await waitFor(() => getByText('Best Social Media App ?'));
    fireEvent.press(getByText('Done'));
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
