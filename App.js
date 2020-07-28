import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import Home from "./screens/homeScreen";
import Search from "./screens/search";
import MyProfile from "./screens/myProfile";
import Gallery from "./screens/gallery";
import allReducers from "./redux/store";
import sagas from "./redux/saga/sagas";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: allReducers,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(sagas)


function Activities() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Activities</Text>
    </View>
  )
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="InstaCrash" component={Bottom} options={{
            headerShown: false,
            headerLeft: () => (
              <Icon style={{ marginLeft: 10 }}
                name='camera-outline'
                size={35}
              />),
            headerRight: () => (
              <Icon style={{ marginRight: 10 }}
                name='send'
                size={30}
              />
            )
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function Bottom() {
  return (
    <Provider store={store}>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => (
            <Icon
              name='home-variant'
              size={30}
            />
          )
        }} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: () => (
            <Icon
              name='magnify'
              size={30}
            />
          )
        }} />
        <Tab.Screen name="Gallery" component={Gallery} options={{
          tabBarIcon: () => (
            <Icon
              name='plus-box-outline'
              size={30}
            />
          )
        }} />
        <Tab.Screen name="Activities" component={Activities} options={{
          tabBarIcon: () => (
            <Icon
              name='heart-outline'
              size={30}
            />
          )
        }} />
        <Tab.Screen name="MyProfile" component={MyProfile} options={{
          tabBarIcon: () => (
            <Icon
              name='account-outline'
              size={30}
            />
          )
        }} />
      </Tab.Navigator>
    </Provider>
  )
}

export default App