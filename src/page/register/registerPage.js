// img
// src
import RegisterPage1 from './registerpage1';
import RegisterPage2 from './registerpage2';
import RegisterPage3 from './registerpage3';
// lib
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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