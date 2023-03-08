import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
const TitleContainer = ({ titleText, id }) => {
  const onPressTitle = () => {
    console.log(titleText, 'was pressed');
  };
  return (
    <View style={styles.titleContainer}>
      <Pressable
        onPress={onPressTitle}
        style={({ pressed }) => {
          return [
            { backgroundColor: pressed ? '#D0BDF4' : '#8458B3' },
            styles.button,
          ];
        }}
      >
        <Text style={styles.titleText}>{titleText}</Text>
      </Pressable>
    </View>
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
