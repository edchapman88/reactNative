import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import Card from '../components/Card';

const genRndBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if (rndNum === exclude) {
        return genRndBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        genRndBetween(1, 100, props.userChoice)
        );
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Card><Text>{currentGuess}</Text></Card>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' />
                <Button title="HIGHER" />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1, //fill the screen with our screen view
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;