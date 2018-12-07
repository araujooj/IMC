import React from 'react';
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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
export default class HomeScreen extends React.Component  {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {massa: 0, altura: 0, resultado:0, resultadoText: ""}
    this.calcular = this.calcular.bind(this)
  }
  calcular (){
    let imc = this.state.massa/(this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc 
   
    
    if(s.resultado <16 ){
      s.resultadoText = "Magreza fodida"
    }
   else if(s.resultado <17 ){
      s.resultadoText = "Magreza moderada"
    }
    else if(s.resultado <18.5 ){
      s.resultadoText = "Magreza leve"
    }
    else if(s.resultado <25 ){
      s.resultadoText = "Saudável"
    }
    else if(s.resultado <30 ){
      s.resultadoText = "Sobrepeso"
    }
    else if(s.resultado <35 ){
      s.resultadoText = "Obesidade Grau I"
    }
    else if(s.resultado <40 ){
      s.resultadoText = "Magreza Grau II"
    } 
    else if(s.resultado >40){
      s.resultadoText = "Obesidade fudida"
    }else if(s.resultado = NaN){
      s.resultadoText = " "
    }
    else if(s.altura = NaN){
      s.resultadoText = " "
    }
    else if(s.massa = NaN){
      s.resultadoText = " "
    }
    else{2
      alert('Informe um numero correto')
    }
    
   
    this.setState(s)
  }
  render() {
    return (
      
          <View style={styles.container}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/qg2.jpg')
                  : require('../assets/images/qg2.jpg')
              }
              style={styles.top}
            />    
  
   <View style ={styles.abertura}>
      <Text style ={styles.abertura}>Calcule seu IMC:</Text>
  </View>

 <View style={styles.formularios}>
 <TextInput placeholder = "Massa" keyboardType="numeric"
     style ={[ styles.codeHighlightContainer, styles.homeScreenFilename]}
     onChangeText = {(massa)=>(this.setState({massa}))}
      />
    
    <TextInput placeholder = "Altura (utilize o padrão com ponto)" keyboardType="numeric" 
    style ={[ styles.codeHighlightContainer, styles.homeScreenFilename]}
    onChangeText = {(altura)=>(this.setState({altura}))}
     />


</View>
  <View styles ={styles.areabotao}>
      
      <TouchableOpacity onPress= {this.calcular}>
      <Image
       style={styles.botao}
      source={require('../assets/images/button.png')}
      />
      <Text style = {styles.calcular} onPress={this.calcular}>Calcular</Text>
      </TouchableOpacity>

      <Text style = {styles.resultado} >
           {this.state.resultado.toFixed(2)}
         </Text>

          <Text style = {[styles.resultado, {fontSize:40}]}>
          {this.state.resultadoText}
         </Text>
 </View>
              
 </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  abertura:{
    color: '#fbfbfb',
    fontSize:35,
    alignSelf:'center'
  },
  resultado:{
    alignSelf:'center',
    color: '#fbfbfb',
    fontSize:65,
    padding:15,
  },
  formularios: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  calcular:{
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
  areabotao:{
    width:50,
    height:15,
    marginHorizontal: 30,
  },
  botao:{
    alignItems :'center',
    padding:15,
    resizeMode:'stretch',
    alignSelf: 'center',
    width:'60%',
    height:'30%',
    borderRadius:100
  },
  top:{
    alignSelf:'center',
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  container: {
    position:'relative',
    flex: 1,
    backgroundColor:'#0092D3',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    width: '100%',
    backgroundColor:'#fbfbfb',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});
