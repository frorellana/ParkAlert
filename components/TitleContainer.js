import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
const TitleContainer = ({ titleText, id }) => {
  const onPressTitle = () => {
    console.log(titleText, 'was pressed');
  };
  return (
    <View style={styles.titleItem}>
      <Pressable
        onPress={onPressTitle}
        style={({ pressed }) => {
        console.log(pressed);
          return pressed && styles.onPressStyle;
      }}
      >
        <View style={styles.titleItem}>
          <Text style={styles.title}>{titleText}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
  },
  titleItem: {
    borderRadius: 10,
    backgroundColor: 'rgb(170, 209, 232)',
    margin: 10,
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  titleText: {
    color: 'rgb(77, 77, 94)',
  },
  onPressStyle: {
    backgroundColor: 'black',
  },
});

export default TitleContainer;
