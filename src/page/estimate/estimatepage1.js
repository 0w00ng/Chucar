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
          <View style={s.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate1}
            onValueChange={(newValue) => {
                setcheckstate1(newValue)
                setcheckstate2(false)
                setcheckstate3(false)
                setcheckstate4(false)
            }}
            style={s.checkbox}
            />
            <Text style={s.label}>할부로 진행할게요</Text>
          </View>
          <View style={s.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate2}
            onValueChange={(newValue) => {
                setcheckstate1(false)
                setcheckstate2(newValue)
                setcheckstate3(false)
                setcheckstate4(false)
            }}
            style={s.checkbox}
            />
            <Text style={s.label}>렌트로 진행할게요</Text>
          </View>
          <View style={s.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate3}
            onValueChange={(newValue) => {
                setcheckstate1(false)
                setcheckstate2(false)
                setcheckstate3(newValue)
                setcheckstate4(false)
            }}
            style={s.checkbox}
            />
            <Text style={s.label}>리스로 진행할게요</Text>
          </View>
          <View style={s.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate4}
            onValueChange={(newValue) => {
                setcheckstate1(false)
                setcheckstate2(false)
                setcheckstate3(false)
                setcheckstate4(newValue)
            }}
            style={s.checkbox}
            />
            <Text style={s.label}>현금으로 진행할게요</Text>
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