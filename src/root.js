// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import ChucarLogo from '../img/chucar-logoN1.png';

// src
import MainPage from './page/mainPage';
import IntroPage from './page/introPage';
import MyPage from './page/myPage';
import LoginPage from './page/loginPage';
import LogoutPage from './page/logoutPage';
import RegisterPage from './page/register/registerPage';
import EstimatePage from './page/estimateC/estimatePage';
import EstimateDPage from './page/estimateD/estimateDpage';
import EstlistPage from './page/estimateList/estlistPage';
import EstlistVPage from './page/estimateList/estlistVpage';
import s from './style';

// lib
import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Root({navigation}) {

  return (
    <Stack.Navigator
    screenOptions={{
      initialProps:'MainPage',
      gestureEnabled:false,
      headerTintColor:'navy',
      headerStyle:{backgroundColor:"white"},
      headerShadowVisible:false,
      title:<Image source={ChucarLogo} style={s.headericon}/>,
      headerRight: () => (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Root',{screen:'MyPage'})}>
            <Image source={UserIcon} style={s.headericon}/>
        </TouchableOpacity>
      ),
    }}>
      <Stack.Group
        screenOptions={{
          headerShown: true,
        }}
      >

        <Stack.Screen 
          name="MainPage" 
          component={MainPage}
          options={{}}/>
        <Stack.Screen 
          name="IntroPage" 
          component={IntroPage} />
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage}
          options={{headerTitle:"로그인"}}/>
        <Stack.Screen 
          name="LogoutPage" 
          component={LogoutPage} 
          options={{headerTitle:"로그아웃"}}/>
        <Stack.Screen 
          name="MyPage" 
          component={MyPage} 
          options={{headerTitle:"마이페이지"}}/>
        <Stack.Screen 
          name="EstlistPage" 
          component={EstlistPage} 
          options={{headerTitle:"견적내역"}}/>
        <Stack.Screen 
          name="EstlistVPage" 
          component={EstlistVPage}
          options={{headerTitle:""}}/>
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="EstimatePage" 
          component={EstimatePage} 
          options={{headerTitle:"견적신청"}}/>
        <Stack.Screen 
          name="EstimateDPage" 
          component={EstimateDPage} 
          options={{headerTitle:"견적서 작성"}}/>
        <Stack.Screen 
          name="RegisterPage" 
          component={RegisterPage} 
          options={{headerTitle:"견적서 작성"}}/>
      </Stack.Group>

    </Stack.Navigator>
  );
}