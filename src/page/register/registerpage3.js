import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import axios from 'axios';

export default function RegistePageScreen3({ route,navigation }) {

  const {id,password,nickname,email,phone} = route.params;  // Page2에서 보낸 데이터저장

  axios.post(`http://34.64.207.117:3000/signup`, {
        id:id,
        password:password,
        nickname:nickname,
        email:email,
        phone:phone,
        prv1:1,
        prv2:1,
        prv3:1
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
                회원가입이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('LoginPage')
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>로그인 하기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}