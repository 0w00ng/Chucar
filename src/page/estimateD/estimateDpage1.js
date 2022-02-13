import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen2({ route, navigation }) {
  const [model, setModel] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [option, setOption] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                견적차량 정보를{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="차량 모델"
              value={model}
              onChangeText={model => setModel(model)}
            />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>희망 가격</Text>
            <TextInput style={s.inputS}
              value={price}
              onChangeText={price => setPrice(price)}
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
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="필요옵션 ex) 기본옵션, 선루프, 열선시트"
              value={option}
              onChangeText={option => setOption(option)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage2',{
              model:model,
              price:price,
              distance:distance,
              option:option
            })}>
                <Text style={s.buttontxt3}>계속하기(1/3)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}