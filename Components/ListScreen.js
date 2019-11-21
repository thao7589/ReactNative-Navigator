import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListContext from './../Context/Context';
import ContextProvider from './../Provider/ContextProvider';

const ListScreen = () => {
    return (
        <ContextProvider>
            <ListContext.Consumer>
                {(listContext) => 
                    <FlatList  
                        data={listContext}
                        keyExtractor={member => member.key}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.view}>
                                    <Text style={styles.text}>Name: {item.name} - Age: {item.age}</Text>
                                </View>
                            )
                        }}
                    />
                }   
            </ListContext.Consumer>
        </ContextProvider>
    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 1
    },
    text: {
        marginVertical: 10,
        marginHorizontal: 20
    }
});

export default ListScreen;