import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity,Dimensions, Alert} from 'react-native';
import storage from '../storage';
import axios from 'axios';
import s from '../style'
import Swiper from 'react-native-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
const { width } = Dimensions.get('window')

import edit from '../../img/edit.png';
import list from '../../img/list.png';
import documents from '../../img/documents.png';
import card from '../../img/card.png';
import signin from '../../img/usersignin.png';
import banner1 from '../../img/banner_1.jpg';
import banner2 from '../../img/banner_2.jpg';
import banner3 from '../../img/banner_3.jpg';


export default function MainPageScreen ({ navigation }) {

  const [Img,setImg] = useState();
  const [isDealer,setIsDealer] = useState();
  const [id,setId] = useState();

  useEffect(()=>{
    DropDownPicker.addTranslation("KR", {
      PLACEHOLDER: "항목을 선택해주세요",
      SEARCH_PLACEHOLDER: "검색할 항목을 입력해주세요...",
      SELECTED_ITEMS_COUNT_TEXT: "",
      NOTHING_TO_SHOW: "아무 것도 없습니다 !"
    });
    DropDownPicker.setLanguage("KR");

    (async() => {
      const check = await storage.getData('refresh_token');
      if(!check) navigation.navigate('Root',{screen:'IntroPage'});
      else {
      setId(await storage.getData('id'));

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

        try{
          const temp = await axios({
            method: 'GET',
            url:`${storage.chucar_url}/isdealer/${id}`,
          })
          //setIsDealer(1);
          setIsDealer(temp.data);
          console.log('isDealer : ' + temp.data)
        } 
        catch(err) {
          console.log(err);
        }
      }
    })();
  },[id]);

  

  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>

      <View style={{flex:0.25}}>
        <Swiper
          style={styles.wrapper}
          height={170}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={banner1}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={banner2}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={banner3}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <TouchableOpacity style={s.buttonbg2} 
        onPress={() => {
          // isDealer
          // ? Alert.alert('알림','딜러는 견적신청이 불가합니다.')
          // : navigation.navigate('EstimatePage')   //견적신청 화면전환
          navigation.navigate('EstimatePage')   //견적신청 화면전환
        }}>
          <Image style={s.headericon} source={edit}/>
          <Text style={s.buttontxt2}>견적 신청하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.buttonbg2}
        onPress={() => {
          navigation.navigate('EstlistPage',{  //견적내역 화면전환
            isDealer:isDealer,
            id:id
          })    
        }}>
          <Image style={s.headericon} source={list}/>
          <Text style={s.buttontxt2}>견적신청서 내역</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.buttonbg2} 
          onPress={async () => {
            isDealer
            ? Alert.alert('알림','이미 딜러입니다.')
            : navigation.navigate("RegisterPage")
          }}>
          <Image style={s.headericon} source={signin}/>
          <Text style={s.buttontxt2}>딜러 회원가입</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={s.buttonbg2}
          onPress={() => {
            switch(isDealer){
              case 0: Alert.alert('알림','딜러만 이용권 결제할 수 있습니다.');break;
              case 1: navigation.navigate("Root",{screen:'PaymentPage'});break;
              case 2: Alert.alert('알림','이미 이용권을 보유중입니다.');break;
            }
          }}>
          <Image style={s.headericon} source={card}/>
          <Text style={s.buttontxt2}>딜러 이용권 결제</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}


const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}