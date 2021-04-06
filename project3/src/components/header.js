import React from 'react';
import { Text, View } from 'react-native';


//componentes
const Header = (props) => { //acceso al prop creado en index

    const  { textStiling, viewStyle } = styles;

    return ( 
        <View style = {viewStyle}>
        
          <Text style = {textStiling}> {props.title}</Text>  
        </View>
    );
}

//estilos
const styles = {
    //estilo del texto
    textStiling: {
        
        fontSize: 22 //estilo de la fuente
        
    },
    viewStyle:{
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center', // alinia verticalmente en el contenedor 
        alignItems: 'center', // alinia orizontalmente en el contenedor
        paddingTop: 20

    },

}

export default Header; //exportar componente para hacer uso fuera de el (componente hijo)



