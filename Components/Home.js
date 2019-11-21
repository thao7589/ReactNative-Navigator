import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.text}>This is Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                <Text>Go to other page</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default Home;