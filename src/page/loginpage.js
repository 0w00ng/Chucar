import React from 'react';
import s from '../style'
import { View,TouchableOpacity,Text } from "react-native";
import storage from '../storage';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import qs from 'qs'

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

export default function KakaoLogin ({ navigation }){

  navigation.setOptions({
    headerShown: false,
    swipeEnabled:false
  })

  self.onmessage = (event) => {
    console.log(`${event.url}`);
  };

  const LogInProgress = async (data) => {
    try{
      // Alert.alert(data);
      console.log('lgp')
      console.log(data)
      // access code는 url에 붙어 장황하게 날아온다.
      // substringd으로 url에서 code=뒤를 substring하면 된다.
      const exp = "code=";
      var condition = data.indexOf(exp);
      if (condition != -1) {
        var request_code = data.substring(condition + exp.length);
        console.log("access code :: " + request_code);
        // 토큰값 받기 함수 : 인가코드를 넘겨줌
        await requestToken(request_code);
      } else {
      console.log('인가코드를 받지 못했습니다.');
      }
    } catch(err){
        console.log(err.data)
      }
  };

  const requestToken = async (request_code) => { //토큰신청
    console.log('requesttoken')
        var request_token_url = "https://kauth.kakao.com/oauth/token";
    try{
      token = await axios({
        method: 'POST',
        url: request_token_url,
        headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}, 
          data:qs.stringify({
            grant_type: 'authorization_code',//특정 스트링
            client_id:'9e7627ff0adc857af4fd5e69de0222e6',
            redirectUri:'http://34.64.207.117:3000/oauth',
            code:request_code,
            client_secret:'9F00S9wCb8X6cggmdqesUVTYoQeD41P4'
          })//객체를 string 으로 변환
        })
          const storeToken = {
            access_token:token.data.access_token,
            refresh_token:token.data.refresh_token,
            expires_in:token.data.expires_in
          }
            await storage.storeData(storeToken); //token storing into local storage
            const chutoken =  await storage.getData(); //token getting from local storage
            //...
            console.log('access_token : ' + chutoken.access_token); // access token 만 출력해보기
            console.log('refresh_token : ' + chutoken.refresh_token);
            console.log('expires_in : ' + chutoken.expires_in); // 만료까지 남은 시간(초)임 나중에 백엔드로 토큰 보내는 함수마다 항상 뽑아서 확인하기

            axios.get(`http://34.64.207.117:3000/showInfo`, {
                headers:{
                    Authorization: `${chutoken.access_token}`,
                    'content-type':'application/x-www-form-urlencoded;charset=utf-8'
                }
            })
            .then(function (res) { //성공
                console.log('res.data:' + res.data);
                navigation.navigate('Root',{
                    screen:'Main',
                    user:res.data
                });
            })
            .catch(function (err) { //실패
                console.log(err.data);
            })
            
    }catch(err){
      console.log('로그인에 실패했습니다.' + err);
      //res.json(err.data);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{ uri: 'https://kauth.kakao.com/oauth/authorize?client_id=9e7627ff0adc857af4fd5e69de0222e6&redirect_uri=http://34.64.207.117:3000/oauth&response_type=code&prompt=login'}}            
        injectedJavaScript={runFirst}
          javaScriptEnabled={true}
          onMessage={(event) => {LogInProgress(event.nativeEvent.url); }}
          // onMessage={(event) => {onmessage(event.nativeEvent); }} //마지막하던거
          // onMessage= {this.onMessage}          
          // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};