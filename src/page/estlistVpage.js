import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'
import DefaultUser from '../../img/Default_Profile.png'


export default function EstlistViewPageScreen({ route, navigation }) {
  const {CT_TITLE,CT_MODEL,CT_PRICE,CT_CONTENT,CT_KIND} = route.params;
  const DATA = [
    {
      id: '1',
      name:'영우동',
      model:'BMW 320d',
      price:'1200만원',
      comment:'내가 가오살려줄게 연락해',
      phone:'010-8443-8434'
    },
  ];
  const Item = ({ name,CT_MODEL,CT_PRICE,CT_CONTENT,phone }) => (
    <TouchableOpacity 
      style={s.estlistContainer}
      onPress={()=>alert('ㅋㅋ')}
    >
        <View style={s.estlistTextV}>
          <Text style={{
            color:'navy',
            fontWeight:'bold',
            marginRight:20,
          }}>{'차종 : ' + CT_MODEL} </Text>
          <Text style={{
            color:'red',
            fontWeight:'bold'
            }}>{'가격 : ' + CT_PRICE}</Text>
        </View>
        <Text>{CT_CONTENT}</Text>
      <View style={{flexDirection:'row'}}>
        <Image source={require('../../img/Default_Profile.png')}/>  
        <View style={{flexDirection:'column',justifyContent:'space-evenly',margin:10}}>
          <Text style={s.estlistText}>{name + ' 딜러'}</Text>
          <Text style={{
            color:'orange',
            fontWeight:'bold'
          }}>{'연락처 : '+ phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item 
    CT_TITLE={item.CT_TITLE} 
    CT_MODEL={item.CT_MODEL}
    CT_PRICE = {item.CT_PRICE}
    CT_KIND ={item.CT_KIND}
    CT_CONTENT ={item.CT_CONTENT}
    />
  );


    return (
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
          <View style={{alignItems:'center'}}>
            <Text style={s.titleS}>
                {CT_TITLE}
            </Text>
          </View>
          <View style={s.estlistVContainer}>
            <View style={s.estlistTextV}>
              <Text style={s.estlistText}>{'차종 : ' + CT_MODEL} </Text>
              <Text style={s.estlistText}>{'희망가격 : ' + CT_PRICE}</Text>
            </View>
           <Text>{'' + CT_CONTENT}</Text>
           <View style={{alignItems:'center'}}>
            <TouchableOpacity 
            style={s.buttonbg3}
            onPress={()=>navigation.navigate('EstimateDPage')
            }
            >
              <Text style={s.buttontxt2}>견적서 보내기</Text>
            </TouchableOpacity>
           </View>
          </View>
          <View style={{alignItems:'center'}}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
      </View>
    );
}