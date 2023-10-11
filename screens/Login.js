import React from 'react';

import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';

export default function Login({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/login.png')}
      style={styles.backgroundImage}
    >
     <View style={styles.container}>
      <Text style={styles.title}>NutriPrime</Text>

      <View >
      <Input placeholder='e-mail' />
      <Input placeholder='senha' secureTextEntry />

      <Button  onPress={() => navigation.navigate('Comanda')}>Entrar</Button>
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
