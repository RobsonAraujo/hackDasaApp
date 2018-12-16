import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    Hey welcome to my boilerplate :} let`s develop?
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 15
    }
})

export default HomeScreen