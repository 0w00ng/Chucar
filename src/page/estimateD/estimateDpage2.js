import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen4({ route, navigation }) {
  const {model,price,distance,option} = route.params;
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
            <Text>사진</Text>
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
            <TouchableOpacity 
            style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage3',{
              model:model,
              price:price,
              distance:distance,
              option:option,
              comment:comment,
            })}>
              <Text style={s.buttontxt3}>계속하기(2/3)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}