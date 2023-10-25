import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

import Button from '../components/button';
import Input from '../components/input';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export default function Comanda({navigation}){
  const {username} = useContext(AuthContext)
  return(
    <View style={styles.container}>
      <View>
        <Text>Olá,</Text>
        <Text>{username},</Text>
      </View>

      <View>
        <Input />
        <Button onPress={() => navigation.navigate("Produtos")}>confirmar</Button>
      </View>

      <Text>
          Digite o código do produto.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
})