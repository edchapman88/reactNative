
import { Button, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [ isModalShow, setIsModalShow ] = useState(false);

  function onPressAddGoal(goalContent) {
    setGoalsList( currentGoalsList => [...currentGoalsList, {id: Math.random().toString(), value: goalContent}]);
    setIsModalShow(false);
  };

  function onDelete(selectedGoalId) {
    setGoalsList( currentGoalsList => currentGoalsList.filter( goal => (goal.id != selectedGoalId)));
  };

  function onCancelModal() {
    setIsModalShow(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='ADD GOAL' onPress={() => setIsModalShow(true)} />
      <GoalInput visible={isModalShow} onPressEvent={onPressAddGoal} onCancel={onCancelModal}/>
      <FlatList
        data={goalsList}
        key={goalsList.id}
        renderItem={ itemData => <GoalItem onItemPress={onDelete.bind(this,itemData.item.id)} text={itemData.item.value}/> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 80
  }
})

