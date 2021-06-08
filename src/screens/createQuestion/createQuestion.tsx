import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import appStyles from '../../styles/styles';
import Theme from '../../styles/theme';
import styles from './styles';
import { execute } from '../../utils/saga';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { fetchQuestions } from '../../redux/questions/reducer';
import { Question } from '../../redux/questions/types';
import { createQuestion } from '../../redux/questions/sagas';
import Strings from '../../strings/strings';

const CreateQuestion = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [questionText, setQuestionText] = useState<string>('');
  const [choices, setChoices] = useState<string>('');
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const addQuestion = async () => {
    setIsLoading(true);
    const choicesArray = choices.trim().split(',');
    await execute<Question>(createQuestion, questionText, choicesArray);
    dispatch(fetchQuestions());
    setIsLoading(false);
    navigation.goBack();
  };

  const activePostButton =
    questionText.trim().length &&
    choices.trim().split(',').length > 1 &&
    !choices.trim().endsWith(',');

  return (
    <View style={[appStyles.defaultFlex, styles.mainContainer]}>
      <TextInput
        placeholder='Enter question'
        style={styles.questionInput}
        onChangeText={setQuestionText}
        value={questionText}
      />
      <TextInput
        placeholder='Enter commas separated choices e.g. Lemon, Ginger'
        style={styles.choiceInput}
        onChangeText={setChoices}
        value={choices}
      />
      <Text style={{ color: Theme.colors.grey }}>{Strings.note}</Text>
      <TouchableOpacity
        disabled={!activePostButton}
        style={[
          styles.button,
          appStyles.centerAlignContent,
          {
            backgroundColor: activePostButton ? Theme.colors.black : Theme.colors.grey,
          },
        ]}
        onPress={addQuestion}>
        {isLoading ? (
          <ActivityIndicator size='small' color={Theme.colors.grey} />
        ) : (
          <Text style={{ color: Theme.colors.white }}>{Strings.post}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CreateQuestion;
