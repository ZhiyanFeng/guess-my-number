import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';


type GuessNumberProps = {
    currentGuess: number;
}
const GuessNumberComponent =(props: GuessNumberProps) =>
{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.currentGuess}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'yellow',
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        flex: 1,
        color: 'yellow',
        fontSize: 60
    }
});

export default GuessNumberComponent;
