import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'

export default function EstimatePageScreen1({ navigation }) {
  const [checkstate1, setcheckstate1] = useState(false)
  const [checkstate2, setcheckstate2] = useState(false)
  const [checkstate3, setcheckstate3] = useState(false)
  const [checkstate4, setcheckstate4] = useState(false)

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={styles.title}>
                견적 종류를{'\n'}
                선택 해주세요
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate1}
            onValueChange={(newValue) => {
                setcheckstate1(newValue)
                setcheckstate2(false)
                setcheckstate3(false)
                setcheckstate4(false)
            }}
            style={styles.checkbox}
            />
            <Text style={styles.label}>할부로 진행할게요</Text>
          </View>
          <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate2}
            onValueChange={(newValue) => {
                setcheckstate1(false)
                setcheckstate2(newValue)
                setcheckstate3(false)
                setcheckstate4(false)
            }}
            style={styles.checkbox}
            />
            <Text style={styles.label}>렌트로 진행할게요</Text>
          </View>
          <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate3}
            onValueChange={(newValue) => {
                setcheckstate1(false)
                setcheckstate2(false)
                setcheckstate3(newValue)
                setcheckstate4(false)
            }}
            style={styles.checkbox}
            />
            <Text style={styles.label}>리스로 진행할게요</Text>
          </View>
          <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={checkstate4}
            onValueChange={(newValue) => {
                setcheckstate1(false)
                setcheckstate2(false)
                setcheckstate3(false)
                setcheckstate4(newValue)
            }}
            style={styles.checkbox}
            />
            <Text style={styles.label}>현금으로 진행할게요</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage2')}>
                <Text style={styles.buttontxt3}>계속하기(1/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}

const styles = {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      margin: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      fontSize: 20,
      margin: 10,
    },
    title: {
      margin: 20,
      fontSize: 30,
      fontWeight: 'bold',
      color:'navy'
    },
    buttonbg3: {
        borderWidth:3,
        borderRadius: 10,
        margin:10,
        width:'90%',
        height:60,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    buttontxt3: {
        fontSize: 20,
        margin:5,
        color:'navy'
    },
}