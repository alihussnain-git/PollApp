import QuestionItem from './questionItem';
import { fireEvent, render } from '@testing-library/react-native';
import { QuestionItemProps } from './types';
import React from 'react';
import { question } from '../../../mock/mockData';

export const questionItemProps: QuestionItemProps = {
  questionObj: question,
  onPress: jest.fn(),
};

const setup = () => {
  return render(
    <QuestionItem
      questionObj={questionItemProps.questionObj}
      onPress={questionItemProps.onPress}
    />,
  );
};
describe('QuestionItem', function () {
  it('should show total votes', function () {
    const { getByText } = setup();
    expect(getByText('6 votes')).toBeTruthy();
  });
  it('should call onPress when tapped', function () {
    const { getByText } = setup();
    fireEvent.press(getByText(questionItemProps.questionObj.question));
    expect(questionItemProps.onPress).toBeCalled();
  });
});
