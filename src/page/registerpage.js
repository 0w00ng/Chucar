// img
// src
import RegisterPage1 from './register/registerpage1';
import RegisterPage2 from './register/registerpage2';
// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function EstimatePageScreen({navigation}) {

    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: true, 
        headerTintColor:'navy',
        headerStyle:{backgroundColor:"white"},
        headerTitle:""
      }}>
        <Stack.Screen name="RegisterPage1" component={RegisterPage1} />
        <Stack.Screen name="RegisterPage2" component={RegisterPage2} />
      </Stack.Navigator>
    );
  }