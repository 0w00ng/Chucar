import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import axios from 'axios';

export default function EstimatePageScreen5({ route,navigation }) {
  const {kind,menufact,model,grade,price,mprice,distance,option,comment} = route.params;

  axios.post(`http://34.64.207.117:3000/contract/send`, {
    kind:kind, //1할부, 2렌트, 3리스, 4현금.
    brand:menufact, //제조사
    model:model, //모델
    detail:grade, //세부모덷
    price:price, //가격
    mnpay:mprice, //월납입금액
    distance:distance, //최대주행거리 희망
    option:option, //희망옵션 ex)선루프,,
    protosay:comment, //딜러에게할말
    procode:'', //추천인코드
    usrid:'' //고객의 아이디 -> 추후에 로그인 개발하면 해당 사용자 id 추출 후 넣을 것
  })
  .then(function (res) { //성공
      console.log(res.data);
  })
  .catch(function (err) { //실패
      console.log(err.data);
  })
  .then(function () { //항상
      console.log('영웅소프트 견적서');
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
                견적 신청이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('Root',{screen:'Main'})
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>돌아가기(5/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}