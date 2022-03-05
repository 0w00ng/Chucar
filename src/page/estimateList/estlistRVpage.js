import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList,Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import ImageModal from 'react-native-image-modal';
import storage from '../../storage';
import axios from "axios";
import s from '../../style';
const { width } = Dimensions.get('window')

export default function EstlistReplyViewPageScreen({ route, navigation }) {
  const { CR_MODEL,CR_PRICE,CR_COMMENT,CR_DISTANCE,phone,CR_NICKNAME,CR_TITLE,CR_OPTION,CR_YEAR,PRO_PROFILE,PRO_COMPANY,PRO_PHONE,PRO_NAME } = route.params;
  const { CR_CARIMG0,CR_CARIMG1,CR_CARIMG2,CR_CARIMG3,CR_CARIMG4,CR_CARIMG5,CR_CARIMG6,CR_CARIMG7 } = route.params;
  const CR_CARIMG = [CR_CARIMG0,CR_CARIMG1,CR_CARIMG2,CR_CARIMG3,CR_CARIMG4,CR_CARIMG5,CR_CARIMG6,CR_CARIMG7];

  for(img of CR_CARIMG) console.log(img);

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{alignItems:'center',backgroundColor:'white'}}>
        <Text style={s.titleS}>{CR_TITLE}</Text>
      </View>

      <View style={{flexDirection:'row',borderWidth:1.5}}>
        <Image style={{width:100,height:100,borderWidth:0.2}} resizeMethod='resize' source={{uri:`${PRO_PROFILE}`}}/> 
        <View style={{flexDirection:'column',justifyContent:'space-evenly',margin:10}}>
          <Text style={s.estlistText}>[{PRO_COMPANY}]</Text>
          <Text style={s.estlistText}>{PRO_NAME + ' 딜러'}</Text>
          <Text style={{
            color:'blue',
            fontWeight:'bold'
          }}>{`연락처 : ${PRO_PHONE}`}
          </Text>
        </View>
      </View>
      <View style={{flex:0.4}}>
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
                backgroundColor: 'navy',
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
          {CR_CARIMG.map ((img)=>(
          img
          ? <View
              style={styles.slide}
            >
              <ImageModal
                swipeToDismiss={true}
                resizeMode="contain"
                resizeMethod="scale"
                imageBackgroundColor="#000000"
                style={styles.image}
                source={{
                  uri:img,
                }}
              />
            </View>
          : ''
          ))}
        </Swiper>
      </View>

      <Text style={{
        color:'orange',
        fontWeight:'bold',
        margin:5
        }}>{`가격 : ${CR_PRICE} 만원`}
      </Text>

      <Text style={{
        color:'green',
        fontWeight:'bold',
        margin:5
      }}>{`주행거리 : ${CR_DISTANCE} km`}
      </Text>

      <Text style={{
        color:'green',
        fontWeight:'bold',
        margin:5
      }}>{`연식 : ${CR_YEAR} km`}
      </Text>

      <Text style={{
        color:'blue',
        fontWeight:'bold',
        margin:5
      }}>
        옵션 : {CR_OPTION}
      </Text>

      <Text style={{margin:5}}>
        소개 : {CR_COMMENT}
      </Text>
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