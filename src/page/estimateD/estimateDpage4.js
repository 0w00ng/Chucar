import React, { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import fs from 'react-native-fs'
import decode from 'base64-arraybuffer'
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'
import s from '../../style'
import storage from '../../storage';
import axios from 'axios';
import AWS from "aws-sdk"

import default_Image from '../../../img/addImage.png'


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

export default function EstimatePageScreen5({ route,navigation }) {
  const {cr_num,cr_key,title,year,price,distance,option,comment,
          img1,img2,img3,img4,img5,img6,img7,img8} = route.params;
  let img=[img1,img2,img3,img4,img5,img6,img7,img8];

  useEffect(() => {
    AWS.config.update({
      region: "ap-northeast-2", 
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "ap-northeast-2:28135c36-61d3-4095-928b-c5d71e13ffe1",
      }),
    })

    const uploadImg = (file,idx,id) => {
      const fileName = `${cr_num}_${cr_key}_${id}_${idx}.jpg`
      
      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'chucarimg/contractCar',
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
      
    (async () => {
      const userid = await storage.getData('id');
      const access_token = await storage.getData('access_token');

      for(i=0;i<8;i++){
        if(img[i]){
          const response1 = await fetch(img[i])
          const file = await response1.blob()
          const fileName = uploadImg(file,i,userid);
          img[i]=`https://chucarimg.s3.ap-northeast-2.amazonaws.com/contractCar/${fileName}`;
          console.log(img[i])
        }
      }

      await axios({
        method: 'POST',
        url:`${storage.chucar_url}/reply`,
        headers:{
          Authorization: `${access_token}`,
        },
        data:{
          cr_title:title,
          cr_num:cr_num,
          cr_year:year,
          cr_price:price, //가격
          cr_distance:distance, //최대주행거리 희망
          cr_option:option, //희망옵션 ex)선루프,,
          cr_comment:comment, //딜러에게할말
          img0:img[0],
          img1:img[1],
          img2:img[2],
          img3:img[3],
          img4:img[4],
          img5:img[5],
          img6:img[6],
          img7:img[7],
          proid:userid,
        }
      })
      .then(function (res) { //성공
        console.log(res.data);
      })
      .catch(function (err) { //실패
        console.log(`err : ${err}`);
      })
    })();
  },[]);

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
              navigation.popToTop();
              navigation.popToTop();
              }}>
                <Text style={s.buttontxt3}>돌아가기</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}