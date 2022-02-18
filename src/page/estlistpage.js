import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity,Image,FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import axios from "axios";
import storage from '../storage';
import s from '../style'
//img

export default function EstlistPageScreen({ navigation }) {

  const [checkState, setCheckState] = useState(false);
  const [DATA,setDATA] = useState();
  const [id,setId] = useState();
  const [isDealer,setIsDealer] = useState();

  useEffect(()=>{
    let temp;
    (async ()=>{
      try{
        temp = await storage.getData('id');
        setId(temp);
        console.log('id : ' + id);

        temp = await axios({
          method: 'GET',
          url:`http://34.64.207.117:3000/isdealer/${id}`,
        })
        setIsDealer(temp.data);
        console.log('isDealer : ' + isDealer);
      } 
      catch(err) {
        console.log(err);
      }
    })();
  },[]);

  useEffect(()=>{
    (async ()=>{
      const url = 
        checkState
          ? isDealer
            ? `http://34.64.207.117:3000/contracts/pro/${id}`
            : `http://34.64.207.117:3000/contracts/${id}`
          : 'http://34.64.207.117:3000/contracts'

      try {
        const temp = await axios({
          method: 'GET',
          url:url,
          headers:{
              'content-type':'application/x-www-form-urlencoded;charset=utf-8',
          }
        })
        setDATA(temp.data);
      } catch(err) {console.log(err)}
    })();
  },[checkState]);


  function CheckKind(kind) {
    switch(kind)
    {
      case 1: return "신차";
      case 2: return "중고";
      case 3: return "렌트";
      case 4: return "리스";
    }
  };

  const Item = ({ CT_TITLE,CT_MODEL,CT_PRICE,CT_KIND,CT_CONTENT,CT_KEY }) => (
    <TouchableOpacity 
      style={s.estlistContainer}
      onPress={()=>navigation.navigate('EstlistVPage',{
        CT_TITLE:CT_TITLE,
        CT_MODEL:CT_MODEL,
        CT_PRICE:CT_PRICE,
        CT_KIND:CT_KIND,
        CT_CONTENT:CT_CONTENT,
        CT_KEY:CT_KEY,
      })}
    >
        <Text style={s.estlistTitle}>{CT_TITLE}</Text>
        <View style={s.estlistTextV}>
          <Text style={s.estlistText}>{'차종 : ' + CT_MODEL} </Text>
          <Text style={s.estlistText}>{'희망가격 : ' + CT_PRICE + ' 만원'}</Text>
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
    CT_KEY ={item.CT_KEY}
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
          }}
        >
          <CheckBox
            value={checkState}
            style={{width:25,height:25}}
            />
          <Text style={{
            fontSize: 15,
            margin: 10,
          }}>내가 보낸 견적{isDealer ? "" : "신청"}서</Text>
        </TouchableOpacity>
        
        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
      </View>
    );
}