import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image,Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import default_Image from '../../img/addImage.png'
import { TextInput } from 'react-native-paper';
import storage from '../storage';
import axios from 'axios';
import s from '../style'

export default function RegisterPageScreen2({route,navigation }) {
  const [profile, setProfile] = useState('');

  const showImage = () => {
    launchImageLibrary({}, (response)=>{
      if(!response.didCancel) {
        const uri = response.assets[0].uri
        console.log(uri);
        setProfile(uri);
      }
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


  const setPro = async()=> {
    const id = await storage.getData('id'); 

    AWS.config.update({
      region: "ap-northeast-2", 
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "ap-northeast-2:28135c36-61d3-4095-928b-c5d71e13ffe1",
      }),
    })

    const uploadImg = (file,id) => {
      const fileName = `${id}.jpg`
      
      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'chucarimg/profile',
          Key: fileName,
          Body: file,
          ContentType: `image/jpg`,
        },
      })
      const promise = upload.promise();

      promise.then(
        function (data) {
          //alert("이미지 업로드에 성공했습니다.")
        },
        function (err) {
          return alert("오류가 발생했습니다: ", err.message)
        }
      )
      return fileName;
    }

    const response1 = await fetch(profile)
    const file = await response1.blob()
    const fileName = uploadImg(file,id);
    profileUrl=`https://chucarimg.s3.ap-northeast-2.amazonaws.com/profile/${fileName}`;
    console.log(profileUrl)

    await axios({    //DB 전송
      method:"put",
      url:`${storage.chucar_url}/profile/${id}`, 
      data : {
        profile:profileUrl
      }
    })
    .then(function (res) {
      navigation.popToTop();
      Alert.alert('알림','수정이 완료되었습니다.')
    })
    .catch(function (err) {
        console.log(err);
    })
  }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={s.title}>
          사진을 넣어주세요
        </Text>
      </View>

      <View style={{alignItems:'center'}}>
        <ImageBox img={profile}/>
      </View>

      <View style={{alignItems:'center',margin:20}}>
        <TouchableOpacity style={s.buttonbg3}
        onPress={() => {setPro()}}>
            <Text style={s.buttontxt3}>수정하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}