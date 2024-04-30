import { View, Image, Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
    <View style={styles.container}>

      <Image 
      style={{width:'80%', height:80, marginBottom:30}}
      resizeMode="contain"
      source={require('../../assets/facebook.png')}
      />
      <InputTexto label="" dica="Digite seu telefone ou email"/>
      <InputTexto label="" dica="Digite sua senha" seguranca={true}/>

      <Botao btn="Entrar" cor='#0000ff' src='home' size='80%'/>
      <View style={styles.cont}>
        <View style={styles.line} />
        <Text style={styles.text}>ou</Text>
        <View style={styles.line} />
      </View>
      <Botao btn="Criar nova conta" cor='#f0f0f0' src='excluido' />
    </View>
  );


}

