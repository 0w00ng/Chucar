// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useState} from 'react';
// img
import Menubar from '../../img/menubar.png';
import Titlelogo from '../../img/chucar-logoN1.png';
import kakaoTalk from '../../img/kakao-talk.png';
// lib
import { SafeAreaView,StyleSheet,View,Text,Image,Button,TouchableOpacity } from 'react-native';
import { exp } from 'react-native-reanimated';

export default function IntroScreenPage({ navigation }) {

  navigation.setOptions({
    headerShown: false,
    swipeEnabled:false,
    gestureEnabled:false
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
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