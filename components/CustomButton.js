import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton({ onPress }) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          { backgroundColor: pressed ? '#D0BDF4' : '#8458B3' },
          styles.container,
        ];
      }}
      onPress={onPress}
    >
      <Text style={styles.input}>Submit</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: 'e8e8e8',
    borderRadius: 5,
    borderWidth: 1,
    padding: 16,
    marginVertical: 5,
    alignItems: 'center',
  },

  input: {
    color: 'white',
  },
});
