// img
import UserIcon from '../img/user_icon.png';
// src
import MainPage from './page/mainpage';
import EstimatePage from './page/estimateC/estimatepage';
import EstimateDPage from './page/estimateD/estimateDpage';
import EstlistPage from './page/estlistpage';
import EstlistVPage from './page/estlistVpage';
import s from './style';

// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Root({navigation}) {

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity 
      onPress={() => navigation.navigate('MyPage')}>
          <Image source={UserIcon} style={s.headericon}/>
      </TouchableOpacity>
    ),
    headerTitle:"CHUCAR"
});  
  

    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        headerTintColor:'navy',
        headerStyle:{backgroundColor:"white"},
        headerTitle:""
      }}>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="EstimatePage" component={EstimatePage} />
        <Stack.Screen name="EstimateDPage" component={EstimateDPage} />
        <Stack.Screen name="EstlistPage" component={EstlistPage} />
        <Stack.Screen name="EstlistVPage" component={EstlistVPage} />
      </Stack.Navigator>
    );
  }