import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('Bem vindo, sujeito programador!');

  function speak() {
    Speech.speak(text, {
      language: 'pt-BR'
    })
  }
  return (
    <View style={styles.container}>
      <TextInput 
        style = {styles.input}
        onChangeText = {e => setText(e)}
        placeholder = "Digite alguma coisa"
      />
      <Button 
        title="Falar :)"
        onPress = {speak}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWith: 1,
    borderColor: '#121212',
    borderRadius: 10, 
    padding: 10,
    margin: 10,
    color: '#000',
    fontSize: 100
  }
});
