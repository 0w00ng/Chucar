import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function RegisterPageScreen1({ navigation }) {
  const [id, setId] = React.useState("");                   //Page2로 보낼 변수 선언
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={s.title}>
            회원가입
        </Text>
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>아이디</Text>
        <TextInput style={s.inputS}
          value={id}
          onChangeText={id => setId(id)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>비밀번호</Text>
        <TextInput style={s.inputS}
          secureTextEntry={true}        // 비밀번호 마스킹
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>비밀번호 확인</Text>
        <TextInput style={s.inputS}
          secureTextEntry={true}
          value={password2}
          onChangeText={password2 => setPassword2(password2)}
        />
      </View>
      <View style={{alignItems:'center',margin:20}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => {
          if(password===password2) {navigation.navigate('RegisterPage2',{   // Page2로 화면전환
          id:id,                                                            // Page2로 정보송신
          password:password
        })} else alert('비밀번호가 다릅니다.')
        }}>
            <Text style={s.buttontxt3}> 다음으로 (1/2)</Text>
        </TouchableOpacity>
      </View>
  </View>
    );
}