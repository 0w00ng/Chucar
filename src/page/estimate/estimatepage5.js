import React, { useState } from "react";
import { View, Text,TouchableOpacity,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-paper';
import success from '../../../img/Success.png'

export default function EstimatePageScreen5({ navigation }) {
  const [menufact, setMenufact] = React.useState("");
  const [model, setModel] = React.useState("");
  const [grade, setGrade] = React.useState("");

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <View style={{alignItems:'center'}}>
            <Image 
              source={success} style={{width:'40%'}}
              resizeMode='contain'
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={styles.title}>
                견적 신청이 완료되었습니다 !{'\n'}
            </Text>
          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonbg3}
            onPress={() => navigation.popToTop()}>
                <Text style={styles.buttontxt3}>돌아가기(5/5)</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}

const styles = {
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      color : '#a0a0a0',
      fontSize: 20,
      marginLeft: 20,
    },
    title: {
      marginBottom: 30,
      fontSize: 25,
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