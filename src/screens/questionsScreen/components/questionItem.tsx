import moment from 'moment';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview';
import appStyles from '../../../styles/styles';
import styles from './styles';
import { QuestionItemProps } from './types';

const QuestionItem: React.FC<QuestionItemProps> = ({ questionObj, onPress }) => {
  const { question, choices, published_at } = questionObj;
  const getVotes = () => {
    return choices?.reduce((acc, choice) => {
      const votes = choice.votes;
      return acc + votes;
    }, 0);
  };

  return (
    <CardView cardElevation={5} cornerRadius={5} style={styles.cardStyle}>
      <TouchableOpacity onPress={onPress} style={appStyles.rowDirection}>
        <View style={styles.questionFlex}>
          <Text style={styles.questionLabel}>{question}</Text>
          <View style={[appStyles.rowDirection, styles.questionContainer]}>
            <Text style={styles.votesLabel}>{`${getVotes()} votes`}</Text>
            <Text style={styles.timeLabel}>{moment(published_at).fromNow()}</Text>
          </View>
        </View>
        <View style={[styles.voteFlex, appStyles.centerAlignContent]}>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.voteButton, appStyles.centerAlignContent]}>
            <Text style={styles.voteButtonLabel}>VOTE</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </CardView>
  );
};

export default QuestionItem;
