import React, { useEffect, useState } from 'react';
import IMP from 'iamport-react-native'; // 아임포트 결제모듈을 불러옵니다.
import storage from '../../storage';
import axios from 'axios';
import { View } from 'react-native';

export default function PaymentPage({navigation}) {

    const [merchant,setMerchant] = useState(null);
    const [paycnt,setPaycnt] = useState();
    const [userid,setUserid] = useState();
  
    useEffect(()=>{
        (async()=>{
            setUserid(await storage.getData('id'));
            console.log('id : '+userid);
            await axios({ // 다음 주문번호 발급
            url: `${storage.chucar_url}/merchant`,
            method: 'POST',
            data: {
                code: 1, //상품번호 일단 1로 고정
                customer_uid: `${userid}`,
            }
            })
            .then(function(res) {
                console.log(res.data);
                console.log(res.data.substr(11,4));
                setMerchant(res.data);
                setPaycnt(res.data.substr(11,4));
            })
            .catch(function(err) {
                console.log(err)
            })
        })();
    },[userid]);

    if(merchant!='undefined'&&merchant!=undefined){
        const data = {
            pg: 'danal_tpay',
            pay_method: 'card',
            name: '츄카 딜러 이용권 결제',
            merchant_uid: merchant, //결제 id
            amount: paycnt=='0001'? 0 : 777, //금액 (첫번째만(주문번호== 0001) 0원으로 추후 설정)
            customer_uid: `${userid}`,
            // buyer_name: '홍길동',
            buyer_tel: '01012345678',
            // buyer_email: 'example@naver.com',
            // buyer_addr: '서울시 강남구 신사동 661-16',
            // buyer_postcode: '06018',
            app_scheme: 'example',
            // [Deprecated v1.0.3]: m_redirect_url
        };
        navigation.navigate('PaymentPage2',{
            data:data,
        });
    }
    return (
      <View>

      </View>
    );
    
}