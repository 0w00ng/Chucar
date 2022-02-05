// img
// src
import RegisterPage1 from './register/registerpage1';
import RegisterPage2 from './register/registerpage2';
import RegisterPage3 from './register/registerpage3';
// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function RegisterPageScreen({navigation}) {

    return (
      <Stack.Navigator                          //헤더바 옵션설정
      screenOptions={{
        headerShown: true, 
        headerTintColor:'navy',
        headerStyle:{backgroundColor:"white"},
        headerTitle:""
      }}>
        <Stack.Screen name="RegisterPage1" component={RegisterPage1} />
        <Stack.Screen name="RegisterPage2" component={RegisterPage2} />
        <Stack.Screen name="RegisterPage3" component={RegisterPage3} />
      </Stack.Navigator>
    );
  }