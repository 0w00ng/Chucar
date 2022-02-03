// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
// src
import MyPage from './page/mypage';
import LoginPage from './page/loginpage';
import SignupPage from './page/signuppage';
import Headerbar from './header';
import MainPage from './page/mainpage';
import EstimatePage from './page/estimate/estimatepage';
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

export default function Root({navigation}) {

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity 
      onPress={() => navigation.navigate('마이페이지')}>
          <Image source={UserIcon} style={styles.headericon}/>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity 
      onPress={() => navigation.toggleDrawer()}>
          <Image source={Menubar} style={styles.headericon}/>
      </TouchableOpacity>
    ),
    headerTitle:"CHUCAR"
});  
  

    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: true, 
        headerTintColor:'navy',
        headerStyle:{backgroundColor:"white"},
        headerTitle:""
      }}>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="EstimatePage" component={EstimatePage} />
      </Stack.Navigator>
    );
  }

  const styles ={
    headericon: {
    height:30,
    width:30,
    margin:10
    }
}