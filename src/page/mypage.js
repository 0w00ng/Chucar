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
    const [isDealer,setIsDealer] = useState(0);
    const [userName,setUserName] = useState('');
    const [profile,setProfile] = useState('null');
    const [payDate,setPayDate] = useState('');

    useEffect(()=>{
      (async()=>{
        setId(await storage.getData('id'));
        setUserName(await storage.getData('name'));
        const access_token = await storage.getData('access_token');

        try{
          await axios({
            method: 'GET',
            url:`${storage.chucar_url}/isdealer/${id}`,
          })
          .then(function(res) {
            setIsDealer(res.data);
            console.log('isDealer : ' + res.data);
          })
        } 
        catch(err) {
          console.log(err);
        }
        
        if(isDealer) {
          try{
            await axios({
              method: 'GET',
              url:`${storage.chucar_url}/pro/${id}`,
              headers:{
                Authorization: `${access_token}`,
                'Content-type':'application/x-www-form-urlencoded;utf-8'
              }
            })
            .then(function(res) {
              const result = res.data[0];
              //profile
              console.log(result.PRO_PROFILE)
              setProfile(res.data[0].PRO_PROFILE)
              console.log({profile})
  
              //date
              const date = new Date(result.PRO_END * 1000);
              const yyyy = (date.getFullYear())
              const mm = (date.getMonth()+1)
              const dd = (date.getDate())
  
              if(result.PRO_END){
                setPayDate(`~ ${yyyy}년 ${mm}월 ${dd}일 까지`);
                console.log({date})
              }
  
              //name
              setUserName(result.PRO_NAME)
             
            })
          } 
          catch(err) {
            console.log(err);
          }
        }

      })();    
    },[id,isDealer])

    return (
      <View>
        <View style={{
          backgroundColor:'white',width:'100%',height:150,justifyContent:'center',
          }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',margin:50}}>
            {isDealer
            ? <TouchableOpacity
              style={{width:100,height:100}}
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
            <Text style={{
              color:'#a0a0a0',
              fontSize:12,
              display: isDealer==2 ? 'flex' : 'none'
            }}>이용권 기한 : {payDate}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ); 
  }