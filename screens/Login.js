import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(AuthContext);

  const iconEmail = <MaterialIcons name="email" size={20} color="grey" />;
  const iconPassword = <MaterialIcons name="lock" size={20} color="grey" />;

  const onPress = () => {
    // console.log('i am logged in with', email, password);
    context.loginRequest(email, password);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/vertical-logo.png')}
      />
      <CustomInput
        icon={iconEmail}
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        icon={iconPassword}
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
        text={'Submit'}
        onPress={onPress}
        additionalStyles={styles.button}
      />
      <Text
        onPress={() => navigation.navigate('Register')}
        style={styles.registerLink}
      >
        Don't have an account? Create a new account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1D3557',
    flex: 1,
    paddingTop: '15%',
  },
  registerLink: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'white',
  },
  img: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    width: '85%',
    marginTop: 16,
    backgroundColor: '#457B9D',
  },
});
