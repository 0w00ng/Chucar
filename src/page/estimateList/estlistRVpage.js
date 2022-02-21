import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import storage from '../../storage';
import axios from "axios";
import s from '../../style';

import Default_icon from '../../../img/Default_Profile.png'

export default function EstlistReplyViewPageScreen({ route, navigation }) {
  const { CR_MODEL,CR_PRICE,CR_COMMENT,CR_DISTANCE,phone,CR_NICKNAME,CR_TITLE } = route.params;
  const { CR_CARIMG0,CR_CARIMG1,CR_CARIMG2,CR_CARIMG3,CR_CARIMG4,CR_CARIMG5,CR_CARIMG6,CR_CARIMG7 } = route.params;

  // function constructor(props) {
  //   super(props);
  //   this.state = {
  //     images: [
  //       CR_CARIMG0,
  //       CR_CARIMG1,
  //       CR_CARIMG2,
  //       CR_CARIMG3,
  //       CR_CARIMG4,
  //       CR_CARIMG5,
  //       CR_CARIMG6,
  //       CR_CARIMG7,
  //     ]
  //   };
  // }

  return (
    <View 
    style={{flex:1,backgroundColor:'white'}}
    onPress={()=>alert('ㅋㅋ')}
    >
      <View style={{alignItems:'center',backgroundColor:'white'}}>
        <Text style={s.titleS}>{CR_TITLE}</Text>
      </View>

      <View style={s.estlistTextV}>
        <Text style={{
          color:'navy',
          fontWeight:'bold',
          marginRight:20,
        }}>{'차종 : ' + CR_MODEL} </Text>
        <Text style={{
          color:'red',
          fontWeight:'bold'
          }}>{`가격 : ${CR_PRICE} 만원`}</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Image source={Default_icon}/>  
        <View style={{flexDirection:'column',justifyContent:'space-evenly',margin:10}}>
          <Text style={s.estlistText}>{CR_NICKNAME + ' 딜러'}</Text>
          <Text style={{
            color:'orange',
            fontWeight:'bold'
          }}>{'연락처 : '+ phone}</Text>
        </View>
      </View>
      <Text>{CR_COMMENT}</Text>
      <Image source={{uri:CR_CARIMG0}} style={{width:200,height:200}}/>
    </View>
  );
}