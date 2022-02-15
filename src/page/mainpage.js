import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import banner_black from '../../img/banner_black.jpg'
import storage from '../storage';
import axios from 'axios';
import s from '../style'

export default function MainPageScreen ({ route, navigation }) {

    const user  = route.params;
    console.log('user : ' + user);
    
    async function checkLogin() {
      const check = await storage.getData('refresh_token');
      if(!check) navigation.navigate('Intro')

      const newToken = await axios({
        method: 'GET',
        url:'http://34.64.207.117:3000/refresh',
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
            refresh_token:check
        }
      })
      console.log(newToken.data)
      await storage.storeData('access_token',newToken.data.access_token); //token storing into local storage
      const refresh_token = newToken.data.refresh_token
      if(refresh_token) await storage.storeData('refresh_token',refresh_token);

      const users = await axios({
        method: 'GET',
        url:'http://34.64.207.117:3000/showInfo',
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `${newToken.data.access_token}`,
        }
      })
      await storage.storeData('id',users.data.id);
      await storage.storeData('nickname',users.data.nickname);
    }
    checkLogin()

    return (
      <View style={{flex:1,flexDirection:'column',alignItems:'stretch',backgroundColor:'white'}}>
        <View style={{flex:0.7}}>
            <Image                                      // 배너사진
            style={{width:'100%',height:'100%'}}
            source={banner_black}
            resizeMode='cover'
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={s.buttonbg1} 
            onPress={async () => {
                navigation.navigate('EstimatePage')   //견적신청 화면전환
            }}>
                <Text style={s.buttontxt1}>견적신청하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.buttonbg2}
            onPress={() => {
                navigation.navigate('EstlistPage')    //견적내역 화면전환
            }}>
                <Text style={s.buttontxt2}>견적내역확인</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={s.title}>최근 받은 견적</Text>
        </View>
        <View style={s.tradeview}>
            <View>
                <Text style={s.tradetxt}>보낸 견적 건수</Text>
                <Text style={s.tradetxt}>받은 견적 건수</Text>
                <Text style={s.tradetxt}>하루 방문자 수</Text>
            </View>
            <View>
                <Text style={s.tradetxt}>123</Text>
                <Text style={s.tradetxt}>123</Text>
                <Text style={s.tradetxt}>123</Text>
            </View>
        </View>
        
        <View style={s.Noticeview}>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={s.title}>공지사항</Text>
                <Text style={{textAlign:"right",margin:10}}>전체보기</Text>
            </View>
            <View style={{justifyContent:"flex-start"}}>
                <Text style={s.tradetxt}>[공지] 이 프로젝트는 김동규 회사 과제입니다.</Text>
                <Text style={s.tradetxt}>[공지] 어플수익의 90%는 김동규 소유예정.. </Text>
                <Text style={s.tradetxt}>[속보] 충격.. 권우철 친호주파 선언</Text>
                <Text style={s.tradetxt}>[속보] 권우철, "미개한 한국에서 살기 싫어" </Text>
                <Text style={s.tradetxt}>[공지] 김영웅, 독립운동가를 위해 기부</Text>
            </View>
        </View>
      </View>
    );
  }