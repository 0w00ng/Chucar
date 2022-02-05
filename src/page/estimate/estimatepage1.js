import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import s from '../../style'

export default function EstimatePageScreen1({ navigation }) {
  const [checkstate1, setcheckstate1] = useState(false)
  const [checkstate2, setcheckstate2] = useState(false)
  const [checkstate3, setcheckstate3] = useState(false)
  const [checkstate4, setcheckstate4] = useState(false)

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={s.title}>
                견적 종류를{'\n'}
                선택 해주세요
            </Text>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                setcheckstate1(checkstate1 ? 0:1)         //Check Toggle
                setcheckstate2(false)
                setcheckstate3(false)
                setcheckstate4(false)
              }}
            >
              <CheckBox                                   // 1번 체크박스
                disabled={true}
                value={checkstate1}
                style={s.checkbox}
                />
                <Text style={s.label}>할부로 진행할게요</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                setcheckstate2(checkstate2 ? 0:1)
                setcheckstate1(false)
                setcheckstate3(false)
                setcheckstate4(false)
              }}
            >
              <CheckBox                                   // 2번 체크박스
                disabled={true}
                value={checkstate2}
                style={s.checkbox}
                />
                <Text style={s.label}>현금으로 진행할게요</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={s.checkboxContainer}
              onPress={()=>{
                setcheckstate3(checkstate3 ? 0:1)
                setcheckstate1(false)
                setcheckstate2(false)
                setcheckstate4(false)
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
                setcheckstate4(checkstate4 ? 0:1)
                setcheckstate1(false)
                setcheckstate2(false)
                setcheckstate3(false)
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
            onPress={() => navigation.navigate('EstimatePage2')}>
                <Text style={s.buttontxt3}>계속하기(1/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}