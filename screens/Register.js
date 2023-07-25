import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase';

export default function Login({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const context = useContext(AuthContext);

  const iconPerson = <MaterialIcons name="person" size={20} color="grey" />;
  const iconEmail = <MaterialIcons name="email" size={20} color="grey" />;
  const iconPassword = <MaterialIcons name="lock" size={20} color="grey" />;

  const onPress = () => {
    //  console.log('i am logged in with', displayName, email, password);
    // if createUser is successful, should proceed to login
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
          value={displayName}
          setValue={setDisplayName}
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
          onPress={onPress}
          additionalStyles={styles.button}
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
    justifyContent: 'center',
  },
  img: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    width: '85%',
    marginTop: 16,
    backgroundColor: '#E63946',
  },
});
