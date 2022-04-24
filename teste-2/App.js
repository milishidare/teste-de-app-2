import React from "react";
import { Image, View, Text, StyleSheet} from 'react-native';

import Capa from './assets/capa2.png'
 
export default function App() {
return (  
  <View style= {estilos.container}>
    <Image source={Capa} style={estilos.img}/>
<Text style= {estilos.texto}> by mili  </Text>

  </View>


);

}
const estilos= StyleSheet.create ({
container: {
  flex: 1,
  backgroundColor: '#ec2333',
  alignItems: 'center',
  justifyContent: 'center',

},
img: {
marginBottom: 10,
height: 150,
width: 150,
},
texto: {
  fontSize: 10,
  color: 'white'
}



});