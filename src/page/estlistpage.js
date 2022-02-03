import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import s from '../style'
import estlist from '../../img/estlist.jpg'

export default function EstlistPageScreen({ navigation }) {

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View style={{alignItems:'center'}}>
            <Text style={s.title}>
                견적 요청 내역{'\n'}
            </Text>
          </View>
          <View>
            <Image source={estlist}/>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('Root',{screen:'Main'})
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}