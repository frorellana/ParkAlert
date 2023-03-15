import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({
  placeholder,
  value,
  setValue,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'e8e8e8',
    borderRadius: 5,
    borderWidth: 1,
  },

  input: {},
});
