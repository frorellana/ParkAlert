import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(AuthContext);

  const onPress = () => {
    console.log('i am logged in with', email, password);
    context.loginRequest();
  };
  return (
    <SafeAreaView>
      <CustomInput placeholder="email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text={'Submit'} bgColor={'#457B9D'} onPress={onPress} />
      {/* <Pressable
        onPress={() => navigation.navigate('Register')}
        style={styles.submitButton}
      > */}
      <Text
        onPress={() => navigation.navigate('Register')}
        style={styles.registerLink}
      >
        Don't have an account? Register here
      </Text>
      {/* </Pressable> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerLink: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});
