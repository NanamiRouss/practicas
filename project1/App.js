/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

   handleUp() {
     const { counter: c } = this.state;
     this.setState({ counter: c + 1 });

   }

   handleDown() {
    const { counter: c } = this.state;
    this.setState({ counter: c - 1 });

  }

  render() {
    const {counter} = this.state;
    return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity 
        style={styles.btn}
        onPress={this.handleDown}
        >
          <Text style={styles.btnTxt}>-</Text>
        </TouchableOpacity>

        <View style={styles.counterContainer}>
         <Text style={styles.counter}>{counter}</Text>

        </View>

        <TouchableOpacity 
        style={styles.btn}
        onPress={this.handleUp}
        >
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>

      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontainer:{
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  btnTxt: {
    fontSize: 25,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },

});

export default App;
