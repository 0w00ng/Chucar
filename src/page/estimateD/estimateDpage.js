// img
// src
import EstimatePage1 from './estimateDpage1';
import EstimatePage2 from './estimateDpage2';
import EstimatePage3 from './estimateDpage3';
import EstimatePage4 from './estimateDpage4';
// lib
// lib
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function EstimatePageScreen({route}) {
  const {cr_num,cr_key} = route.params;
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
        <Stack.Screen name="EstimatePage4" component={EstimatePage4} 
        initialParams={{
          cr_num:cr_num,
          cr_key:cr_key,
          }} />
      </Stack.Navigator>
    );
  }