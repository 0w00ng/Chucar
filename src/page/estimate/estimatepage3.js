import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';

export default function EstimatePageScreen3({ navigation }) {
  const [menufact, setMenufact] = React.useState("");
  const [model, setModel] = React.useState("");
  const [grade, setGrade] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={styles.title}>
                차량 조건을{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={styles.label}>차량 가격</Text>
            <TextInput style={styles.input}
              value={menufact}
              onChangeText={menufact => setMenufact(menufact)}
            />
            <Text style={styles.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={styles.label}>월 납입금</Text>
            <TextInput style={styles.input}
              value={model}
              onChangeText={model => setModel(model)}
            />
            <Text style={styles.label2}>만원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={styles.label}>주행거리</Text>
            <TextInput style={styles.input}
              value={grade}
              onChangeText={grade => setGrade(grade)}
            />
            <Text style={styles.label2}>km</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage4')}>
                <Text style={styles.buttontxt3}>계속하기(3/5)</Text>
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
    label: {
      color : '#a0a0a0',
      fontSize: 20,
      marginLeft: 20,
    },
    label2: {
      fontSize: 20,
      marginRight: 20,
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
        color:'navy'
    },
    input: {
      selectionColor: 'black',
      backgroundColor: 'white',
      fontSize: 20,
      textAlign: 'right',
      labelSize: 20,
      margin: 10,
      width:'50%',
    }
}