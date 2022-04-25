import React from "react";
import { Image, Text, StyleSheet, View} from 'react-native';

import Jenie from './assets/jenie.png';
import Rose from './assets/rose.png';
import Lisa from './assets/lisa.png';
import Jisoo from './assets/jisoo.png';

export default function App (){
return (
<View style= {estilos.container}>
  <Text style={ estilos.titulo}> BLACKPINK </Text>

  <Image source={Jenie} style={estilos.img}/>
  <Text style={estilos.texto}> JENNIE </Text>
  <Image source={Rose} style={ estilos.img}/>
  <Text style={estilos.texto}> ROSE </Text>
  <Image source={Lisa} style={ estilos.img}/>
  <Text style={estilos.texto}> LISA </Text>
  <Image source={Jisoo} style={ estilos.img}/>
  <Text style={estilos.texto}> JISOO </Text>
   
</View>

);
}

const estilos= StyleSheet.create ({
container:{
flex: 1,
backgroundColor: 'pink',
alignItems: 'center',
justifyContent: 'center',

},

titulo:{
fontSize: 30,
color: 'white',
marginTop: 30,
letterSpacing: 5,
fontWeight: 'bold',
},

img:{
marginBottom: 10,
marginTop: 20,
height: 130,
width: 140,
borderColor: 'white',
borderRadius: 30,
borderWidth:2,


},
 texto:{
   fontSize: 12,
   color: 'white',

   
 }


});