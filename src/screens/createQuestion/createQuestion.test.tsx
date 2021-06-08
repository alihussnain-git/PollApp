import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import CreateQuestion from './createQuestion';
jest.mock('@react-navigation/core');
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));
const setup = () => {
  return render(<CreateQuestion />);
};
describe('CreateQuestion', function () {
  it('should disable post button by default', function () {
    const { getByText } = setup();
    expect(getByText('Post')).toBeDisabled();
  });
  it('should enable post button when fields are filled', function () {
    const { getByText, getByPlaceholderText } = setup();
    const question = getByPlaceholderText('Enter question');
    const choice = getByPlaceholderText('Enter commas separated choices e.g. Lemon, Ginger');
    const postButton = getByText('Post');
    fireEvent.changeText(question, 'My Question');
    fireEvent.changeText(choice, 'Choice1, Choice2');
    expect(postButton).toBeEnabled();
  });
});
