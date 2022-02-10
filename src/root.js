// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
// src
import MyPage from './page/mypage';
import LoginPage from './page/loginpage';
import SignupPage from './page/signuppage';
import Headerbar from './headbar';
import MainPage from './page/mainpage';
import EstimatePage from './page/estimate/estimatepage';
import EstlistPage from './page/estlistpage';
import IntroScreen from './page/intro';
import s from './style';

// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="EstimatePage" component={EstimatePage} />
        <Stack.Screen name="EstlistPage" component={EstlistPage} />
      </Stack.Navigator>
    );
  }