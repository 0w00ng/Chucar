import React from 'react';

import { View,TouchableOpacity,Text } from "react-native";

import { WebView } from 'react-native-webview';
import s from '../style'

import axios from 'axios';

 

// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

 

const KakaoLogin = ({ navigation }) => {

 

    function LogInProgress(data) {

        // access code는 url에 붙어 장황하게 날아온다.

        // substringd으로 url에서 code=뒤를 substring하면 된다.

        const exp = "code=";

        var condition = data.indexOf(exp);

        if (condition != -1) {

            var request_code = data.substring(condition + exp.length);

            console.log("access code :: " + request_code);

            // 토큰값 받기

            requestToken(request_code);

        }

    };

 

    const requestToken = async (request_code) => {

        var returnValue = "none";

        var request_token_url = "https://kauth.kakao.com/oauth/token";

 

        axios({

            method: "post",

            url: request_token_url,

            params: {

                grant_type: 'authorization_code',

                client_id:  '9e7627ff0adc857af4fd5e69de0222e6',

                redirect_uri: 'http://34.64.207.117:3000/oauth',

                code: request_code,

                clientSecret: '9F00S9wCb8X6cggmdqesUVTYoQeD41P4',

            },

        }).then(function (response) {

            returnValue = response.data.access_token;

 

        }).catch(function (error) {

            console.log('error', error);

        });

    };

 

    return (
        <View style={{ flex: 1,backgroundColor:'white'}}>

            <WebView

                originWhitelist={['*']}

                scalesPageToFit={false}

                source={{ uri: 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={id},&redirect_uri=http://34.64.207.117:3000/oauth'}}

                injectedJavaScript={runFirst}

                javaScriptEnabled={true}

                onMessage={(event) => { LogInProgress(event.nativeEvent["url"]); }}

            // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달

            />
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('Root',{screen:'Main'})              
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
            </View>
        </View>
    );

};

 

export default KakaoLogin;