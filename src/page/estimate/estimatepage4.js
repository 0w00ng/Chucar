import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen4({ navigation }) {
  const [menufact, setMenufact] = React.useState("");
  const [model, setModel] = React.useState("");
  const [grade, setGrade] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                견적 추가사항을{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="필요옵션 ex) 기본옵션, 선루프, 열선시트"
              value={menufact}
              onChangeText={menufact => setMenufact(menufact)}
            />
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'center',
          }}>
            <TextInput 
              style={{
                borderColor:'navy',
                borderWidth:2,
                backgroundColor: 'white',
                fontSize: 20,
                width:'90%',
                height:300
              }}
              multiline
              maxLength={500}
              label="딜러에게 하고싶은 말"
              value={model}
              onChangeText={model => setModel(model)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage5')}>
                <Text style={s.buttontxt3}>계속하기(4/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}