import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import storage from '../../storage';
import axios from 'axios';

// import Amplify, { Auth, Storage } from 'aws-amplify';
// Amplify.configure({
//     Auth: {
//         identityPoolId: '아이덴티티 풀 ㅇㅏ이디', //REQUIRED - Amazon Cognito Identity Pool ID
//         region: 'ap-northeast-2', // REQUIRED - Amazon Cognito Region
//     },
//     Storage: {
//         AWSS3: {
//             bucket: '버켓이름', //REQUIRED -  Amazon S3 bucket
//             region: 'ap-northeast-2', //OPTIONAL -  Amazon service region
//         }
//     }
// });

// const response1 = await fetch(this.state.photo)
// //this.state.photo 에는 사진의 uri가 들어가면 됨. 
// const blob = await response1.blob()
// var params = {Bucket: '버켓이름', Key: `'${사진이름}'.jpeg`, Body: blob, ACL: 'public-read'}

// try {
//   const response = await fetch(this.state.photo)
//   const blob = await response.blob()
//   Storage.put(`'${this.state.goodsName}'.jpeg`, blob, {
//     contentType: 'image/jpeg',
//   })
// } catch (err) {
//   console.log(err)
// }

// Amazon Cognito 인증 공급자를 초기화합니다
// CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
//   getApplicationContext(),
//   "ap-northeast-2:28135c36-61d3-4095-928b-c5d71e13ffe1", // 자격 증명 풀 ID
//   Regions.AP_NORTHEAST_2 // 리전
// );

export default function EstimatePageScreen5({ route,navigation }) {
  const {cr_num,title,model,price,distance,option,comment,img1,img2,img3,img4,img5,img6,img7,img8} = route.params;

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:28135c36-61d3-4095-928b-c5d71e13ffe1',
    })
  });
  var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
  });

  s3.upload(params, function(err, data) {
    if (err) {
      return alert('There was an error uploading your photo: ', err.message);
    }
    alert('Successfully uploaded photo.');
  });

  (async () => {
    const userid = await storage.getData('id');
    const nickname = await storage.getData('nickname');
    const access_token = await storage.getData('access_token');
      await axios({
        method: 'POST',
        url:`${storage.chucar_url}/reply`,
        headers:{
          Authorization: `${access_token}`,
        },
        data:{
          cr_model:model, //모델
          cr_title:title,
          cr_nickname:nickname,
          cr_num:cr_num,
          cr_comment:comment, //딜러에게할말
          cr_price:price, //가격
          cr_distance:distance, //최대주행거리 희망
          cr_option:option, //희망옵션 ex)선루프,,
          img1:'',
          img2:'',
          img3:'',
          img4:'',
          img5:'',
          img6:'',
          img7:'',
          img8:'',
          proid:userid,
        }
      })
      .then(function (res) { //성공
        console.log(`res : ${res.data}`);
      })
      .catch(function (err) { //실패
        console.log(`err : ${err}`);
      })
  })();
    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <View style={{alignItems:'center'}}>
            <Image 
              source={success} style={{width:'40%'}}
              resizeMode='contain'
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={s.title}>
                작성이 완료되었습니다 !
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('Root',{screen:'MainPage'})
              navigation.popToTop();              
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}