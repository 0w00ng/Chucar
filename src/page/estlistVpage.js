import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import storage from '../storage';
import axios from "axios";
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'


export default function EstlistViewPageScreen({ route, navigation }) {
  const {CT_TITLE,CT_MODEL,CT_PRICE,CT_CONTENT,CT_KIND,CT_KEY} = route.params;
 
  const [checkState, setCheckState] = useState(false);
  const [DATA,setDATA] = useState();
  const [listData,setListData] = useState();
  const [id,setId] = useState();
  const [empty,setEmpty] = useState();
  const IsDealer = false;

  async function CheckLogin() {
    setId(await storage.getData('id'));
    const url = 
    setListData(await axios({
      method: 'GET',
      url:`http://34.64.207.117:3000/reply/${CT_KEY}`,
      headers:{
          'content-type':'application/x-www-form-urlencoded;charset=utf-8',
      }
    }))
    //console.log(listData.data)
    setDATA(await listData.data);
    console.log(DATA);
  }  
  if(!DATA) CheckLogin();

  const Item = ({ CR_MODEL,CR_PRICE,CR_REPLY,CR_DISTANCE,phone,CR_NICKNAME }) => (
    <TouchableOpacity 
      style={s.estlistContainer}
      onPress={()=>alert('ㅋㅋ')}
    >
        <View style={s.estlistTextV}>
          <Text style={{
            color:'navy',
            fontWeight:'bold',
            marginRight:20,
          }}>{'차종 : ' + CR_MODEL} </Text>
          <Text style={{
            color:'red',
            fontWeight:'bold'
            }}>{`가격 : ${CR_PRICE} 만원`}</Text>
        </View>
        <Text>{CR_REPLY}</Text>
      <View style={{flexDirection:'row'}}>
        <Image source={require('../../img/Default_Profile.png')}/>  
        <View style={{flexDirection:'column',justifyContent:'space-evenly',margin:10}}>
          <Text style={s.estlistText}>{CR_NICKNAME + ' 딜러'}</Text>
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
    CR_MODEL={item.CR_MODEL}
    CR_PRICE = {item.CR_PRICE}
    CR_REPLY ={item.CR_REPLY}
    CR_DISTANCE ={item.CR_DISTANCE}
    CR_NICKNAME ={item.CR_NICKNAME}
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
              <Text style={s.estlistText}>{'희망가격 : ' + CT_PRICE + ' 만원'}</Text>
            </View>
           <Text>{'' + CT_CONTENT}</Text>
           <View style={{alignItems:'center'}}>
            <TouchableOpacity 
            style={s.buttonbg3}
            onPress={()=>navigation.navigate('EstimateDPage',{
              cr_key:CT_KEY
            })
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
            />
          </View>
      </View>
    );
}