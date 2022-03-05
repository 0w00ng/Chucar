import React, { useState } from "react";
import { View, Text,TouchableOpacity, KeyboardAvoidingView,Dimensions,Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width } = Dimensions.get('window')

import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen4({ route, navigation }) {
  const {price,distance,option,year,img1,img2,img3,img4,img5,img6,img7,img8} = route.params;
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
          <KeyboardAwareScrollView>
            <View style={s.rowcontainer}>
              <TextInput style={s.inputL}
                    label="견적서 제목"
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
            <View style={{alignItems:'center'}}>
              <TextInput 
                style={{
                  borderColor:'navy',
                  borderWidth:2,
                  backgroundColor: 'white',
                  fontSize: 20,
                  width:'90%',
                  height:400,
                }}
                multiline
                maxLength={500}
                label="견적서 내용"
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
            <TouchableOpacity 
            style={s.buttonbg3}
            onPress={() => {
              title&&comment 
              ? navigation.navigate('EstimatePage4',{
                price:price,
                distance:distance,
                option:option,
                comment:comment,
                title:title,
                year:year,
                img1:img1,
                img2:img2,
                img3:img3,
                img4:img4,
                img5:img5,
                img6:img6,
                img7:img7,
                img8:img8,
              })
              : Alert.alert('알림','제목과 내용을 입력해주세요')
            }}>
              <Text style={s.buttontxt3}>완료(3/3)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}