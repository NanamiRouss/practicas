import React from 'react';
import { Text, AppRegistry, View } from 'react-native';  


//importar header.js
import Header from './src/components/header';
//importar CarList.js
import CarList from './src/components/CarList';


const App = () => {

    return (

    <View>
      <Header title ={'Catalogo'}/>
      <CarList />
    </View>
    
    ); //prop


};





AppRegistry.registerComponent('project3', () => App);  //componente raiz 
