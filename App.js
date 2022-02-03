// img
import Menubar from './img/menubar.png';
import Titlelogo from './img/chucar_logo.png';
// src
import MyPage from './src/page/mypage';
import LoginPage from './src/page/loginpage';
import SignupPage from './src/page/signuppage';
import MyDrawer from './src/drawer';
// lib
import * as React from 'react';
import { Button, View, Text,Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <MyDrawer />
    </NavigationContainer>
  );
}
