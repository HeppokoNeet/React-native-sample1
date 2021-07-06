import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function Tweet() {
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput
      style={{ fontSize: 40, color: 'red' }}
      onChangeText={text => setValue(text)}
        value={value}
        />
    </View>
  );
}