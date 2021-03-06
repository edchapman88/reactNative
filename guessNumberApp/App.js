
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onValidInt={startGameHandler}/>;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title='Number Guess' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
