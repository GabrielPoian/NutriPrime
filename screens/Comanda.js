import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

import Button from '../components/button';
import Input from '../components/input';

export default function Comanda(){
  return(
    <View style={styles.container}>
      <View>
        <Text>Olá,</Text>
        <Text>Nome,</Text>
      </View>

      <View>
        <Input />
        <Button>Confirmar</Button>
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