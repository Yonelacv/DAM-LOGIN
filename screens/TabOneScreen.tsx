import React from 'react';
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image style={styles.imgStyle}
      source={ require('./images/usuario.png') }
      ></Image>
      <Text>Introduce tu email:</Text>
      <TextInput 
          placeholder="Email" />
      <Text>Introduce tu contraseña:</Text>
      <TextInput
          secureTextEntry={true}
          placeholder="Password"
      />
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  imgStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  
});
