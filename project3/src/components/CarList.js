import React, {Component} from 'react'; //{component} libreria para componente de clases
import {View, Text} from 'react-native';
import axios from 'axios'; //peticiones http - descargar datos dentro de la app 
// npm install --save axios

//componente basada en clases 
class  CarList extends Component  {
    
    //inicializar estado - array: []
    state ={ CarList: [] };


    componentDidMount () {

        axios.get('http://givecars.herokuapp.com')
          .then (response => { 
              this.setState({CarList: response.data}) // actualizar el estado con setState - data=informacion abstraida del http
          });

    }

    renderList = () => {
        return this.state.CarList.map((brand) => {
            return <Text> {brand.model[0].name}</Text>;

        });
    };
    
    render () {

        console.log(this.state);
        
        return <View>{this.renderList()}</View>;
        
    }
}

export default CarList;
