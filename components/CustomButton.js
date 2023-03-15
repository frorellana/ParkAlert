import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton() {
  return (
    <Pressable style={styles.container}>
      <Text>Submit</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    width: '100%',
    borderColor: 'e8e8e8',
    borderRadius: 5,
    borderWidth: 1,
    padding: 16,
  },

  input: {
    color: 'white',
  },
});
