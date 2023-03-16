import React, { useContext, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import MainLogo from '../components/MainLogo';

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../assets/main-logo.png')}
      />
      <View style={styles.buttons}>
        <CustomButton
          text={'Login'}
          bgColor={'#457B9D'}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          text={'Register'}
          bgColor={'#E63946'}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1D3557',
    flex: 1,
  },
  img: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    flex: 3,
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
    flex: 2,
  },
});
