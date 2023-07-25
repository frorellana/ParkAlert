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
import Modal from 'react-native-modal';

export default function CarMap({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(false);
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

  const onPressSave = () => {
    // save item to database
  };

  return (
    <View style={(styles.container, { opacity: modalVisible ? 0.5 : 1 })}>
      {location === null ? (
        <Loading />
      ) : errorMsg ? (
        <Text>'Permission to access location was denied'</Text>
      ) : mapRegion === null ? (
        <Text>Map region doesn't exist</Text>
      ) : (
        <View>
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.container}>
              <View style={styles.modalView}>
                <Text>hiiii</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => console.log('choose location?')}
                >
                  <Text style={styles.textStyle}>Set Reminder</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
            region={mapRegion}
          >
            <Marker coordinate={mapRegion} title="Current Location" />
          </MapView>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={'Save Location'}
              additionalStyles={styles.button}
              onPress={() => setModalVisible(true)}
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
    alignContent: 'center',
    justifyContent: 'center',
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
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
