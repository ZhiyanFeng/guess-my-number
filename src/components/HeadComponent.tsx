import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';


type HeadComponentProps = {
    step: number;
};

const HeadComponent = (props: HeadComponentProps )=>
{
    const stepInfo = ['Guess my number'
        ,"Opponent's guess", "Game Over"];
    const info = stepInfo[props.step];

        if(props.step === 0){
            return  (<View style={styles.container1}>
                <Text style={styles.text}>{info}</Text>
            </View>);
        }
        if(props.step === 1){
            return ( <View style={styles.container2}>
                <Text style={styles.text}>{info}</Text>
            </View>);
        }
        if(props.step === 2){
            return ( <View style={styles.container3}>
                <Text style={styles.text}>{info}</Text>
            </View>);
        }

};

const baseContainer = {borderColor: 'white',
    borderWidth: 5, }

const styles = StyleSheet.create({
    container1: {
        ...baseContainer,
        width: '80%',
    },
    container2: {
        ...baseContainer,
        width: '100%',
    },
    container3: {
        ...baseContainer,
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default HeadComponent;
