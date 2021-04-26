import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import componentes
import RegistryScreen from "./screens/RegistryScreen"
import UserList from "./screens/UserList"
import DetailUserScreen from "./screens/DetailUserScreen"
import LoginScreen from './screens/LoginScreen'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'LoginScreen' component = {LoginScreen}/>
      <Stack.Screen name = 'UserList' component = {UserList}/>
      <Stack.Screen name = 'RegistryScreen' component = {RegistryScreen}/>
      <Stack.Screen name = 'DetailUserScreen' component = {DetailUserScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
