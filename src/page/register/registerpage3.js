import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import storage from '../../storage';
import axios from 'axios';

export default function RegistePageScreen3({ route,navigation }) {

  const {nickname,email,phone} = route.params;  // Page2에서 보낸 데이터저장

  axios.post(`${storage.chucar_url}/signup`, {    //DB 전송
        nickname:nickname,
        email:email,
        phone:phone,
        img:'',
    })
    .then(function (res) {
        console.log(res.data);
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(function () {
        console.log('영웅소프트 화이팅!');
    });

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <View style={{alignItems:'center'}}>
            <Image 
              source={success} style={{width:'40%'}}
              resizeMode='contain'
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={s.title}>
                딜러등록이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('MainPage')
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}