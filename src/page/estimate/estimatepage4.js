import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen4({ route, navigation }) {
  const {kind,menufact,model,grade,price,mprice,distance} = route.params;
  const [option, setOption] = React.useState("");
  const [comment, setComment] = React.useState("");

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
              value={option}
              onChangeText={option => setOption(option)}
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
              value={comment}
              onChangeText={comment => setComment(comment)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage5',{
              kind:kind,
              menufact:menufact,
              model:model,
              grade:grade,
              price:price,
              mprice:mprice,
              distance:distance,
              option:option,
              comment:comment
            })}>
                <Text style={s.buttontxt3}>계속하기(4/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}