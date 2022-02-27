import React, { useEffect, useState } from 'react';
import storage from '../../storage';
import axios from 'axios';
import { View } from 'react-native';

export default function UnPaymentPage({navigation}) {

    const [userid,setUserid] = useState();
  
    useEffect(()=>{
        (async()=>{
            setUserid(await storage.getData('id'));
            console.log('id : '+userid);
            await axios({
                url: `${storage.chucar_url}/subscribe/payments/unschedule`,
                method: "post",
                data: {
                customer_uid: `${userid}` // (회원번호) 카드(빌링키)와 1:1로 대응하는 값
                }
            })
            .then(function(res) {
                console.log(res.data);
            })
            .catch(function(err) {
                console.log(err)
            })
        })();
    },[userid]);

    navigation.navigate('Root',{screen:'MainPage'})
    alert('정기결제 취소가 완료되었습니다.');

    return (
        <View>

        </View>
    );
    
}