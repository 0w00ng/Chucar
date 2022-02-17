import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Pencil from '../../img/pencilW.png';
import documents from '../../img/documents.png';
import storage from '../storage';
import axios from 'axios';
import s from '../style'

export default function MainPageScreen ({ route, navigation }) {

    const user  = route.params;
    console.log('user : ' + user);
    
    async function checkLogin() {
      const check = await storage.getData('refresh_token');
      if(!check) {
          navigation.navigate('IntroPage')
          return;
        }

      const newToken = await axios({
        method: 'GET',
        url:'http://34.64.207.117:3000/refresh',
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
            refresh_token:check
        }
      })
      .catch(function (err) { //실패
        console.log(err.data);
      })
      console.log(newToken.data)
      await storage.setData('access_token',newToken.data.access_token); //token storing into local storage
      const refresh_token = newToken.data.refresh_token
      if(refresh_token) await storage.setData('refresh_token',refresh_token);

      const users = await axios({
        method: 'GET',
        url:'http://34.64.207.117:3000/showInfo',
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `${newToken.data.access_token}`,
        }
      })
      .catch(function (err) { //실패
        console.log(err.data);
      })
      await storage.setData('id',users.data.id);
      await storage.setData('nickname',users.data.nickname);
    }
    checkLogin()

    return (
      <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
        <View style={{justifyContent:'center',flexDirection:'row'}}>
            <TouchableOpacity style={s.buttonbg1} 
            onPress={async () => {
                navigation.navigate('EstimatePage')   //견적신청 화면전환
            }}>
                <Image style={s.headericon} source={Pencil}/>
                <Text style={s.buttontxt1}>견적신청</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.buttonbg2}
            onPress={() => {
                navigation.navigate('EstlistPage')    //견적내역 화면전환
            }}>
                <Image style={s.headericon} source={documents}/>
                <Text style={s.buttontxt2}>견적내역</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }