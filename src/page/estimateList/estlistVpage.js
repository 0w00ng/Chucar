import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import storage from '../../storage';
import axios from "axios";
import s from '../../style';

import Default_icon from '../../../img/Default_Profile.png'


export default function EstlistViewPageScreen({ route, navigation }) {
  const {CT_TITLE,CT_MODEL,CT_PRICE,CT_COMMENT,CT_KIND,CT_STAT,CT_NUM,CT_USRID,isDealer,id} = route.params;
 
  const [checkState, setCheckState] = useState(false);
  const [DATA,setDATA] = useState();
  const [empty,setEmpty] = useState();

  useEffect(()=>{
    (async() => {
      const listData = await axios({
        method: 'GET',
        url:`http://34.64.207.117:3000/reply/${CT_NUM}`,
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
        }
      });
      setDATA(await listData.data);
      console.log(DATA);
      console.log(id + ct_us);
    })();
  },[]);

  const deadLine = async() => { //마감치기
    try {
      access_token = await storage.getData('access_token');
      console.log(access_token);
      console.log(CT_STAT);
      const getData = await axios({
        method: 'patch',
        url: `http://34.64.207.117:3000/contracts/finish/${CT_NUM}`, // finish/ 뒤에 견적번호 임
        headers:{
          Authorization: `${access_token}`,
          'Content-type':'application/x-www-form-urlencoded;utf-8'
        }
      })
      console.log(getData.data);
    } catch(err) {
        console.log(err);
    }
  }

  const Item = ({ CR_MODEL,CR_PRICE,CR_COMMENT,CR_DISTANCE,phone,CR_NICKNAME }) => (
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
        <Text>{CR_COMMENT}</Text>
      <View style={{flexDirection:'row'}}>
        <Image source={Default_icon}/>  
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
    CR_COMMENT ={item.CR_COMMENT}
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
           <Text>{'' + CT_COMMENT}</Text>
           <View style={{alignItems:'center'}}>
            <TouchableOpacity 
            style={s.buttonbg3}
            onPress={()=>
              CT_STAT 
                ? CT_USRID==id
                  ? deadLine() //'마감 하기'
                  : navigation.navigate('EstimateDPage',{
                      cr_num:CT_NUM
                    })          //'견적서 보내기' 
                : alert('마감 되었습니다.')//'마감 되었습니다.'
            }
            >
              <Text style={s.buttontxt2}>{
                CT_STAT 
                ? CT_USRID==id
                  ? '마감 하기'
                  : '견적서 보내기' 
                : '마감 되었습니다.'
              }</Text>
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