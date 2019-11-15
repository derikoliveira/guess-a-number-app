import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import BodyText from '../components/BodyText';
import colors from '../constants/colors';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  const {roundsNumber, userNumber, onRestartGame} = props;
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')}
               style={styles.image} resizeMode='cover'/>
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <Button title='New Game' onPress={onRestartGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden', // it 'cuts' anything that surpasses the size of the container
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    width: '80%',
    marginVertical: 20,
  },
  resultText:{
    textAlign: 'center',
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  }
});

export default GameOverScreen;
