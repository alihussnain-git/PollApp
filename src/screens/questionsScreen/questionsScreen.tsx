import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../redux/questions/reducer';
import { QuestionState } from '../../redux/questions/types';
import { AllState } from '../../store';
import Strings from '../../strings/strings';
import appStyles from '../../styles/styles';
import Theme from '../../styles/theme';
import QuestionItem from './components/questionItem';
import styles from './styles';

const QuestionsScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { questions, loading } = useSelector<AllState, QuestionState>(
    ({ questionState }) => questionState,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);


  useEffect(() => {
    if (!loading) {
      setIsRefreshing(false);
    }
  }, [loading]);

  const onRefresh = () => {
    setIsRefreshing(true);
    dispatch(fetchQuestions());
  };

  const isLoading = loading && !isRefreshing;
  
  return (
    <View style={[appStyles.defaultFlex, { backgroundColor: Theme.colors.lightGrey }]}>
      {isLoading? (
        <ActivityIndicator
          testID={'loadingIndicator'}
          style={styles.progressIndicator}
          size='large'
          color={Theme.colors.grey}
        />
      ) : (
        <FlatList
          testID={'flatList'}
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          data={questions}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <QuestionItem
              questionObj={item}
              onPress={() => navigation.navigate('QuestionDetail', { questionId: item.url })}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => onRefresh()}
              title={Strings.pullToRefresh}
              tintColor={Theme.colors.grey}
            />
          }
        />
      )}
    </View>
  );
};

export default QuestionsScreen;
