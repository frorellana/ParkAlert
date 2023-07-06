import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/Auth';

export default function Home({ navigation }) {
  const context = useContext(AuthContext);
  const DATA = [
    { text: 'Add Parking Spot', navigation: 'CarMap' },
    { text: 'Find Car', navigation: 'FindCar' },
    { text: 'Clear Parking Location', navigation: 'Clear' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <View style={styles.header}>
          <StatusBar style="light" />
          <Text style={styles.mainTitle}>ParkAlert!!</Text>
          <Image
            style={styles.carImage}
            source={require('../assets/vintage-car-png.webp')}
          />
        </View>
        <View style={styles.body}>
          {DATA.map((item, index) => (
            <Pressable
              key={`${item.text}${index}`}
              onPress={() => navigation.navigate(item.navigation)}
              style={({ pressed }) => {
                return [
                  { backgroundColor: pressed ? '#D0BDF4' : '#8458B3' },
                  styles.button,
                ];
              }}
            >
              <Text style={styles.titleText}>{item.text}</Text>
            </Pressable>
          ))}
          <Button title="SignOut" onPress={context.logoutRequest} />
          {/* <FlatList
            style={styles.list}
            data={DATA}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigation.navigate(item.navigation)}
                style={({ pressed }) => {
                  return [
                    { backgroundColor: pressed ? '#D0BDF4' : '#8458B3' },
                    styles.button,
                  ];
                }}
              >
                <Text style={styles.titleText}>{item.text}</Text>
              </Pressable>
            )}
            keyExtractor={(item, index) => `${item.text}${index}`}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 50,
    color: 'rgb(126, 90, 200)',
    fontWeight: '700',
    margin: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(26, 42, 78)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },

  header: {
    flex: 4,
    justifyContent: 'center',
    paddingVeritcal: 30,
  },
  body: {
    flex: 3,
    justifyContent: 'center',
  },
  carImage: {
    height: 100,
    width: 210,
    margin: 50,
  },
  titleStyle: {
    width: '100%',
  },
  button: {
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
  },
  list: {
    width: '80%',
    margin: 20,
  },
  titleText: {
    color: '#E5EAF5',
  },
});
