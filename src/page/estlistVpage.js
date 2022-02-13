import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'
import DefaultUser from '../../img/Default_Profile.png'


export default function EstlistViewPageScreen({ route, navigation }) {
  navigation.setOptions({ headerShown: true });      // 헤더바 숨기기
  const {title,model,price,comment,deadline} = route.params;
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
  const Item = ({ name,model,price,comment,phone }) => (
    <TouchableOpacity 
      style={s.estlistContainer}
      onPress={()=>alert('ㅋㅋ')}
    >
        <View style={s.estlistTextV}>
          <Text style={{
            color:'navy',
            fontWeight:'bold',
            marginRight:20,
          }}>{'차종 : ' + model} </Text>
          <Text style={{
            color:'red',
            fontWeight:'bold'
            }}>{'가격 : ' + price}</Text>
        </View>
        <Text>{comment}</Text>
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
    name={item.name}
    model={item.model}
    price={item.price}
    comment={item.comment}
    phone={item.phone}
    />
  );


    return (
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
          <View style={{alignItems:'center'}}>
            <Text style={s.titleS}>
                {title}
            </Text>
          </View>
          <View style={s.estlistVContainer}>
            <View style={s.estlistTextV}>
              <Text style={s.estlistText}>{'차종 : ' + model} </Text>
              <Text style={s.estlistText}>{'희망가격 : ' + price}</Text>
            </View>
           <Text>{comment}</Text>
           <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}>
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