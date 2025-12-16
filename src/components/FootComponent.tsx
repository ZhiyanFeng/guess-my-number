import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const FootComponent = ({ /* props */}) => {
    return (
        <View style={styles.container}>
            <Text>FootComponent Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});

export default FootComponent;
