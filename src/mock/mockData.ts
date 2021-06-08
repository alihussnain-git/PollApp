import { Question } from '../redux/questions/types';

export const question: Question = {
  question: 'Best Social Media App ?',
  choices: [
    {
      choice: 'facebook',
      votes: 5,
      url: '/questions/19/choices/95',
    },
    {
      choice: 'Instagram',
      votes: 1,
      url: '/questions/19/choices/96',
    },
  ],
  published_at: new Date(),
  url: '/questions/19',
};
