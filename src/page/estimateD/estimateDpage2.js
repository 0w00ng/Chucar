import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function EstimatePageScreen2({ route, navigation }) {
  const {img1,img2,img3,img4,img5,img6,img7,img8} = route.params;
  const [model, setModel] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [option, setOption] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                차량 정보를{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="차량 모델"
              value={model}
              onChangeText={model => setModel(model)}
            />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>차량 가격</Text>
            <TextInput style={s.inputS}
              value={price}
              onChangeText={price => setPrice(price)}
            />
            <Text style={s.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={s.label}>주행거리</Text>
            <TextInput style={s.inputS}
              value={distance}
              onChangeText={distance => setDistance(distance)}
            />
            <Text style={s.label2}>km</Text>
          </View>
          <View style={s.rowcontainer}>
            <TextInput style={s.inputL}
              label="옵션"
              value={option}
              onChangeText={option => setOption(option)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage3',{
              model:model,
              price:price,
              distance:distance,
              option:option,
              img1:img1,
              img2:img2,
              img3:img3,
              img4:img4,
              img5:img5,
              img6:img6,
              img7:img7,
              img8:img8,
            })}>
                <Text style={s.buttontxt3}>계속하기(2/3)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}