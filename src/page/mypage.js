// img
import rightA from '../../img/right.png'
import logout from '../../img/logout.png'
//
import axios from 'axios';
import storage from '../storage';
import s from '../style'
//
import * as React from 'react';
import { Button, View, Text,TouchableOpacity,Image, Alert } from 'react-native';
import { useState,useEffect } from 'react';

export default function MyPageScreen({route,navigation}) {
    const [id,setId] = useState();
    const [isDealer,setIsDealer] = useState();
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
            console.log(res.data[0].PRO_PROFILE)
            setProfile(res.data[0].PRO_PROFILE)
            console.log({profile})
          })
          .catch(function(err) {
            console.log(err)
          })
        } catch(err) {
            console.log(err);
        }

        try{
          const temp = await axios({
            method: 'GET',
            url:`${storage.chucar_url}/isdealer/${id}`,
          })
          setIsDealer(temp.data);
          console.log('isDealer : ' + temp.data);
        } 
        catch(err) {
          console.log(err);
        }

      })();    
    },[id,profile])

    return (
      <View>
        <View style={{
          backgroundColor:'white',width:'100%',height:150,justifyContent:'center',
          }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:50}}>
            {isDealer && profile
            ? <TouchableOpacity
              style={{width:100,height:100,borderWidth:0.2}}
              onPress={()=>{
                navigation.navigate('DealerProfilePage')
              }}>
                <Image style={{width:100,height:100}} resizeMode='stretch' resizeMethod='resize' source={{uri:`${profile}`}}/>
              </TouchableOpacity>
            : <></>}
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
            onPress={()=>{
              isDealer ? navigation.navigate('DealerInfoPage') : <></>
            }}>
              <Text style={s.label}>{userName} 님</Text>
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
          onPress={() => isDealer==2 ? navigation.navigate('UnPaymentPage') : Alert.alert('알림','이용권이 없습니다.')}
          >
            <Text style={{color:'#a0a0a0', fontSize:15}}>이용권 해지</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    
  }