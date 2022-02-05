import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'

export default function LoginPageScreen({ navigation }) {
  const [ID, setID] = React.useState("");
  const [password, setPassword] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                로그인
            </Text>
          </View>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="아이디"
              value={ID}
              onChangeText={ID => setID(ID)}
            />
          </View>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="비밀번호"
              secureTextEntry={true}        // 비밀번호 마스킹 
              value={password} 
              onChangeText={password => setPassword(password)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={s.buttontxt3}>로그인 하기</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={s.label}> 아직 계정이 없으신가요? </Text>
            <TouchableOpacity style={s.buttonbg1}
            onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={s.buttontxt1}>회원가입</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}