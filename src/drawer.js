// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
// src
import Root from './root';
import MyPage from './page/mypage';

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
        headerRight: () => (
          <TouchableOpacity 
          onPress={() => navigation.navigate('마이페이지')
          }>
              <Image source={UserIcon} style={styles.headericon}/>
          </TouchableOpacity>
        )
      }}
    >
      <Drawer.Screen name="메인" component={Root} options={{ title: '' }}/>
      <Drawer.Screen name="마이페이지" component={MyPage} />
    </Drawer.Navigator>
    );
  }

const styles ={
    headericon: {
    height:30, 
    width:30,
    margin:10
    }
}