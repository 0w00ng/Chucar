import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen4({ route, navigation }) {
  const {kind,model,price,distance,option} = route.params;
  const [title, setTitle] = React.useState("");
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
              label="요청서 제목"
              value={title}
              onChangeText={title => setTitle(title)}
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
                height:400
              }}
              multiline
              maxLength={500}
              label="요청서 내용"
              value={comment}
              onChangeText={comment => setComment(comment)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage4',{
              kind:kind,
              model:model,
              price:price,
              distance:distance,
              option:option,
              title:title,
              comment:comment,
            })}>
                <Text style={s.buttontxt3}>계속하기(3/3)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}