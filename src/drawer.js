// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
// src
import Root from './root';
import MyPage from './page/mypage';
import EstimatePage from './page/estimateC/estimatepage';
import EstlistPage from './page/estlistpage';
import LoginPage from './page/loginpage';
import RegisterPage from './page/registerpage';
import IntroScreen from './page/intro';
import s from './style';

// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default function MyDrawer({navigation}) {

const Drawer = createDrawerNavigator();
    return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Root"
        screenOptions={{
          drawerType: 'front',    
        }}
      >
        <Drawer.Screen name="Intro" component={IntroScreen} options={{
          drawerLabel: () => null,
          title: undefined,
          drawerIcon: () => null,
          }} />
        <Drawer.Screen name="Root" component={Root} options={{title:"홈"}}/>
        <Drawer.Screen name="EstimatePage" component={EstimatePage} options={{title:"견적신청"}}/>
        <Drawer.Screen name="EstlistPage" component={EstlistPage} options={{title:"견적내역"}}/>
        <Drawer.Screen name="MyPage" component={MyPage} options={{title:"마이페이지"}}/>
        <Drawer.Screen name="LoginPage" component={LoginPage} options={{
          drawerLabel: () => null,
          title: undefined,
          drawerIcon: () => null,
          }} />
        <Drawer.Screen name="RegisterPage" component={RegisterPage} options={{title:"회원가입"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }