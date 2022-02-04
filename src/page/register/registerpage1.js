import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function RegisterPageScreen1({ navigation }) {
  const [ID, setID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [grade, setGrade] = React.useState("");

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
          value={ID}
          onChangeText={ID => setID(ID)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>비밀번호</Text>
        <TextInput style={s.inputS}
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={s.rowcontainer}>
        <Text style={s.label}>비밀번호 확인</Text>
        <TextInput style={s.inputS}
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={{alignItems:'center',margin:20}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => navigation.navigate('RegisterPage2')}>
            <Text style={s.buttontxt3}> 다음으로 (1/2)</Text>
        </TouchableOpacity>
      </View>
  </View>
    );
}