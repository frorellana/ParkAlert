import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const TitleContainer = ({ titleText, naviName }) => {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          { backgroundColor: pressed ? '#D0BDF4' : '#8458B3' },
          styles.button,
        ];
      }}
    >
      <Text style={styles.titleText}>{titleText}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'centrer',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  titleText: {
    color: '#E5EAF5',
  },
});

export default TitleContainer;
