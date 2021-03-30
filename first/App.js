/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Viewer from './components/view';

function App() {
  return (
    <View style={styles.container}> 
    <Viewer />
    <View style={styles.containerRed} /> 
    <View style={styles.containerGreen} />
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,

  },
  containerRed: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerGreen: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;