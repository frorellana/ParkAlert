import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton({ onPress, text, bgColor }) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          {
            opacity: pressed ? 0.5 : 1,
            backgroundColor: `${bgColor}`,
          },
          styles.container,
          styles.shadowProp,
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
    width: '85%',
    borderRadius: 15,
    padding: 18,
    marginTop: 16,
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
