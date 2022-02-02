import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import banner_black from '../../img/banner_black.jpg'


export default function MainPageScreen({ navigation }) {

navigation.setOptions({ headerShown: false });

    return (
      <View style={{flex:1,flexDirection:'column',alignItems:'stretch'}}>
        <View style={{flex:0.7}}>
            <Image 
            style={{width:'100%',height:'100%'}}
            source={banner_black}
            resizeMode='cover'
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={styles.buttonbg1} 
            onPress={() => {
                navigation.navigate('견적1')
            }}>
                <Text style={styles.buttontxt1}>견적신청하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonbg2}>
                <Text style={styles.buttontxt2}>견적내역확인</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.tradetitle1}>누적거래수</Text>
        </View>
        <View style={styles.tradeview}>
            <View>
                <Text style={styles.tradetxt}>보낸 견적 건수</Text>
                <Text style={styles.tradetxt}>받은 견적 건수</Text>
                <Text style={styles.tradetxt}>하루 방문자 수</Text>
            </View>
            <View>
                <Text style={styles.tradetxt}>123</Text>
                <Text style={styles.tradetxt}>123</Text>
                <Text style={styles.tradetxt}>123</Text>
            </View>
        </View>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonbg3}>
                <Text style={styles.buttontxt3}>딜러 이용권 결제</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.Noticeview}>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={styles.Noticetitle}>공지사항</Text>
                <Text style={{textAlign:"right",margin:5}}>전체보기</Text>
            </View>
            <View style={{justifyContent:"flex-start"}}>
                <Text style={styles.tradetxt}>[공지] 이 프로젝트는 김동규 회사 과제입니다.</Text>
                <Text style={styles.tradetxt}>[공지] 어플수익의 90%는 김동규 소유예정.. </Text>
                <Text style={styles.tradetxt}>[속보] 충격.. 권우철 친호주파 선언</Text>
                <Text style={styles.tradetxt}>[속보] 권우철, "미개한 한국에서 살기 싫어" </Text>
                <Text style={styles.tradetxt}>[공지] 김영웅, 독립운동가를 위해 기부</Text>
            </View>
        </View>
      </View>
    );
  }

const styles = {
    buttonbg1: {
        borderWidth:3,
        borderRadius: 15,
        margin:10,
        width:150,
        height:50,
        borderColor:'white',
        backgroundColor:'navy',
        justifyContent:'center'
    },
    buttonbg2: {
        borderWidth:3,
        borderRadius: 15,
        margin:10,
        width:150,
        height:50,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:'center'
    },
    buttontxt1: {
        textAlign: 'center',
        fontSize: 20,
        margin:5,
        color:'white'
    },
    buttontxt2: {
        textAlign: 'center',
        fontSize: 20,
        margin:5,
        color:'navy'
    },
    tradetitle1: {
        textShadowColor: 'black',
        textShadowRadius: 1,
        textAlign: 'center',
        fontSize: 25,
        marginLeft:10,
    },
    tradeview: {
        //flex:1,
        margin:10,
        borderWidth:3,
        borderRadius: 15,
        borderColor:'white',
        backgroundColor:'white',
        justifyContent:"space-between",
        flexDirection:'row',
    },
    tradetxt: {
        margin:10,
        fontSize:18
    },
    buttonbg3: {
        borderWidth:3,
        borderRadius: 10,
        margin:10,
        width:300,
        height:50,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:'center'
    },
    buttontxt3: {
        textAlign: 'center',
        fontSize: 20,
        margin:5,
        color:'navy'
    },
    Noticetitle: {
        textShadowColor: 'black',
        textShadowRadius: 1,
        textAlign: "left",
        fontSize: 25,
        margin:10,
    },
    Noticeview: {
        margin:10,
        borderWidth:3,
        borderRadius: 15,
        borderColor:'white',
        backgroundColor:'white',
    },
}