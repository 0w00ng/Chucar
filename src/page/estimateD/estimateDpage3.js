import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import storage from '../../storage';
import axios from 'axios';

export default function EstimatePageScreen5({ route,navigation }) {
  const {cr_num,kind,title,model,price,distance,option,comment} = route.params;

  async function SendCT() {
    const userid = await storage.getData('id');
    const nickname = await storage.getData('nickname');
    const access_token = await storage.getData('access_token');

      await axios({
        method: 'POST',
        url:'http://34.64.207.117:3000/reply',
        headers:{
          Authorization: `${access_token}`,
        },
        data:{
          //kind:kind,
          cr_model:model, //모델
          //title:title,
          cr_nickname:nickname,
          cr_num:cr_num,
          cr_comment:comment, //딜러에게할말
          cr_price:price, //가격
          cr_distance:distance, //최대주행거리 희망
          //option:option, //희망옵션 ex)선루프,,
          img1:'',
          img2:'',
          img3:'',
          img4:'',
          img5:'',
          img6:'',
          img7:'',
          img8:'',
          proid:userid,
        }
      })
      .then(function (res) { //성공
        console.log(`res : ${res.data}`);
      })
      .catch(function (err) { //실패
        console.log(`err : ${err}`);
      })
  }SendCT();
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
                견적서 작성이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('Root',{screen:'MainPage'})
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>완료</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}