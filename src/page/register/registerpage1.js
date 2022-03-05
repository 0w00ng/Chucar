import React, { useState } from "react";
import { View, Text,TouchableOpacity,Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function RegisterPageScreen2({route,navigation }) {
  const [company, setCompany] = React.useState("");     // Page2로 보낼 변수 선언
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={s.title}>
            회원가입
        </Text>
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>상사명</Text>
        <TextInput style={s.inputS}
          value={company}
          onChangeText={company => setCompany(company)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>이름</Text>
        <TextInput style={s.inputS}
          value={name}
          onChangeText={name => setName(name)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>이메일</Text>
        <TextInput style={s.inputS}
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>핸드폰 번호</Text>
        <TextInput style={s.inputS}
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
      </View>
      <View style={{alignItems:'center',margin:20}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => {
          company&&name&&email&&phone
          ? navigation.navigate('RegisterPage2',{       // Page3로 화면전환 및 정보송신
            company:company,
            name:name,
            email:email,
            phone:phone
          })
          : Alert.alert('알림','항목을 입력해주세요')
        }}>
            <Text style={s.buttontxt3}>다음으로(1/2)</Text>
        </TouchableOpacity>
      </View>
  </View>
    );
}