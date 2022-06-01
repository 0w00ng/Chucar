import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import s from '../../style'
import DropDownPicker from 'react-native-dropdown-picker';

import storage from '../../storage';
import axios from 'axios';


export default function EstimatePageScreen2({ route, navigation }) {
  const {kind} = route.params;
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [distance, setDistance] = useState("");
  const [option, setOption] = useState("");

  const [openBrand, setOpenBrand] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("전차종");
  const [itemsBrand, setItemsBrand] = useState([])
  const [itemsModel, setItemsModel] = useState([]);

  useEffect(()=>{
    (async ()=>{
      try {
        const temp = await axios({
          method: 'GET',
          url:`${storage.chucar_url}/car`,
          headers:{
              'content-type':'application/x-www-form-urlencoded;charset=utf-8',
          }
        })
        setItemsBrand(temp.data);
        console.log(itemsBrand);
      } catch(err) {
        console.log(err)
      }
    })();
  },[]);

  useEffect(()=>{
    (async ()=>{
      try {
        const temp = await axios({
          method: 'GET',
          url:`${storage.chucar_url}/car?brand=${encodeURIComponent(brand)}`,
          headers:{
              'content-type':'application/x-www-form-urlencoded;charset=utf-8',
          }
        })
        setItemsModel(temp.data);
        console.log(itemsModel);
      } catch(err) {
        console.log(err)
      }
    })();
  },[brand]);

  useEffect(()=>{
    setOpenModel(false);
  },[openBrand]);


  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>                                                                                                                                                   
      <View>
        <Text style={s.title}>
            견적차량 정보를{'\n'}
            입력 해주세요
        </Text>
      </View>
      <KeyboardAwareScrollView style={{
        padding:5
      }}>
        <DropDownPicker
        style={{ zIndex: 10,
          elevation: 10,
        marginBottom:10,}}
        open={openBrand}
        value={brand}
        items={itemsBrand}
        setOpen={setOpenBrand}
        setValue={setBrand}
        setItems={setItemsBrand}
        //categorySelectable={false}
        translation={{
          PLACEHOLDER: "제조사를 선택해주세요.",
        }}
        schema={{
          label: 'CF_BRAND',
          value: 'CF_BRAND',
        }}
        />
        <DropDownPicker
          style={{ zIndex: 1,
          elevation: 1,}}
          open={openModel}
          value={model}
          items={itemsModel}
          setOpen={setOpenModel}
          setValue={setModel}
          setItems={setItemsModel}
          translation={{
            PLACEHOLDER: "차종을 선택해주세요.",
            NOTHING_TO_SHOW: "제조사를 먼저 선택해주세요"
        }}
          schema={{
            label: 'CF_MODEL',
            value: 'CF_MODEL',
          }}
        />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={s.label}>희망 가격</Text>
          <TextInput style={s.inputS}
            value={price}
            onChangeText={price => setPrice(price)}
            maxLength={20}
            keyboardType="number-pad"
          />
          <Text style={s.label2}>만원</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={s.label}>희망 연식</Text>
          <TextInput style={s.inputS}
            value={year}
            onChangeText={year => setYear(year)}
            maxLength={20}
            keyboardType="number-pad"
          />
          <Text style={s.label2}>년도</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={s.label}>주행거리</Text>
          <TextInput style={s.inputS}
            value={distance}
            onChangeText={distance => setDistance(distance)}
            maxLength={20}
            keyboardType="number-pad"
          />
          <Text style={s.label2}>km</Text>
        </View>
        {/* <View style={s.rowcontainer}>
          <TextInput style={s.inputL}
            label="필요옵션 ex) 기본옵션, 선루프, 열선시트"
            value={option}
            onChangeText={option => setOption(option)}
          />
        </View> */}
      </KeyboardAwareScrollView>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => navigation.navigate('EstimatePage3',{
          kind:kind,
          brand:brand,
          year:year,
          model:model,
          price:price,
          distance:distance,
          option:option
        })}>
            <Text style={s.buttontxt3}>계속하기(2/3)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}