import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'
import DefaultUser from '../../img/Default_Profile.png'

export default function EstlistPageScreen({ navigation }) {

  const empty = true
  navigation.setOptions({ headerShown: true });      // 헤더바 숨기기

  function Estlist(){
    return(
      <TouchableOpacity style={s.estlistContainer}>
        <Text style={s.estlistTitle}>BMW 320d 1000만원 부탁드려요</Text>
        <View style={s.estlistTextV}>
          <Text style={s.estlistText}> 차종 : BMW 320d</Text>
          <Text style={s.estlistText}> 가격 : 1000~2000만원</Text>
        </View>
        <Text> 돈은 없는데 가오는 살리고 싶어요 많은 견적 바람</Text>
      </TouchableOpacity>
    )
  }

    return (
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
          <View style={{alignItems:'center'}}>
            <Text style={s.title}>
                견적 요청 내역{'\n'}
            </Text>
          </View>
          <View style={{display:empty ? 'none' : 'flex'}}>
            <Image source={estlist_empty}/>
          </View>
          <Estlist/>
          
          <View style={{alignItems:'center'}}>
          </View>
      </View>
    );
}