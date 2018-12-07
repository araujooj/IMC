import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import axios from 'axios';

export default class LinksScreen extends React.Component {

  static navigationOptions = {
    title: 'ViaCEP',
  };
  constructor (props){
    super(props)
    this.state = {
      cep: {},
      cepNumber: ''
    };
  }
  getCep(cep) {
    axios.get(`https://viacep.com.br/ws/` + cep + `/json/`)
      .then(res => {
        const cep = res.data;
        this.setState({ cep });
      })
      .catch(e => console.log(e))
  }
  hd = name => e =>{
    this.setState({
      [name]:e.target.value
    })
  } 

  render() {
    return (
      <ScrollView style={styles.container}>
       <Image 
       style = {styles.logo}
       source = {require('../assets/images/qg2.jpg')}
       />
       <TextInput style={styles.formularios} placeholder = 'CEP' onChange={this.hd('cepNumber')} />
       <TextInput style={styles.formularios} placeholder = 'Cidade' Value={this.state.cep.localidade} />
       <TextInput style={styles.formularios} placeholder = 'Estado' Value={this.state.cep.uf} />
       <TextInput style={styles.formularios} placeholder = 'Endereço ' Value ={this.state.cep.logradouro} />
       <TextInput style={styles.formularios} placeholder = 'Complemento' Value={this.state.cep.complemento} />
      
       <TouchableOpacity onPress={() => this.getCep(this.state.cepNumber)} >
       <Image
        style={styles.enviar}
       source={require('../assets/images/button.png')}
       />
       <Text style = {styles.enviar2} onPress={() => this.getCep(this.state.cepNumber)}>Enviar</Text>
       </TouchableOpacity>
     
     
     
      </ScrollView>
       
    );
  }
}

const styles = StyleSheet.create({
  enviar:{
    alignItems :'center',
    padding:15,
    resizeMode:'stretch',
    alignSelf: 'center',
    width:'60%',
    height:'30%',
    borderRadius:100
  },
  enviar2:{
    marginLeft:0,
    marginBottom: 0,
    marginTop:0,
    marginHorizontal:0,
    marginVertical:0,
    color:'#fbfbfb',
    padding:7,
    position:'absolute',
    alignSelf : 'center',
    fontSize : 17,
  },
  formularios: {
    alignSelf: 'center',
    width: '70%',
    backgroundColor:'#fbfbfb',
    borderRadius: 3,
    paddingHorizontal: 4,
    marginVertical: 7,
  },
  logo:{
    alignSelf:'center',
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#0092D3',
  },
});
