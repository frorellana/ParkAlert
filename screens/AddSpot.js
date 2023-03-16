import React from 'react';
import { View, Text } from 'react-native';
import CustomInput from '../components/CustomInput';

export default function AddSpot() {
  return (
    <View>
      <Text>Add your parking here</Text>
      <CustomInput />
    </View>
  );
}
