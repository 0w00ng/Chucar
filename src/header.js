// img
import Menubar from '../img/menubar.png';
import UserIcon from '../img/user_icon.png';
import Titlelogo from '../img/chucar_logo.png';
// lib
import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HeaderBar({navigation}) {

    function headerb() {navigation.setOptions({
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
    })}
    return (
        headerb()
    );
}

  const styles ={
    headericon: {
    height:30, 
    width:30,
    margin:10
    }
}