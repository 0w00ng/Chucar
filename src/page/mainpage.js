import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import storage from '../storage';
import axios from 'axios';
import s from '../style'

import edit from '../../img/edit.png';
import list from '../../img/list.png';
import documents from '../../img/documents.png';
import card from '../../img/card.png';
import signin from '../../img/usersignin.png';
import banner2 from '../../img/blog_banner_ver2.jpg';
import banner3 from '../../img/blog_banner_ver3.jpg';



export default function MainPageScreen ({ navigation }) {

  const[sliderImg,setSliderImg] = useState({
    currentIndex: 1,
    imageList: [banner2, banner3],
    length: 2,
  });
  
  (async() => {
    const check = await storage.getData('refresh_token');
    if(!check) navigation.replace('IntroPage');
    else {
      try {
        const newToken = await axios({
          method: 'GET',
          url:`${storage.chucar_url}/refresh`,
          headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
            refresh_token:check
          }
        }) 
        const access_token = newToken.data.access_token
        const refresh_token = newToken.data.refresh_token
        await storage.setData('access_token',access_token);
        if(refresh_token) {
          await storage.setData('refresh_token',refresh_token);
        }
      } catch(err) { //실패
        console.log(err);
      }
    }
  })();


  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>

      <View style={{flex: 1}}>
        {/* <SliderBox
          autoplay={true}  //자동 슬라이드 넘김
          circleLoop={true} //맨끝 슬라이드에서 다시 첫슬라이드로
          resizeMode="cover"  // 이미지 사이즈 조절값
          images={sliderImg.imageList} // 이미지 주소 리스트 
          dotColor="rgba(0,0,0,0)" // 아래 점 투명으로 안보이게 가림
          inactiveDotColor="rgba(0,0,0,0)" 
          ImageComponentStyle={{ width: '100%', height:'70%'}} // 이미지 Style 적용
          currentImageEmitter={(index) => { // 이미지가 바뀔때 어떤 동작을 할지 설정 
            setSliderImg({
              currentIndex: index + 1,
            });
          }}
        /> */}
        <View
          style={{
            position: 'absolute',
            bottom: '8%',
            right: 0,
            paddingTop: 4,
            paddingRight: 6,
            paddingBottom: 4,
            paddingLeft: 10,
            borderTopLeftRadius: 14,
            borderBottomLeftRadius: 14,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <Text style={{ fontSize: 10, color: '#ffffff' }}>
            {/* {sliderImg.currentIndex}/{sliderImg.imageList.length} */}
          </Text>
        </View>
      </View>

      <View style={{justifyContent:'center',flexDirection:'row'}}>

        <TouchableOpacity style={s.buttonbg2} 
        onPress={async () => {
          navigation.navigate('EstimatePage')   //견적신청 화면전환
        }}>
          <Image style={s.headericon} source={edit}/>
          <Text style={s.buttontxt2}>견적신청</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.buttonbg2}
        onPress={() => {
          navigation.navigate('EstlistPage')    //견적내역 화면전환
        }}>
          <Image style={s.headericon} source={list}/>
          <Text style={s.buttontxt2}>견적내역</Text>
        </TouchableOpacity>
      </View>

      <View style={{justifyContent:'center',flexDirection:'row'}}>
        <TouchableOpacity style={s.buttonbg2} 
        onPress={async () => {
          navigation.navigate('RegisterPage')   //딜러가입
        }}>
          <Image style={s.headericon} source={signin}/>
          <Text style={s.buttontxt2}>딜러등록</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.buttonbg2}
        onPress={() => {
          navigation.navigate("Root",{screen:'PaymentPage'})    //결제하기
        }}>
          <Image style={s.headericon} source={card}/>
          <Text style={s.buttontxt2}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}