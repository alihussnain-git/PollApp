import { Question } from '../../../redux/questions/types';

export interface QuestionItemProps {
  questionObj: Question;
  onPress: () => void;
}
