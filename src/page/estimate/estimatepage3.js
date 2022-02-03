import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen3({ navigation }) {
  const [menufact, setMenufact] = React.useState("");
  const [model, setModel] = React.useState("");
  const [grade, setGrade] = React.useState("");

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
              value={menufact}
              onChangeText={menufact => setMenufact(menufact)}
            />
            <Text style={s.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>월 납입금</Text>
            <TextInput style={s.inputS}
              value={model}
              onChangeText={model => setModel(model)}
            />
            <Text style={s.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>주행거리</Text>
            <TextInput style={s.inputS}
              value={grade}
              onChangeText={grade => setGrade(grade)}
            />
            <Text style={s.label2}>km</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage4')}>
                <Text style={s.buttontxt3}>계속하기(3/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}