import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Name from './components/Name'

export default function App() {
  const [value, setValue] = useState('あああ');
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40 }}>テキストを入力する</Text>
      <TextInput
      style={{ fontSize: 40, color: 'red' }}
      onChangeText={text => setValue(text)}
      value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
