import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = () => {
    console.log('i am logged in with', email, password);
  };
  return (
    <SafeAreaView>
      <CustomInput placeholder="email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry="true"
      />
      <CustomButton onPress={handleOnPress} />
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text>Don't have an account? Register here</Text>
      </Pressable>
    </SafeAreaView>
  );
}
