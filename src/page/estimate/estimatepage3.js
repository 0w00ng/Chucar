import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen3({ route,navigation }) {
  const {kind,menufact,model,grade} = route.params;
  const [price, setPrice] = React.useState("");
  const [mprice, setMprice] = React.useState("");
  const [distance, setDistance] = React.useState("");
    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                차량 조건을{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>차량 가격</Text>
            <TextInput style={s.inputS}
              value={price}
              onChangeText={price => setPrice(price)}
            />
            <Text style={s.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>월 납입금</Text>
            <TextInput style={s.inputS}
              value={mprice}
              onChangeText={mprice => setMprice(mprice)}
            />
            <Text style={s.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>주행거리</Text>
            <TextInput style={s.inputS}
              value={distance}
              onChangeText={distance => setDistance(distance)}
            />
            <Text style={s.label2}>km</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage4',{
              kind:kind,
              menufact:menufact,
              model:model,
              grade:grade,
              price:price,
              mprice:mprice,
              distance:distance
            })}>
                <Text style={s.buttontxt3}>계속하기(3/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}