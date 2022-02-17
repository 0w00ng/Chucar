import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'
import DefaultUser from '../../img/Default_Profile.png'
import EstlistViewPageScreen from "./estlistVpage";
import axios from "axios";
import CheckBox from '@react-native-community/checkbox'
import storage from '../storage';


export default function EstlistPageScreen({ navigation }) {

  const [checkState, setCheckState] = useState(false);
  const [DATA,setDATA] = useState();
  const [listData,setListData] = useState();
  const [empty,setEmpty] = useState();
  const IsDealer = false;

  async function CheckLogin() {
    const id = await storage.getData('id');
    const url = 
    checkState ? (
      IsDealer ?
      `http://34.64.207.117:3000/contracts/pro/${id}`
      :
      `http://34.64.207.117:3000/contracts/${id}`
    )
    :
    'http://34.64.207.117:3000/contracts'

    setListData(await axios({
      method: 'GET',
      url:url,
      headers:{
          'content-type':'application/x-www-form-urlencoded;charset=utf-8',
      }
    }))
    
    //console.log(listData.data)
    setDATA(await listData.data);
    console.log(DATA);
  }  
  if(!DATA) CheckLogin();

  function CheckKind(kind) {
    switch(kind)
    {
      case 1: return "신차";
      case 2: return "중고";
      case 3: return "렌트";
      case 4: return "리스";
    }
  }

  const Item = ({ CT_TITLE,CT_MODEL,CT_PRICE,CT_KIND,CT_CONTENT }) => (
    <TouchableOpacity 
      style={s.estlistContainer}
      onPress={()=>navigation.navigate('EstlistVPage',{
        CT_TITLE:CT_TITLE,
        CT_MODEL:CT_MODEL,
        CT_PRICE:CT_PRICE,
        CT_KIND:CT_KIND,
        CT_CONTENT:CT_CONTENT,
      })}
    >
        <Text style={s.estlistTitle}>{CT_TITLE}</Text>
        <View style={s.estlistTextV}>
          <Text style={s.estlistText}>{'차종 : ' + CT_MODEL} </Text>
          <Text style={s.estlistText}>{'희망가격 : ' + CT_PRICE + '만원'}</Text>
        </View>
        <Text>{CheckKind(CT_KIND)}</Text>
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
        
        <TouchableOpacity
          style={{
            flexDirection:'row',
            alignItems:'center',
            margin:10
          }}
          onPress={()=>{
            setCheckState(checkState ? 0:1)
            CheckLogin()
          }}
        >
          <CheckBox
            value={checkState}
            style={{width:25,height:25}}
            />
          <Text style={{
            fontSize: 15,
            margin: 10,
          }}>내가 보낸 견적{IsDealer ? "" : "요청"}서</Text>
        </TouchableOpacity>

        {/* <View style={{display:empty ? 'flex' : 'none'}}>    
          <Image source={estlist_empty}/>                   
        </View> */}
        
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
}