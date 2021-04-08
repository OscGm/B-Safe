import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import componentes
import CreateUserScreen from "./screens/CreateUserScreen"
import UserList from "./screens/UserList"
import DetailUserScreen from "./screens/DetailUserScreen"

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'UserList' component = {UserList}/>
      <Stack.Screen name = 'CreateUserScreen' component = {CreateUserScreen}/>
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
