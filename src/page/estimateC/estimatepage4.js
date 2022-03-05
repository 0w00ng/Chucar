import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'

import s from '../../style'
import storage from '../../storage';
import axios from 'axios';

export default function EstimatePageScreen5({ route,navigation }) {
  const {kind,year,title,brand,model,price,distance,option,comment} = route.params;
  useEffect(()=>{
    (async () => {
      const  userid = await storage.getData('id');
      const  access_token = await storage.getData('access_token');
        await axios({
          method: 'POST',
          url:`${storage.chucar_url}/contracts/send`,
          headers:{
            Authorization: `${access_token}`,
          },
          data:{
            catg:1,
            gubn:1,
            ct_kind:kind,
            ct_brand:brand,
            ct_model:model, //모델
            ct_year:year,
            ct_title:title,
            ct_content:comment, //딜러에게할말
            ct_price:price, //가격
            ct_distance:distance, //최대주행거리 희망
            ct_option:option, //희망옵션 ex)선루프,,
            ct_usrid:userid
          }
        })
        .then(function (res) { //성공
          console.log(res.data);
        })
        .catch(function (err) { //실패
            console.log(err.data);
        })
      })()
  },[])

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
                신청이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('Root',{screen:'MainPage'})
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}