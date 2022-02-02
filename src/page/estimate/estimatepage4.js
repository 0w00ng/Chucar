import React, { useState } from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';

export default function EstimatePageScreen4({ navigation }) {
  const [menufact, setMenufact] = React.useState("");
  const [model, setModel] = React.useState("");
  const [grade, setGrade] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
          <View>
            <Text style={styles.title}>
                견적 추가사항을{'\n'}
                입력 해주세요
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput style={styles.input}
              label="필요옵션"
              value={menufact}
              onChangeText={menufact => setMenufact(menufact)}
            />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput style={styles.input}
              label="딜러에게 하고싶은 말"
              value={model}
              onChangeText={model => setModel(model)}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonbg3}
            onPress={() => navigation.navigate('EstimatePage5')}>
                <Text style={styles.buttontxt3}>계속하기(4/5)</Text>
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
      labelSize: 20,
      margin: 20,
      width:'90%',
    }
}