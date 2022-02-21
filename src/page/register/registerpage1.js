import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function RegisterPageScreen2({route,navigation }) {
  const [nickname, setNickname] = React.useState("");     // Page2로 보낼 변수 선언
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
          value={nickname}
          onChangeText={nickname => setNickname(nickname)}
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
        onPress={() => {navigation.navigate('RegisterPage2',{       // Page3로 화면전환 및 정보송신
          nickname:nickname,
          email:email,
          phone:phone
        })
        }}>
            <Text style={s.buttontxt3}>다음으로(1/2)</Text>
        </TouchableOpacity>
      </View>
  </View>
    );
}