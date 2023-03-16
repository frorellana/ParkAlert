import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => {
    console.log('i am signed up with', email, password);
  };
  return (
    <SafeAreaView>
      <Text>Create Account</Text>
      <CustomInput placeholder="email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text={'Submit'} bgColor={'#E63946'} onPress={onPress} />
    </SafeAreaView>
  );
}
