import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import BodyText from '../components/BodyText';
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
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
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
  }
});

export default GameOverScreen;
