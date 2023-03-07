import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Title from './components/TitleContainer';

export default function App() {
  const navTitles = ['Add Parking Spot', 'Find Car', 'Clear Parking Location'];
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.mainTitle}>ParkAlert!!</Text>
        <Image
          style={styles.carImage}
          source={require('./assets/vintage-car-png.webp')}
        />
        {navTitles.map((title, index) => (
          <Title
            titleText={title}
            key={`key${index}${index}`}
            id={`${index}${index}`}
            style={styles.titleStyle}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 50,
    color: 'rgb(126, 90, 200)',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(26, 42, 78)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  carImage: {
    height: 100,
    width: 210,
    margin: 50,
  },
  titleStyle: {
    width: '100%',
  },
});
