/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
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
import * as ExpoLocation from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Loading from '../components/Loading';

export default function CarMap({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  useEffect(() => {
    const fetchStatus = async () => {
      let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      console.log(status);
      if (status === 'granted') {
        let position = await ExpoLocation.getCurrentPositionAsync({});
        setLocation(position);
        setMapRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        setErrorMsg(true);
      }
    };
    fetchStatus();
  }, []);

  return (
    <View style={styles.container}>
      {location === null ? (
        <Loading />
      ) : errorMsg ? (
        <Text>'Permission to access location was denied'</Text>
      ) : mapRegion === null ? (
        <Text>Map region doesn't exist</Text>
      ) : (
        <MapView
          style={{ alignSelf: 'stretch', height: '100%' }}
          region={mapRegion}
        >
          <Marker coordinate={mapRegion} title="Current Location" />
        </MapView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
