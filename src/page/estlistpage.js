import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist_empty from '../../img/estlist.jpg'
import DefaultUser from '../../img/Default_Profile.png'
import EstlistViewPageScreen from "./estlistVpage";

export default function EstlistPageScreen({ navigation }) {
  navigation.setOptions({ headerShown: true });      // 헤더바 숨기기

  const empty = true;
  const DATA = [
    {
      id: '1',
      title: 'BMW 320d 1000만원대 원합니다.',
      model:'BMW 320d',
      price:'1000~2000만원',
      kind:1,
      deadline:false,
    },
    {
      id: '2',
      title: '영웅이가 타던 K5 삽니다',
      model:'K5',
      price:'880만원',
      kind:1,
      deadline:true,
    },
  ];
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
    title={item.title} 
    model={item.model}
    price={item.price}
    kind={item.kind}
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