import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import storage from '../storage';
import axios from 'axios';
import s from '../style'
import { cos } from "react-native-reanimated";

export default function RegisterPageScreen2({route,navigation }) {
  const [dealer, setDealer] = useState();     // Page2로 보낼 변수 선언
  const [company, setCompany] = useState("");     // Page2로 보낼 변수 선언
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  useEffect(()=>{
    (async()=>{
      try {
        setId(await storage.getData('id'));
        const access_token = await storage.getData('access_token');
        await axios({
          method: 'get',
          url: `${storage.chucar_url}/pro/${id}`,
          headers:{
            Authorization: `${access_token}`,
            'Content-type':'application/x-www-form-urlencoded;utf-8'
          }
        })
        .then(function(res) {
          console.log(res.data[0])
          setCompany(res.data[0].PRO_COMPANY)
          setEmail(res.data[0].PRO_EMAIL)
          setPhone(res.data[0].PRO_PHONE)
        })
        .catch(function(err) {
          console.log(err)
        })
      } catch(err) {
          console.log(err);
      }
    })();    
  },[id])

  const setPro = async()=> {
    await axios({    //DB 전송
      method:"put",
      url:`${storage.chucar_url}/setpro`, 
      data : {
        id:`${id}`,
        company:company,
        email:email,
        phone:phone,
        name:``,
        idcard:'',
        card:0,
        prv1:0,
        prv2:0,
        prv3:0,
      }
    })
    .then(function (res) {
      navigation.popToTop();
      Alert.alert('알림','수정이 완료되었습니다.')
    })
    .catch(function (err) {
        console.log(err);
    })
  }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={s.title}>
            딜러 정보수정
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
        onPress={() => {setPro()}}>
            <Text style={s.buttontxt3}>수정하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}