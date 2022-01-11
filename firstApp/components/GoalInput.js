import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
        
    };

    function addGoalHandler() {
      props.onPressEvent(enteredGoal);
      setEnteredGoal('');
    }

    function cancelModalHandler() {
      props.onCancel();
      setEnteredGoal('');
    }

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Course goal"
              value={enteredGoal}
              onChangeText={goalInputHandler}
              style={styles.textInput}/>
            <View style={styles.buttonsContainer}>
              <View style={styles.button}><Button title="ADD" onPress={addGoalHandler}/></View>
              <View style={styles.button}><Button title='CANCEL' onPress={cancelModalHandler} color='red' /></View>
            </View>
        </View>
      </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    textInput:{
      width: '80%',
      borderColor:'black',
      borderWidth:1,
      padding:10,
      margin: 10
    },
    buttonsContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      width: '60%'
    },
    button:{
      width: '40%'
    }
});

export default GoalInput;

