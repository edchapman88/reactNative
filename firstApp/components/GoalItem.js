import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPress}>
            <View style={styles.listItem}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
)};

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginTop:10,
        backgroundColor: '#ccc',
        borderWidth:1,
        borderColor: 'grey'
    }
})

export default GoalItem;
