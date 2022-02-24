import React from 'react';
import s from '../style'
import { View,TouchableOpacity,Text } from "react-native";
import storage from '../storage';
import axios from 'axios';

export default function KakaoLogOut ({ navigation }){

  async function LogOut() {
    const access_token = await storage.getData('access_token');
    const res =  await axios({
      method: 'get',
      url: `${storage.chucar_url}/logout`,
      headers:{
          Authorization: `${access_token}`, //액세스토큰
          'Content-type':'application/x-www-form-urlencoded;utf-8'
      }
    })
    await storage.clearData();
    navigation.navigate('Root',{screen:'IntroPage'});
      alert('로그아웃 되었습니다.')
    }
  LogOut();
  

  return (
    <View style={{ flex: 1 }}>
    </View>
  );
};