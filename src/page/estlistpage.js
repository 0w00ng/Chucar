import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'
import DefaultUser from '../../img/Default_Profile.png'
import EstlistViewPageScreen from "./estlistVpage";
import axios from "axios";


export default function EstlistPageScreen({ navigation }) {
  navigation.setOptions({ headerShown: true });      // 헤더바 숨기기

  
  // const DATA = async() => {
  //   axios.get(`http://34.64.207.117:3000/contracts`)
  //   .then(function (res) { //성공
  //     return res.data;
  //   })
  //   .catch(function (err) { //실패
  //       console.log(err.data);
  //   })
  // }
  const DATA = async() => {
    return axios({
        method: 'GET',
        url: 'http://34.64.207.117:3000/contracts'
    })
    //console.log(getData.data);
}
  console.log(DATA());
  const empty = true;
  const Item = ({ title,model,price,kind }) => (
    <TouchableOpacity 
      style={s.estlistContainer}
      onPress={()=>navigation.navigate('EstlistVPage',{
        title:title,
        model:model,
        price:price,
        kind:kind
      })}
    >
        <Text style={s.estlistTitle}>{title}</Text>
        <View style={s.estlistTextV}>
          <Text style={s.estlistText}>{'차종 : ' + model} </Text>
          <Text style={s.estlistText}>{'희망가격 : ' + price}</Text>
        </View>
        <Text>{kind}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item 
    CT_TITLE={item.CT_TITLE} 
    //model={item.model}
    CT_PRICE = {item.CT_PRICE}
    CT_KIND ={item.CT_KIND}
    />
  );
    return (
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
          <View style={{
            alignItems:'center',
            backgroundColor:'white',
            borderWidth:5,
            borderColor:'navy',
            }}>
            <Text style={s.title}>
                견적 요청 내역
            </Text>
          </View>
          <View style={{display:empty ? 'none' : 'flex'}}>
            <Image source={estlist_empty}/>
          </View>
          
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          
          <View style={{alignItems:'center'}}>
          </View>
      </View>
    );
}