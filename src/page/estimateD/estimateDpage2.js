import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import s from '../../style'
import DropDownPicker from 'react-native-dropdown-picker';

import storage from '../../storage';
import axios from 'axios';


export default function EstimatePageScreen2({ route, navigation }) {
  const {kind,img1,img2,img3,img4,img5,img6,img7,img8} = route.params;
  const [price, setPrice] = React.useState("");
  const [year, setYear] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [option, setOption] = React.useState("");

  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>                                                                                                                                                   
      <View>
        <Text style={s.title}>
            차량 정보를{'\n'}
            입력 해주세요
        </Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={s.label}>차량 가격</Text>
          <TextInput style={s.inputS}
            value={price}
            onChangeText={price => setPrice(price)}
            maxLength={20}
            keyboardType="number-pad"
          />
          <Text style={s.label2}>만원</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={s.label}>차량 연식</Text>
          <TextInput style={s.inputS}
            value={year}
            onChangeText={year => setYear(year)}
            maxLength={20}
            keyboardType="number-pad"
          />
          <Text style={s.label2}>년도</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={s.label}>주행거리</Text>
          <TextInput style={s.inputS}
            value={distance}
            onChangeText={distance => setDistance(distance)}
            maxLength={20}
            keyboardType="number-pad"
          />
          <Text style={s.label2}>km</Text>
        </View>
        {/* <View style={s.rowcontainer}>
          <TextInput style={s.inputL}
            label="필요옵션 ex) 기본옵션, 선루프, 열선시트"
            value={option}
            onChangeText={option => setOption(option)}
          />
        </View> */}
      </KeyboardAwareScrollView>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => navigation.navigate('EstimatePage3',{
          kind:kind,
          year:year,
          price:price,
          distance:distance,
          option:option,
          img1:img1,
          img2:img2,
          img3:img3,
          img4:img4,
          img5:img5,
          img6:img6,
          img7:img7,
          img8:img8,
        })}>
            <Text style={s.buttontxt3}>계속하기(2/3)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}