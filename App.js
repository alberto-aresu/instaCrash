import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/homeScreen";
import Search from "./screens/search";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Gallery() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gallery</Text>
    </View>
  )
}

function Activities() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Activities</Text>
    </View>
  )
}

function MyProfile() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InstaCrash" component={Bottom} options={{
          headerLeft: () => (
            <Icon
              name='camera'
              type='font-awesome-5'
              size={40}
            />),
          headerRight: () => (
            <Icon
              name='paper-plane'
              type='font-awesome-5'
              size={40}
            />
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Bottom() {
  return(
    <Tab.Navigator tabBarOptions={{showLabel:false}}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => (
          <Icon
          name='home'
          type='font-awesome-5'
          size={25}
        />
        )}}/>
        <Tab.Screen name="Search" component={Search} options={{tabBarIcon: () => (
          <Icon
          name='search'
          type='font-awesome-5'
          size={25}
        />
        )}}/>
        <Tab.Screen name="Gallery" component={Gallery} options={{tabBarIcon: () => (
          <Icon
          name='plus-square'
          type='font-awesome-5'
          size={25}
        />
        )}}/>
        <Tab.Screen name="Activities" component={Activities} options={{tabBarIcon: () => (
          <Icon
          name='heart'
          type='font-awesome-5'
          size={25}
        />
        )}}/>
        <Tab.Screen name="MyProfile" component={MyProfile} options={{tabBarIcon: () => (
          <Icon
          name='user'
          type='font-awesome-5'
          size={25}
        />
        )}}/>
    </Tab.Navigator>
  )
}

export default App