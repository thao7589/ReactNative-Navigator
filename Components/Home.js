import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <Text style={styles.text}>This is Home Screen</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default Home;