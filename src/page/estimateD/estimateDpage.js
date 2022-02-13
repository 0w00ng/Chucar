// img
// src
import EstimatePage1 from './estimateDpage1';
import EstimatePage2 from './estimateDpage2';
import EstimatePage3 from './estimateDpage3';
// lib
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
      </Stack.Navigator>
    );
  }