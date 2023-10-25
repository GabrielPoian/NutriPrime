import React, { useContext, useState } from 'react';

import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';
import { AuthContext } from '../context/AuthContext';

export default function Login({navigation}) {
  const[email,setEmail] = useState('')
  const[senha,setSenha] = useState('')
  const [erro,setErro] = useState('')

  const{login} = useContext(AuthContext)

  async function handleLogin(){
    if (await login({email,senha})){
      navigation.navigate("Comanda")
    }else{
      setErro("usuario ou senha inválidos")

    }
  }
  return (
    <ImageBackground
      source={require('../assets/login.png')}
      style={styles.backgroundImage}
    >
     <View style={styles.container}>
      <Text style={styles.title}>NutriPrime</Text>

      <View >
      <Input placeholder='e-mail' value = {email} onChangeText={setEmail} />
      <Input placeholder='senha' value = {senha} onChangeText={setSenha}secureTextEntry />

      <Button  onPress ={handleLogin}>
        Entrar
      </Button>

      <Text>{erro}</Text>


  </View>

  <TouchableOpacity>
    <Text style={styles.textLogin}> Criar conta</Text>
  </TouchableOpacity>
</View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', 
    marginBottom: 10,
    
  },
  textLogin:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
  },
});
