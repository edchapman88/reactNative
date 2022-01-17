import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { useState } from 'react';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [ validInt, setValidInt ] = useState();

    const numberInputHandler = inputText=> {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const onResetHandler = () => setEnteredValue('');

    const onConfirmHandler = () => {
        const confirmedInt = parseInt(enteredValue);
        
        if (isNaN(confirmedInt) || confirmedInt <= 0 || confirmedInt > 99) {
            Alert.alert('Invalid number!','Integer between 1-99 required.', [{text: 'Ok', style: 'destructive', onPress: onResetHandler}])
            return;
        } else {
            setValidInt(confirmedInt);
            setEnteredValue(''); //reset entered value (wont happen until rerender)
            Keyboard.dismiss();
            props.onValidInt(confirmedInt);
        }
    };


        

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
            <View style={styles.screen}>
                <Text style={styles.title}>Test</Text>
                <Card style={styles.inputContanier}>

                    <Input style={styles.input}
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText={numberInputHandler}
                        value={enteredValue}/>

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={Colors.secondary} title='Reset' onPress={onResetHandler}/></View>
                        <View style={styles.button}><Button color={Colors.primary} title='Confirm' onPress={onConfirmHandler}/></View>
                    </View>

                </Card>

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    inputContanier:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input:{
        width: 50,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    button:{
        width: '40%'
    }
})

export default StartGameScreen;