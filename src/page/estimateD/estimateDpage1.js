import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import s from '../../style'
import default_Image from '../../../img/addImage.png'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function EstimatePageScreen4({ route, navigation }) {
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');
  const [img5, setImg5] = useState('');
  const [img6, setImg6] = useState('');
  const [img7, setImg7] = useState('');
  const [img8, setImg8] = useState('');


  const showImage = (num) => {
    launchImageLibrary({}, (response)=>{
      if(!response.didCancel) {
        const uri = response.assets[0].uri
        console.log(uri);
        switch(num){
          case 1: setImg1(uri);break;
          case 2: setImg2(uri);break;
          case 3: setImg3(uri);break;
          case 4: setImg4(uri);break;
          case 5: setImg5(uri);break;
          case 6: setImg6(uri);break;
          case 7: setImg7(uri);break;
          case 8: setImg8(uri);break;
        }
      }
    })
  }

  const ImageBox = ({img, num}) => {
    return(
      <TouchableOpacity style={s.imageBox} onPress={()=>showImage(num)}>
      {img
        ? <Image source={{uri:img}} style={s.imageStyle} resizeMode='contain'/>
        : <Image source={default_Image} style={s.imageStyle} resizeMode='contain'/>}
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
        <View>
          <Text style={s.title}>
              사진을 등록해주세요
          </Text>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
        }}>
          <ImageBox img={img1} num={1}/>
          <ImageBox img={img2} num={2}/>
          <ImageBox img={img3} num={3}/>
          <ImageBox img={img4} num={4}/>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
        }}>
          <ImageBox img={img5} num={5}/>
          <ImageBox img={img6} num={6}/>
          <ImageBox img={img7} num={7}/>
          <ImageBox img={img8} num={8}/>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity 
          style={s.buttonbg3}
          onPress={() => navigation.navigate('EstimatePage2',{
            img1:img1,
            img2:img2,
            img3:img3,
            img4:img4,
            img5:img5,
            img6:img6,
            img7:img7,
            img8:img8,
          })}>
            <Text style={s.buttontxt3}>계속하기(1/3)</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
  