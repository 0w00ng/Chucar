// img
import Menubar from '../img/menubar.png';
import Titlelogo from '../img/chucar_logo.png';
// src
import MyPage from './page/mypage';
import LoginPage from './page/loginpage';
import SignupPage from './page/signuppage';
import Header from './header';
import MainPage from './page/mainpage';
import EstimatePage1 from './page/estimate/estimatepage1';
import EstimatePage2 from './page/estimate/estimatepage2';
import EstimatePage3 from './page/estimate/estimatepage3';
import EstimatePage4 from './page/estimate/estimatepage4';
import EstimatePage5 from './page/estimate/estimatepage5';
// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Root() {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: true, 
        headerTintColor:'navy',
        headerStyle:{backgroundColor:"white"},
        headerTitle:""
      }}>
        <Stack.Screen name="메인" component={MainPage} />
        <Stack.Screen name="로그인" component={LoginPage} />
        <Stack.Screen name="견적1" component={EstimatePage1} />
        <Stack.Screen name="견적2" component={EstimatePage2} />
        <Stack.Screen name="견적3" component={EstimatePage3} />
        <Stack.Screen name="견적4" component={EstimatePage4} />
        <Stack.Screen name="견적5" component={EstimatePage5} />
      </Stack.Navigator>
    );
  }