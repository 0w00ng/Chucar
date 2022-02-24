import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import storage from '../../storage';
import axios from 'axios';

export default function RegistePageScreen3({ route,navigation }) {

  const {nickname,email,phone,face} = route.params;  // Page2에서 보낸 데이터저장

    useEffect(()=>{
      (async()=>{
        const id = await storage.getData('id');
        axios.put(`${storage.chucar_url}/setpro`, {    //DB 전송
          id:id,
          name:'',
          phone:phone,
          email:email,
          face:face,
          company:nickname,
          card:0,
          prv1:0,
          prv2:0,
          prv3:0,
        })
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        })
      })();
    },[])

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <View style={{alignItems:'center'}}>
            <Image 
              source={success}
              style={{width:'40%'}}
              resizeMode='contain'
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={s.title}>
                등록이 완료되었습니다 !{'\n'}
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