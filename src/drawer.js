// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
// src
import Root from './root';
import MyPage from './page/mypage';
import EstimatePage from './page/estimate/estimatepage';
import EstlistPage from './page/estlistpage';
import s from './style';

// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyDrawer({navigation}) {

const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator
      initialRouteName="Root"
      screenOptions={{
        drawerType: 'front',    
      }}
    >
      <Drawer.Screen name="Root" component={Root} options={{title:"홈"}}/>
      <Drawer.Screen name="EstimatePage" component={EstimatePage} options={{title:"견적신청"}}/>
      <Drawer.Screen name="EstlistPage" component={EstlistPage} options={{title:"견적내역"}}/>
      <Drawer.Screen name="MyPage" component={MyPage} options={{title:"마이페이지"}}/>
    </Drawer.Navigator>
    );
  }