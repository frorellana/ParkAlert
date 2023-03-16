import React, { useContext, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import MainLogo from '../components/MainLogo';

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MainLogo />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1D3557',
    flex: 1,
  },
});
