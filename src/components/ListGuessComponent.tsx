import React from 'react';
import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


interface GuessNumber {
    id: number;
    value: number;
}

interface ListGuessComponentProps {
    guessNumbers: GuessNumber[];
}


const ListGuessComponent = ({guessNumbers}: ListGuessComponentProps) => {
        const renderItem: ListRenderItem<GuessNumber> = ({item}) =>
        {
            return (<View>
                <Text style={styles.title}>Guess NO. {item.id}: {item.value}</Text>
            </View>);
        }

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={guessNumbers}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 20,
    }
});

export default ListGuessComponent;
