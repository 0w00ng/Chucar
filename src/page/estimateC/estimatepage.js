// img
// src
import EstimatePage1 from './estimatePage1';
import EstimatePage2 from './estimatePage2';
import EstimatePage3 from './estimatePage3';
import EstimatePage4 from './estimatePage4';
// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
        <Stack.Screen name="EstimatePage1" component={EstimatePage1} />
        <Stack.Screen name="EstimatePage2" component={EstimatePage2} />
        <Stack.Screen name="EstimatePage3" component={EstimatePage3} />
        <Stack.Screen name="EstimatePage4" component={EstimatePage4} />
      </Stack.Navigator>
    );
  }