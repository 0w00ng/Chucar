import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import default_Image from '../../../img/addImage.png'
import { TextInput } from 'react-native-paper';
import s from '../../style'

export default function RegisterPageScreen2({route,navigation }) {
  const {nickname,email,phone} = route.params;  // Page1에서 보낸 데이터저장
  const [face, setFace] = useState('');

  const showImage = () => {
    launchImageLibrary({}, (response)=>{
      const uri = response.assets[0].uri
      console.log(uri);
      setFace(uri);
    })
  }

  const ImageBox = ({img}) => {
    return(
      <TouchableOpacity style={{width:300,height:300}} onPress={()=>showImage()}>
      {img
        ? <Image source={{uri:img}} style={s.imageStyle} resizeMode='contain'/>
        : <Image source={default_Image} style={s.imageStyle} resizeMode='contain'/>}
      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={s.title}>
            사원증을 입력해주세요
        </Text>
      </View>

      <View style={{alignItems:'center'}}>
        <ImageBox img={face}/>
      </View>

      <View style={{alignItems:'center',margin:20}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => {navigation.navigate('RegisterPage3',{       // Page3로 화면전환 및 정보송신
          nickname:nickname,
          email:email,
          phone:phone,
          face:face,
        })
        }}>
            <Text style={s.buttontxt3}>완료(2/2)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}