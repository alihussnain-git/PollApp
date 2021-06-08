import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchEntryPoint } from '../../redux/entryPoint/reducer';
import appStyles from '../../styles/styles';
import Theme from '../../styles/theme';
import styles from './styles';
import Strings from '../../strings/strings';

const LaunchScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntryPoint());
  }, [dispatch]);

  return (
    <View style={[appStyles.defaultFlex, appStyles.centerAlignContent]}>
      <Text style={styles.title}>{Strings.appName}</Text>
      <Image
        source={require('../../assets/polls_logo.png')}
        resizeMode='contain'
        style={styles.icons}
      />
      <Text style={styles.description}>{Strings.launchNote}</Text>
      <TouchableOpacity
        style={[styles.button, appStyles.centerAlignContent]}
        onPress={() => {}}>
        <Text style={{ color: Theme.colors.white }}>{Strings.continue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LaunchScreen;
