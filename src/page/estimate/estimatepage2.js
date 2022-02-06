import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen2({ route, navigation }) {
  const {kind} = route.params;
  const [menufact, setMenufact] = React.useState("");
  const [model, setModel] = React.useState("");
  const [grade, setGrade] = React.useState("");

  console.log(kind)

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                견적차량 정보를{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={s.rowcontainer}>
            <Text style={s.label}>제조사</Text>
            <TextInput style={s.inputS}
              value={menufact}
              onChangeText={menufact => setMenufact(menufact)}
            />
          </View>
          <View style={s.rowcontainer}>
            <Text style={s.label}>모델</Text>
            <TextInput style={s.inputS}
              value={model}
              onChangeText={model => setModel(model)}
            />
          </View>
          <View style={s.rowcontainer}>
            <Text style={s.label}>등급</Text>
            <TextInput style={s.inputS}
              value={grade}
              onChangeText={grade => setGrade(grade)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage3',{
              kind:kind,
              menufact:menufact,
              model:model,
              grade:grade
            })}>
                <Text style={s.buttontxt3}>계속하기(2/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}