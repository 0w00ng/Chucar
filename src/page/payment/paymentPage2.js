import React, { useEffect, useState } from 'react';
import IMP from 'iamport-react-native'; // 아임포트 결제모듈을 불러옵니다.
import storage from '../../storage';
import axios from 'axios';

export default function PaymentPage({route,navigation}) {

    const {data} = route.params;

    const callback = (response) => { /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
      console.log(response);
      navigation.replace('MainPage',response);
      alert('결제가 완료되었습니다.')
    };
    return (
      <IMP.Payment
        userCode={'imp62201906'} // 가맹점 식별코드
        data={data} // 결제 데이터
        callback={callback} // 결제 종료 후 콜백
        // loading={{
        //   message: '잠시만 기다려주세요...', // 로딩화면 메시지 
        //   image: {uri:'../../../img/chucar-logoN3.png'} // 커스텀 로딩화면 이미지
        // }}
      />
    );
    
}