import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import storage from '../../storage';
import axios from 'axios';

export default function RegistePageScreen3({ route,navigation }) {

  const {company,name,email,phone,face} = route.params;  // Page2에서 보낸 데이터저장

    useEffect(()=>{
      (async()=>{
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
              Bucket: 'chucarimg/idcard',
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

        const response1 = await fetch(face)
        const file = await response1.blob()
        const fileName = uploadImg(file,id);
        faceUrl=`https://chucarimg.s3.ap-northeast-2.amazonaws.com/idcard/${fileName}`;
        console.log(faceUrl)

        axios.put(`${storage.chucar_url}/setpro`, {    //DB 전송
          id:'456',//id,
          name:`${name}`,
          phone:phone,
          email:email,
          idcard:faceUrl,
          company:company,
          card:0,
          prv1:0,
          prv2:0,
          prv3:0,
        })
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        })
      })();
    },[])

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <View style={{alignItems:'center'}}>
            <Image 
              source={success}
              style={{width:'40%'}}
              resizeMode='contain'
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={s.title}>
                등록이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('MainPage')
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}