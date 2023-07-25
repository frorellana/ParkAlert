import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require('../assets/main-logo.png')} />
      <View style={styles.buttons}>
        <CustomButton
          text={'Login'}
          additionalStyles={styles.button1}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          text={'Register'}
          additionalStyles={styles.button2}
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
  button1: {
    width: '85%',
    marginTop: 16,
    backgroundColor: '#457B9D',
  },
  button2: {
    width: '85%',
    marginTop: 16,
    backgroundColor: '#E63946',
  },
});
