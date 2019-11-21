import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListContext from  './../Context/Context';

const list = [
    { key: '1', name: 'Member 01', age: '50' },
    { key: '2', name: 'Member 02', age: '20' },
    { key: '3', name: 'Member 03', age: '20' },
    { key: '4', name: 'Member 04', age: '30'  },
    { key: '5', name: 'Member 05', age: '30'  }, 
    { key: '6', name: 'Member 06', age: '10'  },
    { key: '7', name: 'Member 07', age: '10'  }
];

export default class ContextProvider extends React.Component {
    render() {
        return (
            <ListContext.Provider value={list}>
                {this.props.children}
            </ListContext.Provider>
        )
    }
}
