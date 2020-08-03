import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "../components/profile";

const Stack = createStackNavigator();

const Gallery = ({navigation}) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gallery</Text>
      <Button
      title="Go to Profile"
      onPress={() => {navigation.navigate(Profile)}}
      />
    </View>
  )

}

export default Gallery