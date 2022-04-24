
import React from "react";
import { Image, Text, View, StyleSheet} from 'react-native';

import Jenie from './assets/jenie.png';
import Rose from './assets/rose.png';
import Lisa from './assets/lisa.png';
import Jisoo from './assets/jisoo.png';
 
export default function App () {
 return ( 

  <View style= {estilos.container}>
<Text style= {estilos.titulo}> BLACKPINK</Text>

<Image source={ Jenie} style={estilos.img}/>
<Text style={ estilos.margem}> JENNIE </Text>
<Image source={ Rose} style= { estilos.img}/>
<Text style={ estilos.margem}>ROSÉ</Text>
<Image source={Lisa } style={estilos.img}/>
<Text style={estilos.margem}>LISA </Text>
<Image source={Jisoo} style={ estilos.img}/>
<Text style={estilos.margem}> JISOO</Text>

  </View>


 );


}
 const estilos= StyleSheet.create ({
container: {
flex: 1,
backgroundColor: 'pink',
alignItems: 'center',
justifyContent: 'center',

  
},
titulo: {
  fontSize: 22,
  marginBottom: 30,
  marginTop: 20,
},
margem: {
  fontSize:10,
  marginBottom:5,

},
img: {
 marginBottom:10,
 marginTop: 5,
 height: 130,
 width: 130
 
} 
 } );