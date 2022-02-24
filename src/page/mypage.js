// img
import rightA from '../../img/right.png'
import logout from '../../img/logout.png'
//
import axios from 'axios';
import storage from '../storage';
import s from '../style'
//
import * as React from 'react';
import { Button, View, Text,TouchableOpacity,Image } from 'react-native';
import { useState,useEffect } from 'react';

export default function MyPageScreen({navigation}) {
    const [id,setId] = useState('null');
    const [userName,setUserName] = useState('null');
    const [profile,setProfile] = useState('null');

    useEffect(()=>{
      (async()=>{
        try {
          setId(await storage.getData('id'));
          setUserName(await storage.getData('name'));
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
            setProfile(res.data[0].PRO_PROFILE)
          })
          .catch(function(err) {
            console.log(err)
          })
        } catch(err) {
            console.log(err);
        }
      })();    
    },[id])

    return (
      <View>
        <View style={{
          backgroundColor:'white',width:'100%',height:150,justifyContent:'center',
          borderColor:'white',
          borderWidth:3
          }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:50}}>
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate('DealerProfilePage')
            }}>
              <Image style={{width:100,height:100,borderWidth:0.2}} source={{url:`${profile}`}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
            onPress={()=>{
              navigation.navigate('DealerInfoPage')
            }}>
              <Text style={s.label}>{userName} 고객님</Text>
              <Image style={{width:30,height:30}} source={rightA} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{
          width:'100%',height:70,justifyContent:'center',
          backgroundColor:'white',
          borderColor:'#a0a0a0',
          borderWidth:3,
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={{}}
          >
            <Text style={s.label}>---</Text>
          </TouchableOpacity>
        </View> */}
        <View style={{
          width:'100%',
          margin:10,
        }}>
          <TouchableOpacity style={{marginTop:15}}
          onPress={() => navigation.navigate('LogoutPage')}
          >
            <Text style={{color:'#a0a0a0', fontSize:15}}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:15}}
          onPress={() => navigation.navigate('UnPaymentPage')}
          >
            <Text style={{color:'#a0a0a0', fontSize:15}}>이용권 취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    
  }