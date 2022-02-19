// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
// img
import Titlelogo from '../../img/chucar-logoN1.png';
import kakaoTalk from '../../img/kakao-talk.png';

import storage from '../storage'
import axios from 'axios';

export default function IntroScreenPage({ navigation }) {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'space-evenly',
      }}>
      <Image
        source={Titlelogo} />
      <TouchableOpacity
      style={{
        borderRadius:100,
        backgroundColor:'#FFEB3B',
        width:310,
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      }}
      onPress={()=>navigation.navigate('LoginPage')}
      >
        <Image 
          source={kakaoTalk}
          style={styles.introKImageStyle}
          resizeMode='cover'
        />
        <Text
        style={{
          fontWeight:'bold',
          fontSize:20,
          marginRight:10,
        }}
        > 카카오계정으로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introKImageStyle: {
    width: 60,
    height: 60,
    marginRight:10,
  },
});