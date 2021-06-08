import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import appStyles from '../../styles/styles';
import Theme from '../../styles/theme';
import styles from './styles';
import { getQuestionDetail, voteOnChoice } from '../../redux/questions/sagas';
import { execute } from '../../utils/saga';
import { QuestionDetailProps } from './types';
import { Choice, Question } from '../../redux/questions/types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../../redux/questions/reducer';
import Strings from '../../strings/strings';

const QuestionDetail: React.FC<QuestionDetailProps> = ({ navigation, route }) => {
  const [question, setQuestion] = useState<Question>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isChoiceLoading, setIsChoiceLoading] = useState<boolean>();
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestionDetail = async () => {
      const { questionId } = route.params;
      const questionObj = await execute<Question>(getQuestionDetail, questionId);
      setQuestion(questionObj);
      setIsLoading(false);
    };
    if (route) {
      fetchQuestionDetail();
    }
  }, [route]);

  const voteForChoice = async (choice: Choice) => {
    if (question) {
    const choiceIndex = question.choices.findIndex((c) => {
      return c.url === choice.url;
    });
    setSelectedChoiceIndex(choiceIndex);
    setIsChoiceLoading(true);
    const choiceObj = await execute<Choice>(voteOnChoice, choice.url);
    const questionObj = { ...question };
    questionObj.choices[choiceIndex] = choiceObj;
    setQuestion(questionObj);
    dispatch(fetchQuestions());
    setIsChoiceLoading(false);
    }
  };

  const renderChoices = () => {
    return question?.choices.map((choice, index) => {
      return (
        <View style={styles.choiceContainer} key={index}>
          <TouchableOpacity
            disabled={isChoiceLoading}
            style={[appStyles.rowDirection, styles.questionSelector]}
            onPress={() => voteForChoice(choice)}>
            <Text style={{ color: Theme.colors.black }}>{choice.choice.trim()}</Text>
            {isChoiceLoading && index === selectedChoiceIndex ? (
              <ActivityIndicator
                size='small'
                color={Theme.colors.grey}
                style={styles.progressIndicator}
              />
            ) : (
              <Text style={styles.votesLabel}>{`${choice.votes} votes`}</Text>
            )}
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <View style={[appStyles.defaultFlex, styles.mainContainer]}>
      {isLoading ? (
        <ActivityIndicator
          testID={'loading'}
          style={styles.progressIndicator}
          size='large'
          color={Theme.colors.grey}
        />
      ) : (
        <View>
          <Text style={styles.questionLabel}>{question?.question.trim()}</Text>
          <Text style={styles.timeLabel}>{moment(question?.published_at).fromNow()}</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.choiceScroll}>
            <View>{renderChoices()}</View>
            <TouchableOpacity
              style={[styles.button, appStyles.centerAlignContent]}
              onPress={() => navigation.goBack()}>
              <Text style={{ color: Theme.colors.white }}>{Strings.done}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default QuestionDetail;
