import React, { useState } from "react";
import { View, Text,TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen4({ route, navigation }) {
  const {kind,year,brand,model,price,distance,option} = route.params;
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <View>
          <Text style={s.title}>
              견적 추가사항을{'\n'}
              입력 해주세요
          </Text>
        </View>
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor:'white'}}>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="요청서 제목"
              value={title}
              onChangeText={title => setTitle(title)}
            />
          </View>
          <Text
          style={{
            marginLeft:30,
            marginBottom:10,
            color:'red',
            display: title ? 'none' : 'flex'
          }}
          >* 제목을 입력해주세요 !</Text>
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
          <Text
          style={{
            marginLeft:30,
            marginBottom:10,
            color:'red',
            display: comment ? 'none' : 'flex'
          }}
          >* 내용을 입력해주세요 !</Text>
        </KeyboardAwareScrollView>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={s.buttonbg3}
          onPress={() => {
            title&&comment 
            ? navigation.navigate('EstimatePage4',{
                kind:kind,
                year:year,
                brand:brand,
                model:model,
                price:price,
                distance:distance,
                option:option,
                title:title,
                comment:comment,
              })
            : Alert.alert('알림','제목과 내용을 입력해주세요')
          }}>
              <Text style={s.buttontxt3}>완료(3/3)</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}