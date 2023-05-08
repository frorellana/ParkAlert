import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({
  icon,
  placeholder,
  value,
  setValue,
  secureTextEntry = false,
}) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      {icon}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 6,
    padding: 12,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    paddingLeft: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
