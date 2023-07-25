import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton({ onPress, text, additionalStyles = {} }) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.container,
          styles.shadowProp,
          additionalStyles,
        ];
      }}
      onPress={onPress}
    >
      <Text style={styles.input}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  input: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
