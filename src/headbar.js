// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
//
import s from './style';
// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function HeaderBar({navigation}) {
    return (
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity 
          onPress={() => navigation.navigate('마이페이지')}>
              <Image source={UserIcon} style={s.headericon}/>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity 
          onPress={() => navigation.toggleDrawer()}>
              <Image source={Menubar} style={s.headericon}/>
          </TouchableOpacity>
        ),
        headerTitle:"CHUCAR"
    })   
    );
}