// a wrapper component that applied 'card' styling
// AKA a presentational component

//take notice of the props.children variable that passes all children of the component

//notice the spread sytax to make an object comprised of all the styles below, and
// custom styles added via props.style
// putting the props.style second allows objects in props.style to overide the styles below

import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card:{

        // for IOS drop shadow
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,

        // for android drop shadow
        elevation: 10,


        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;