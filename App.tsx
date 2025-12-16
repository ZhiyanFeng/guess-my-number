/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NewAppScreen} from '@react-native/new-app-screen';
import {ImageBackground, StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HeadComponent from "./src/components/HeadComponent.tsx";
import {useState} from "react";
import GameComponent from "./src/components/GameComponent.tsx";
import FootComponent from "./src/components/FootComponent.tsx";
import GuessNumberComponent from "./src/components/GuessNumberComponent.tsx";
import ListGuessComponent from "./src/components/ListGuessComponent.tsx";


function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <AppContent/>
        </SafeAreaProvider>
    );
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();
    const backGroundImg = require("./assets/images/dice.jpg");
    interface guessNumber {
        id: number;
        value: number;
    }

    const [stepNumber, setStepNumber] = useState(0);
    const [inputNumber, setInputNumber] = useState('');
    const [guessNumbers, setGuessNumbers] = useState<guessNumber[]>([]);
    const [guessing, setGuessing] = useState(false);
    const [currentGuess, setCurrentGuess] = useState(0);

    function updateInputNumber(input: string) {
        setInputNumber(inputNumber);
        setGuessing(true);
    }

    function updateGuessNumber(newGuess: number): void {
        setCurrentGuess(newGuess);
        const newGuessId = guessNumbers.length + 1;
        const newGuessNumber = {id: newGuessId, value: newGuess};
        setGuessNumbers([newGuessNumber, ...guessNumbers]);
    }

    function resetGame(): void {
        setStepNumber(0);
        setInputNumber('0');
        setGuessNumbers([]);
    }

    return (
        <ImageBackground
            source={backGroundImg}
            style={styles.image}
            resizeMode="cover" // Other options: 'contain', 'stretch', 'repeat', 'center'
        >

            <View style={styles.container}>
                <View style={styles.header}>
                    <HeadComponent step={stepNumber} />
                </View>
                {
                    currentGuess ? <View style={styles.guessNumberInfo}>
                        <GuessNumberComponent currentGuess={currentGuess}/>
                    </View> : null
                }
                <View style={styles.body}>
                    <GameComponent onConfirm={updateInputNumber} onReset={resetGame}
                                   onGuess={updateGuessNumber}/>
                </View>
                {
                    guessNumbers.length > 0 ? <View style={styles.guessList}>
                        <ListGuessComponent guessNumbers={guessNumbers}/></View> : null
                }
                <View style={styles.foot}>
                    <FootComponent/>
                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100, flex: 1, alignItems: "center", gap: 10
    }, guessNumberInfo: {
        flexBasis: 100, width: "90%", backgroundColor: "blue",
    }, image: {
        flex: 1,
    }, header: {
        alignItems: "center", justifyContent: "center", width: '60%', flexBasis: 70, backgroundColor: 'green',
    }, body: {
        width: '80%',
        marginBottom: 100,
        borderRadius: 10,
        flexBasis: 200,
        justifyContent: 'space-around',
        backgroundColor: 'brown',
    },
    guessList: {
        flex: 1,
        width: '100%',
    },
    foot: {
        backgroundColor: 'red',
    }
});

export default App;
