import React from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';




export default function App(){
  return(
    <View>

      <StatusBar barStyle='light-content'/>

      <SafeAreaView style={styles.safeArea}>
        <View style ={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form/>
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Calcular</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    
    height: 290,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',


  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1, //por debajo de todo 

  },

  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

});