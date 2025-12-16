import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Keyboard} from 'react-native';
import {generateRandomGuessNumber} from "../utils/random";


interface GameComponentProps {
    onConfirm: (inputNumber: string) => void;
    onReset:()=> void;
    onGuess:(guessNumber: number) => void;
}
function GameComponent({ onConfirm, onReset, onGuess}: GameComponentProps)
{
    const [inputNumber, setInputNumber] = useState('');
    const [currentGuess, setCurrentGuess] = useState(0);
    const handleReset = () =>{
        setInputNumber('');
        onReset();
    }
    const handleConfirm = () =>{
        Keyboard.dismiss();
        onConfirm(inputNumber);
        setInputNumber('');
        handleGuess();
    }

    const handleGuess = () =>{
        const newGuessNumber = generateRandomGuessNumber(1, 99);
        setCurrentGuess(newGuessNumber);
        onGuess(newGuessNumber);
    }
    const handleLowerGuess = () =>{
        const newGuessNumber = (generateRandomGuessNumber(currentGuess, 99));
        onGuess(newGuessNumber);
    }
    const handleHigherGuess = () =>{
        const newGuessNumber = (generateRandomGuessNumber(1, currentGuess));
        console.log(newGuessNumber);
        setCurrentGuess(newGuessNumber);
        onGuess(newGuessNumber);
    }
    if(currentGuess === 0){
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.text}>Enter a Number</Text>
            </View>
            <TextInput style={styles.input} cursorColor='yellow'
                       placeholderTextColor="yellow"
                       onChangeText={setInputNumber}
                       value = {inputNumber}
                       />
            <View style={styles.buttonLine}>
                <View style={styles.buttonContainer}>
                    <Button color="#C71585" title="Reset" onPress={handleReset} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button color="#C71585" title="Confirm" onPress={handleConfirm} />
                </View>
            </View>
        </View>

    );}
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.text}>Higher or lower?</Text>
            </View>
            <View style={styles.buttonLine}>
                <View style={styles.buttonContainer}>
                    <Button color="#C71585" title="-" onPress={handleLowerGuess} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button color="#C71585" title="+" onPress={handleHigherGuess} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800000',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        width: 70,
        padding: 10,
        borderBottomColor: 'yellow', // Custom underline color
        borderBottomWidth: 2,
        fontSize: 50,
        color: 'yellow'

    },
    text:{
        fontSize: 18,
        color: 'white',
    },
    buttonLine: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        width: 100,
    }
});

export default GameComponent;
