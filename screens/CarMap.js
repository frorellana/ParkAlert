/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton';
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
import { async } from '@firebase/util';

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

  const onPressSave = async () => {
    // save item to database
    console.log(mapRegion);
  };

  return (
    <View style={styles.container}>
      {location === null ? (
        <Loading />
      ) : errorMsg ? (
        <Text>'Permission to access location was denied'</Text>
      ) : mapRegion === null ? (
        <Text>Map region doesn't exist</Text>
      ) : (
        <View>
          <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
            region={mapRegion}
          >
            <Marker coordinate={mapRegion} title="Current Location" />
          </MapView>
          <View style={styles.buttonContainer}>
            {/* <Button onPress={onPressSave} title="Save Location" color="white" /> */}
            <CustomButton
              text={'Save Location'}
              additionalStyles={styles.button}
              onPress={onPressSave}
            />
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    //use absolute position to show button on top of the map
    backgroundColor: '#457B9D',
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%',
    width: '85%',
  },
});
