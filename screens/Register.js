import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase';

export default function Login({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const context = useContext(AuthContext);

  const iconPerson = <MaterialIcons name="person" size={20} color="grey" />;
  const iconEmail = <MaterialIcons name="email" size={20} color="grey" />;
  const iconPassword = <MaterialIcons name="lock" size={20} color="grey" />;

  const onPress = () => {
    console.log('i am logged in with', name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        navigation.navigate('Main Menu');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <KeyboardAwareScrollView style={styles.scroll}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/vertical-logo.png')}
        />

        <CustomInput
          icon={iconPerson}
          placeholder="Name"
          value={name}
          setValue={setName}
          style={styles.inputs}
        />
        <CustomInput
          icon={iconEmail}
          placeholder="Email"
          value={email}
          setValue={setEmail}
          style={styles.inputs}
        />
        <CustomInput
          icon={iconPassword}
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          style={styles.inputs}
        />
        <CustomInput
          icon={iconPassword}
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
          style={styles.inputs}
        />
        <CustomButton
          text={'Submit'}
          bgColor={'#E63946'}
          onPress={onPress}
          style={styles.button}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#1D3557',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#1D3557',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  img: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
});
