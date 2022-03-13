import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity,Image,FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import axios from "axios";
import storage from '../../storage';
import s from '../../style'

import carSerch from '../../../img/carSerch.png'

import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

export default function EstlistPageScreen({ route,navigation }) {
  const {isDealer,id} = route.params;
  const [checkState, setCheckState] = useState(false);
  const [DATA,setDATA] = useState();
  const [keyword,setKeyword] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: '전체보기', value:''},
    {label: '신차', value:1},
    {label: '중고차', value:2},
    {label: '렌트', value:3},
    {label: '리스', value:4},
  ]);

  useEffect(()=>{
    (async ()=>{
      let usrid = '';
      let proid = '';
      let kind = `&kind=${value}`;
      if(checkState){
        isDealer
        ? proid=`&proid=${id}` 
        : usrid=`&usrid=${id}`
      }

      const url = `${storage.chucar_url}/contracts?keyword=${keyword}${usrid}${proid}${kind}`
      console.log(url)

      try {
        const temp = await axios({
          method: 'GET',
          url:url,
          headers:{
              'content-type':'application/x-www-form-urlencoded;charset=utf-8',
          }
        })
        setDATA(temp.data);
      } catch(err) {
        console.log(err)
      }
    })();
  },[checkState,keyword,value]);


  function CheckKind(kind) {
    switch(kind)
    {
      case 1: return "신차";
      case 2: return "중고";
      case 3: return "렌트";
      case 4: return "리스";
    }
  };

  const Item = ({ CT_TITLE,CT_BRAND,CT_MODEL,CT_PRICE,CT_KIND,CT_YEAR,CT_COMMENT,CT_NUM,CT_STAT,CT_USRID,CT_DISTANCE,CT_OPTION,CT_REPLYCNT }) => (
    <TouchableOpacity 
      style={
        CT_STAT
          ? CT_KIND==2
              ? {...s.estlistContainer,backgroundColor:'#FDFFEB'}
              : CT_KIND==3
                ? {...s.estlistContainer,backgroundColor:'#EBFEFF'}
                : CT_KIND==4
                  ? {...s.estlistContainer,backgroundColor:'#EBFFEE'}
                  : s.estlistContainer
          : s.estlistContainer_Dead
      }
      onPress={()=>navigation.navigate('EstlistVPage',{
        CT_TITLE:CT_TITLE,
        CT_BRAND:CT_BRAND,
        CT_MODEL:CT_MODEL,
        CT_PRICE:CT_PRICE,
        CT_KIND:CT_KIND,
        CT_COMMENT:CT_COMMENT,
        CT_YEAR:CT_YEAR,
        CT_NUM:CT_NUM,
        CT_STAT:CT_STAT,
        CT_USRID:CT_USRID,
        CT_DISTANCE,CT_DISTANCE,
        CT_OPTION:CT_OPTION,
        isDealer:isDealer,
        id:id,
      })}
    >
        <Text style={s.estlistTitle}>{CT_TITLE}</Text>
        <View style={s.estlistTextV}>
          <View style={{...s.estlistTextV,flexDirection:'column'}}>
            <Text style={s.estlistText}>{`\n차종 : ${CT_BRAND} ${CT_MODEL}`} </Text>
            <Text style={s.estlistText}>{'희망가격 : ' + CT_PRICE + ' 만원'}</Text>
          </View>
          <View style={{...s.estlistTextV,flexDirection:'column',alignItems:'center'}}>
            <Text style={s.estlistText}>{`${CheckKind(CT_KIND)}`} </Text>
            <Text style={{...s.estlistText,backgroundColor:'navy',color:'white',borderRadius:100,padding:5}}>{CT_REPLYCNT}</Text>
          </View>
        </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item 
    CT_TITLE={item.CT_TITLE} 
    CT_MODEL={item.CT_MODEL}
    CT_BRAND={item.CT_BRAND}
    CT_PRICE = {item.CT_PRICE}
    CT_OPTION = {item.CT_OPTION}
    CT_DISTANCE = {item.CT_DISTANCE}
    CT_KIND ={item.CT_KIND}
    CT_COMMENT ={item.CT_COMMENT}
    CT_YEAR ={item.CT_YEAR}
    CT_NUM ={item.CT_NUM}
    CT_STAT ={item.CT_STAT}
    CT_USRID ={item.CT_USRID}
    CT_REPLYCNT ={item.CT_REPLYCNT}
    />
  );
  console.log('id : ' + id)
  console.log('isDealer : ' + isDealer)

    return (
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <View style={s.rowcontainer}>
          <TextInput style={{...s.inputL,margin:10}}
            label="제목 또는 차종을 검색하세요..."
            value={keyword}
            onChangeText={keyword => setKeyword(keyword)}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection:'row',
            alignItems:'center',
            margin:10
          }}
          onPress={()=>{
            setCheckState(checkState ? false:true)
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