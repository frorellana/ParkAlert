import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainLogo() {
  return (
    <View styles={styles.outterBox}>
      <View styles={styles.innerBox}>
        <Text styles={() => [{ color: '#F1FAEE' }, styles.text]}>PARK</Text>
        <View styles={styles.textContainer}>
          <Text styles={() => [{ color: '#E63946' }, styles.text]}>ALERT!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outterBox: {
    backgroundColor: '#F1FAEE',
    padding: 600,
    margin: 100,
    width: '100%',
    height: '100',
  },
  innerBox: {
    backgroundColor: '#E63946',
    padding: 90,
  },
  textContainer: {
    backgroundColor: '#F1FAEE',
    padding: 100,
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
