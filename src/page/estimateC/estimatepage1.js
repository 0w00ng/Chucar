import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import s from '../../style'
import { forModalPresentationIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";

export default function EstimatePageScreen1({ navigation }) {
  const [checkstate1, setcheckstate1] = useState(true);
  const [checkstate2, setcheckstate2] = useState(false);
  const [checkstate3, setcheckstate3] = useState(false);
  const [checkstate4, setcheckstate4] = useState(false);
  const [kind, setKind] = useState(1);

  const checkf = (check) => {
    setKind(check)        //kind 값 입력
    if(check==1) setcheckstate1(true);      //Check
    if(check==2) setcheckstate2(true);
    if(check==3) setcheckstate3(true);
    if(check==4) setcheckstate4(true);

    if(check!=1) setcheckstate1(false);     // Other False
    if(check!=2) setcheckstate2(false);
    if(check!=3) setcheckstate3(false);
    if(check!=4) setcheckstate4(false);
  }

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                거래 방식을{'\n'}
                선택 해주세요
            </Text>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                checkf(1);
              }}
            >
              <CheckBox                                   // 1번 체크박스
                disabled={true}
                value={checkstate1}
                style={s.checkbox}
                />
                <Text style={s.label}>신차로 진행할게요</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                checkf(2);
              }}
            >
              <CheckBox                                   // 2번 체크박스
                disabled={true}
                value={checkstate2}
                style={s.checkbox}
                />
                <Text style={s.label}>중고차로 진행할게요</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                checkf(3);
              }}
            >
              <CheckBox                                   // 3번 체크박스
                disabled={true}
                value={checkstate3}
                style={s.checkbox}
                />
                <Text style={s.label}>렌트로 진행할게요</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                checkf(4);
              }}
            >
              <CheckBox                                   // 4번 체크박스
                disabled={true}
                value={checkstate4}
                style={s.checkbox}
                />
                <Text style={s.label}>리스로 진행할게요</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={s.buttonbg3}
            onPress={() => {
              navigation.navigate('EstimatePage2',{
              kind:kind});
            }}>
                <Text style={s.buttontxt3}>계속하기(1/3)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}