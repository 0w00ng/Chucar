// img
import rightA from '../../img/right.png'
//
import storage from '../storage';
import s from '../style'
//
import * as React from 'react';
import { Button, View, Text,TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';

export default function MyPageScreen({navigation }) {
    const userid = 1//route.params.userid ? route.params.userid : 'null';
    const [userName,setUserName] = useState('null');

    (async () => {
      setUserName(await storage.getData('nickname'));
    })();

    return (
      <View>
        <View style={{
          backgroundColor:'white',width:'100%',height:150,justifyContent:'center',
          borderColor:'white',
          borderWidth:3
          }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:50}}>
            <Image source={require('../../img/Default_Profile.png')}/>
            <Text style={s.label}>{userName} 고객님</Text>
            <Image style={{width:30,height:30}} source={rightA} />
          </TouchableOpacity>
        </View>
        <View style={{
          width:'100%',height:70,justifyContent:'center',
          borderColor:'#a0a0a0',
          borderWidth:3,
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={() => navigation.navigate('RegisterPage')}
          >
            <Text style={s.label}>딜러 회원가입</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width:'100%',height:70,justifyContent:'center',
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={() => navigation.navigate('LogoutPage')}
          >
            <Text style={{margin:10, color:'#a0a0a0', fontSize:15}}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    
  }