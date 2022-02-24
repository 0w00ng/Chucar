import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity,Image,FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import axios from "axios";
import storage from '../../storage';
import s from '../../style'
//img

export default function EstlistPageScreen({ route,navigation }) {
  const {isDealer,id} = route.params;
  const [checkState, setCheckState] = useState(false);
  const [DATA,setDATA] = useState();

  useEffect(()=>{
    (async ()=>{
      const url = 
        checkState
          ? isDealer
            ? `${storage.chucar_url}/contracts/pro/${id}`
            : `${storage.chucar_url}/contracts/${id}`
          : `${storage.chucar_url}/contracts`

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

  const Item = ({ CT_TITLE,CT_MODEL,CT_PRICE,CT_KIND,CT_COMMENT,CT_NUM,CT_STAT,CT_USRID }) => (
    <TouchableOpacity 
      style={
        CT_STAT
          ? s.estlistContainer
          : s.estlistContainer_Dead
      }
      onPress={()=>navigation.navigate('EstlistVPage',{
        CT_TITLE:CT_TITLE,
        CT_MODEL:CT_MODEL,
        CT_PRICE:CT_PRICE,
        CT_KIND:CT_KIND,
        CT_COMMENT:CT_COMMENT,
        CT_NUM:CT_NUM,
        CT_STAT:CT_STAT,
        CT_USRID:CT_USRID,
        isDealer:isDealer,
        id:id,
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
    CT_COMMENT ={item.CT_COMMENT}
    CT_NUM ={item.CT_NUM}
    CT_STAT ={item.CT_STAT}
    CT_USRID ={item.CT_USRID}
    />
  );
  console.log('id : ' + id)
  console.log('isDealer : ' + isDealer)
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
      }}>{isDealer==undefined
          ? ``
          : `내가 보낸 견적${isDealer ? "" : "신청"}서`
          }</Text>
        </TouchableOpacity>
        
        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
      </View>
    );
}